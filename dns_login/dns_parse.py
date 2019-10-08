# -*- coding: utf-8 -*-
import requests
import execjs

"""
    AES 的案例
    url:https://www.dns.com/login.html
"""


def get_password(pwd):
    with open('dns.js', 'r') as file:
        js = file.read()

    ctx = execjs.compile(js)
    result = ctx.call('aes', pwd)

    return result


if __name__ == '__main__':
    pwd = '1234567'
    result = get_password(pwd)
    print(result)