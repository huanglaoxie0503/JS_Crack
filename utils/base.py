# -*- coding: utf-8 -*-
# @Time    : 2024/5/31 10:59
# @Author  : zhe.xia
# @File    : base.py
from abc import abstractmethod

from requests import Response
from requests import Session


class BypassBase:
    # 用来判断是不是符合检测的标准
    IS_TARGET = True  # 符合
    NOT_TARGET = not IS_TARGET  # 不符合

    TRIGGER = True  # 用来标记触发了 bypass

    @abstractmethod
    def check(self, session: Session, response: Response):
        """检查是否符合当前需要处理的加密规则"""
        pass

    @abstractmethod
    def bypass(self, session: Session, response: Response):
        """过检测的入库函数"""

    def run(self, session: Session, response: Response):
        if self.check(session, response) == self.IS_TARGET:
            self.bypass(session, response)
            return session, response, self.TRIGGER
        return session, response, not self.TRIGGER
