#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2024-06-03  下午5:26
# @Author  : heshuai.huang
# @Desc: 滑块验证码offline V5.10.10
import random
import time
import execjs
import requests
from loguru import logger
from bs4 import BeautifulSoup
from typing import List, Optional, Tuple

from utils.bypass.geetest_util import OFFLINE_SAMPLE, USER_RESPONSE_JS

JS_RUNTIME = execjs.get(execjs.runtime_names.Node)
USER_RESPONSE_JS_CONTEXT = JS_RUNTIME.compile(USER_RESPONSE_JS)


def parse_code(html_doc: str) -> List[Tuple[str, str, str]]:
    logger.info("Parsing HTML document for company codes.")
    soup = BeautifulSoup(html_doc, 'html.parser')
    div_elements = soup.find_all('div', class_='tableContent page-item')
    result = []

    if div_elements:
        for div in div_elements:
            link = extract_link(div.get('onclick', ''))
            td_element = div.find('td')
            td_text = ''.join(td_element.get_text().split())

            i_element = div.find('i')
            i_text = ''.join(i_element.get_text().split())

            company_name = td_text[:-len(i_text)]
            company_code = div.find('th', class_='icon1').find('em').get_text()
            result.append((company_name, company_code, link))
    else:
        logger.info('Code Not Found')

    return result


def extract_link(onclick_value: str) -> str:
    logger.info(f"Extracting link from onclick value: {onclick_value}")
    start_index = onclick_value.find("'") + 1
    end_index = onclick_value.find("'", start_index)
    link = onclick_value[start_index:end_index]
    logger.info(f"Extracted link: {link}")
    return link


def calculate_user_response(distance: int, challenge: str) -> str:
    user_response = USER_RESPONSE_JS_CONTEXT.call('user_response', distance, challenge)
    return user_response


def calculate_validate(challenge: str) -> str:
    _r = random.randint(0, len(OFFLINE_SAMPLE) - 1)
    distance, rand0, rand1 = OFFLINE_SAMPLE[_r]
    distance_r = calculate_user_response(distance, challenge)
    rand0_r = calculate_user_response(rand0, challenge)
    rand1_r = calculate_user_response(rand1, challenge)
    validate = f"{distance_r}_{rand0_r}_{rand1_r}"
    return validate


class GeetestCaptchaSolver:
    def __init__(self, host: str, index: str):
        logger.info(f"Initializing GeetestCaptchaSolver with host: {host} and index: {index}")
        self.base_url = f"{host}/{index}/"
        self.session = requests.Session()
        self.captcha_json = {}
        self.headers = {
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
            'Accept-Language': 'zh-CN,zh;q=0.8,en;q=0.6,ja;q=0.4,zh-TW;q=0.2',
            'X-Requested-With': 'XMLHttpRequest',
            'Referer': self.base_url,
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
        }

    def get_session_token(self, url: str) -> Optional[str]:
        logger.info(f"Getting session token from URL: {url}")
        try:
            response = self.session.get(url, headers=self.headers)
            response.raise_for_status()
            session_token = self.parse_token(response.text)
            logger.info(f"Session token obtained: {session_token}")
            return session_token
        except requests.RequestException as e:
            logger.error(f"Failed to get session token: {e}")
            return None

    @staticmethod
    def parse_token(html_doc: str) -> Optional[str]:
        logger.info("Parsing token from HTML document.")
        soup = BeautifulSoup(html_doc, 'html.parser')
        token_input = soup.find('input', attrs={'name': 'session.token'})
        token = token_input['value'] if token_input else None
        logger.info(f"Parsed token: {token}")
        return token

    def search_keyword(self, keyword: str) -> Optional[List[dict]]:
        logger.info(f"Searching keyword: {keyword}")
        session_token = self.get_session_token(self.base_url)
        if not session_token:
            return None

        validate = self.get_validate(keyword)
        if not validate:
            return None

        query_code = self.search(validate, keyword, session_token)
        rows = [{'comp_name': r[0], 'comp_code': r[1], 'detail_url': r[2]} for r in query_code] if query_code else None
        logger.info(f"Search result: {rows}")
        return rows

    def get_validate(self, keyword: str) -> Optional[str]:
        logger.info(f"Getting validate for keyword: {keyword}")
        for i in range(1, 10):
            logger.info(f'Attempt {i} for keyword: {keyword}')
            if not self.register() or not self.verify_ip() or not self.verify_keyword(keyword):
                return None
            validate = calculate_validate(self.captcha_json['challenge'])
            if self.validate_captcha(validate):
                logger.info(f"Validate obtained: {validate}")
                return validate
        logger.info("Failed to obtain validate after 10 attempts.")
        return None

    def register(self) -> bool:
        try:
            register_url = f"{self.base_url}pc-geetest/register"
            params = {'v': str(int(time.time() * 1000))}
            response = self.session.get(register_url, headers=self.headers, params=params, timeout=10)
            response.raise_for_status()
            self.captcha_json = response.json()
            logger.info(f"Captcha JSON: {self.captcha_json}")
            return True
        except requests.RequestException as e:
            logger.error(f"Failed to register captcha: {e}")
            return False

    def verify_ip(self) -> bool:
        try:
            verify_ip_url = f"{self.base_url}security/verify_ip"
            response = self.session.get(verify_ip_url, headers=self.headers, timeout=10)
            response.raise_for_status()
            logger.info("IP verified.")
            return True
        except requests.RequestException as e:
            logger.error(f"Failed to verify IP: {e}")
            return False

    def verify_keyword(self, keyword: str) -> bool:
        try:
            verify_keyword_url = f"{self.base_url}security/verify_keyword"
            params = {'keyword': keyword}
            response = self.session.get(verify_keyword_url, headers=self.headers, params=params, timeout=10)
            response.raise_for_status()
            logger.info("Keyword verified.")
            return True
        except requests.RequestException as e:
            logger.error(f"Failed to verify keyword: {e}")
            return False

    def validate_captcha(self, validate: str) -> bool:
        try:
            validate_url = f"{self.base_url}pc-geetest/validate"
            params = {
                'geetest_challenge': self.captcha_json['challenge'],
                'geetest_validate': validate,
                'geetest_seccode': f"{validate}|jordan"
            }
            response = self.session.post(validate_url, headers=self.headers, data=params, timeout=10)
            response.raise_for_status()
            success = response.json().get('status') == 'success'
            logger.info(f"Captcha validation success: {success}, {response.text}")
            return success
        except requests.RequestException as e:
            logger.error(f"Failed to validate captcha: {e}")
            return False

    def search(self, validate: str, keyword: str, session_token: str) -> List[Optional[Tuple[str, str, str]]]:
        logger.info(f"Searching with validate: {validate}, keyword: {keyword}, session_token: {session_token}")
        search_url = f"{self.base_url}search/ent_info_list"
        params = {
            'condition.searchType': 1,
            'captcha': '',
            'geetest_challenge': self.captcha_json['challenge'],
            'geetest_validate': validate,
            'geetest_seccode': f"{validate}|jordan",
            'session.token': session_token,
            'condition.keyword': keyword
        }

        try:
            response = self.session.post(search_url, headers=self.headers, data=params, timeout=10)
            response.raise_for_status()
            query_code = parse_code(response.text)
            logger.info(f"Search result: {query_code}")
            return query_code
        except requests.RequestException as e:
            logger.error(f"Failed to search keyword: {e}")
            return []


if __name__ == '__main__':
    gest = GeetestCaptchaSolver(host='https://fw.scjgj.sh.gov.cn', index='noticesh')
    code = '310000500781304'
    gest.search_keyword(code)