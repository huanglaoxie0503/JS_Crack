# -*- coding: utf-8 -*-
# @Time    : 2024/5/31 17:22
# @Author  : zhe.xia
# @File    : jsl_bypass.py
import hashlib
import json
import re

import execjs
from requests import Session, Response

from utils.bypass.base import BypassBase


class JslBypass(BypassBase):
    jsl_status_code = (521,)

    @staticmethod
    def process_fuck_js(js_text):
        js_text = js_text.split(";location.href=loc")[0].split("document.cookie=")[-1]
        r = execjs.eval(js_text).split(";")[0]
        return r

    @staticmethod
    def process_clearance(html):
        data = json.loads(re.findall(r"go\((.*?)\)", html)[1])
        chars_length = len(data.get("chars"))
        for i in range(chars_length):
            for j in range(chars_length):
                result = data.get("bts")[0] + data.get("chars")[i] + data.get("chars")[j] + data.get("bts")[1]
                b = getattr(hashlib, data.get("ha"))()
                b.update(result.encode(encoding="utf-8"))
                res = b.hexdigest()
                if res == data.get("ct"):
                    return result

    def check(self, session: Session, response: Response):
        if response.status_code in self.jsl_status_code:
            return self.IS_TARGET
        return self.NOT_TARGET

    def bypass(self, session: Session, response: Response):
        if "document.cookie" in response.text:
            cookies = {}
            if "__jsluid_h" in session.cookies:
                # cookies = f'__jsluid_h={session.cookies.get_dict().get("__jsluid_h")};'
                cookies['__jsluid_h'] = session.cookies.get_dict().get("__jsluid_h")
            elif "__jsluid_s" in session.cookies:
                cookies['__jsluid_s'] = session.cookies.get_dict().get("__jsluid_s")
            else:
                cookies = {}
            # session.headers["Cookie"] = session.headers["Cookie"] if session.headers.get("Cookie") else cookies
            # session.headers["Cookie"] += f"{self.process_fuck_js(response.text)};"
            session.cookies.update(cookies)
            fuck_js_res = self.process_fuck_js(response.text).split("=")
            session.cookies.update({
                fuck_js_res[0]: fuck_js_res[1]
            })
        elif "chars" in response.text:
            __jsl_clearance_s = self.process_clearance(response.text)
            # session.headers["Cookie"] = "=".join(session.headers["Cookie"].split("=")[:-1]) + f"={__jsl_clearance_s};"
            session.cookies.update({
                "__jsl_clearance_s": __jsl_clearance_s
            })
        return session, response
