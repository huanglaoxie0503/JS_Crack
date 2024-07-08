# -*- coding: utf-8 -*-
# @Time    : 2024/5/31 10:59
# @Author  : zhe.xia
# @File    : rs_bypass.py
"""
RS VMP
"""
import requests
from requests import Session, Response

from utils.bypass.base import BypassBase
from utils.config import settings


class RSBypass(BypassBase):
    rs_cookie_server = settings.RS_COOKIE_SEVER

    rs_status_code = (412,)
    cookie_map = {
        "EKyd12pLzdcZO": lambda v: {"EKyd12pLzdcZP": "0" + v}
    }

    def check(self, session: Session, response: Response):
        if response.status_code in self.rs_status_code:
            return self.IS_TARGET
        return self.NOT_TARGET

    def bypass(self, session: Session, response: Response):
        rs_response = requests.post(self.rs_cookie_server, data={
            "html": response.text
        })
        p_cookie = rs_response.json()["cookie"]
        for cookie_name in session.cookies.get_dict():
            if cookie_name in self.cookie_map:
                session.cookies.update(self.cookie_map[cookie_name](p_cookie))
        session.cookies.update({
            "EKyd12pLzdcZP": "0" + p_cookie
        })
        return session, response
