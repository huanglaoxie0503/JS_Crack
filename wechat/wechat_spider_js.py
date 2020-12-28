#!/usr/bin/python
# -*- coding: utf-8 -*-
# @Time    : 2020/6/15 17:08
# @Author  : Oscar
import json
import random
import requests
from urllib.parse import urlencode, quote
import uuid
import time
from lxml import html
import re

"""
    js 逆向分析搜狗微信入口，抓取数据
"""

key = '市值风云'
# url_list = 'https://weixin.sogou.com/weixin?type=1&query={}'.format(quote(key))
url_list = 'https://weixin.sogou.com/weixin?type=1&s_from=input&query={}'.format(quote(key))

headers_str = '''
    sec-fetch-dest: document
    sec-fetch-mode: navigate
    sec-fetch-site: none
    sec-fetch-user: ?1
    upgrade-insecure-requests: 1
    user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36
'''


def headers_to_dict(header_str):
    """
    将headers_str字符串形式转化成字典；；
    :param header_str:
    :return:
    """
    header_str = header_str.strip()
    headers_dict = dict((i.split(':', 1)[0].strip(), i.split(':', 1)[1].strip()) for i in header_str.split('\n'))
    return headers_dict


a_str = '''
        uigs_cl	first_click
        uigs_refer	https://weixin.sogou.com/
        uigs_productid	vs_web
        terminal	web
        vstype	weixin
        pagetype	result
        channel	result_article
        s_from	input
        sourceid	
        type	weixin_search_pc
        uigs_cookie	SUID,sct
        query	亚马逊大火
        weixintype	2
        exp_status	-1
        exp_id_list	0_0
        wuid	0071440178DB40975D3C689EE37C6784
        rn	1
        login	0
        uphint	1
        bottomhint	1
        page	1
        exp_id	null_0-null_1-null_2-null_3-null_4-null_5-null_6-null_7-null_8-null_9
        time	20914
'''


def str_to_dict(str_a):
    """
    将a_str形式的字符串转化为字典形式；
    :param str_a:
    :return:
    """
    str_a = list(i for i in str_a.split('\n') if i != '')
    str_b = {}
    for a in str_a:
        a1 = a.split('\t')[0]
        a2 = a.split('\t')[1]
        str_b[a1] = a2

    return str_b


b_data = str_to_dict(a_str)
headers = headers_to_dict(headers_str)


def get_suva(sun_id):
    """
    根据sunid来获取suv参数；并添加到cookie众
    """
    b_data['snuid'] = sun_id.split('=')[-1]
    b_data['uuid'] = uuid.uuid1()
    b_data['uigs_t'] = str(int(round(time.time() * 1000)))
    url_link = 'https://pb.sogou.com/pv.gif?' + urlencode(b_data)
    res = requests.get(url_link)
    cookie_s = res.headers['Set-Cookie'].split(',')
    cookie_list_s = []
    for i in cookie_s:
        for j in i.split(','):
            if 'SUV' in j:
                cookie_list_s.append(j)
            else:
                continue
    print(cookie_list_s[0].split(';')[0])
    headers['Cookie'] = cookie_list_s[0].split(';')[0]
    print(json.dumps(headers, indent=4))


def get_first_parse(url):
    """
    1,构造'真'url;
    2,获取正确的动态cookie;
    3,返回真url,访问并解析文章内容
    :param url: 访问的初始url
    :return:
    """
    # 给headers中添加Referer参数；
    headers['Referer'] = url_list
    res = requests.get(url, headers=headers)
    cookies = res.headers['Set-Cookie'].split(';')
    cookie_list_long = []
    cookie_list2 = []
    for cookie in cookies:
        cookie_list_long.append(str(cookie).split(','))
    for i in cookie_list_long:
        for set_str in i:
            if 'SUID' in set_str or 'SNUID' in set_str:
                cookie_list2.append(set_str)
    sun_id = cookie_list2[0].split(';')[0]
    get_suva(sun_id)
    # 构造动态Cookies
    headers['Cookie'] = headers['Cookie'] + ';' + ';'.join(cookie_list2)
    tree = html.fromstring(res.text)
    url_list12 = tree.xpath('//*[@id="sogou_vr_11002301_box_0"]/dl[2]/dd/a/@href')
    url_list12 = ''.join(url_list12)
    url_list12 = str(url_list12).replace('<p>', '').replace('</p>', '').replace('amp;', '')
    print(url_list12)
    # 构造参数k与h;
    b = int(random.random() * 100) + 1
    a = url_list12.find("url=")
    result_link = url_list12 + "&k=" + str(b) + "&h=" + url_list12[a + 4 + 21 + b: a + 4 + 21 + b + 1]
    a_url = "https://weixin.sogou.com" + result_link
    second_url = requests.get(a_url, headers=headers).text
    #  获取真实url
    url_text = re.findall(r"\'(\S+?)\';", second_url, re.S)
    best_url = ''.join(url_text)
    print(best_url)
    best_url = best_url.split(':')
    best_url = ''.join(best_url[1])
    best_url = "http:{0}".format(best_url)
    print(best_url)
    get_content(best_url)


def get_content(url):
    try:
        response = requests.get(url, headers=headers).text
        tree = html.fromstring(response)
        tables = tree.xpath('//*[@id="js_content"]/section/section/p/span/text()')
        print(''.join(tables))

    except Exception as e:
        print(e)


if __name__ == '__main__':
    get_first_parse(url_list)
