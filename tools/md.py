#!/usr/bin/python
# -*- coding: utf-8 -*-
# @Time    : 2020/11/2 11:33
# @Author  : Oscar
import hashlib


def str_md5(params):
    # s.encode()#变成bytes类型才能加密
    m = hashlib.md5(params.encode())
    result = m.hexdigest()
    return result


if __name__ == '__main__':
    id_str = '3380284906675503740'
    step_1 = str_md5(id_str)
    step_2 = step_1 + "zd2019@@1157"
    token = str_md5(step_2)
    print(token)

