#!/usr/bin/python
# -*- coding: utf-8 -*-
# @Time    : 2020/11/16 12:19
# @Author  : Oscar
import hashlib
import time

dt_13 = round(time.time() * 1000)


def r_params():
    print("当前时间戳：{0}".format(dt_13))
    results = []
    payload = {
        "appKey": "CNSAPP",
        "appSecret": "NJAGTABQ",
        "dtp": "7",
        "isWap": "yes",
        "language": "chs",
        "timestrap": "{0}".format(dt_13),
        "version_chinanews": "6.7.8",
    }
    for key, value in payload.items():
        results.append(value)
    result = ''.join(results)
    return result


def token_md5(params):
    md = hashlib.md5()
    md.update(params.encode('utf-8'))
    return md.hexdigest()


if __name__ == '__main__':
    r = r_params()
    print("参数拼接结果:{0}".format(r))
    access_token = token_md5(r)
    print("token 加密结果：{0}".format(access_token))