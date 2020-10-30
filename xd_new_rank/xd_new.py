#!/usr/bin/python
# -*- coding: utf-8 -*-
# @Time    : 2020/10/30 16:49
# @Author  : Oscar
import execjs


def get_xyz(keyword):
    with open('xd.js', 'r') as file:
        js = file.read()

    ctx = execjs.compile(js)
    result = ctx.call('g', keyword)
    return result


if __name__ == '__main__':
    params = "/xdnphb/nr/cloud/douyin/account/getAccountAll?AppKey=joker&nonce=397d80f12"
    info = get_xyz(params)
    print(info)
