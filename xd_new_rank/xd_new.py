#!/usr/bin/python
# -*- coding: utf-8 -*-
# @Time    : 2020/10/30 16:49
# @Author  : Oscar
import execjs
import requests
from random import Random


def get_random_str():
    random = Random()
    i = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]
    results = random.sample(i, 9)
    results = ''.join(results)
    return results


def get_xyz(keyword):
    with open('xd.js', 'r') as file:
        js = file.read()

    ctx = execjs.compile(js)
    result = ctx.call('g', keyword)
    return result


def get_data(xyz, nonce):
    url = 'https://xd.newrank.cn/xdnphb/nr/cloud/douyin/account/getAccountAll?xyz={0}&nonce={1}'.format(xyz, nonce)
    headers = {
        "origin": "https://xd.newrank.cn",
        "referer": "https://xd.newrank.cn/data/tiktok/rank/overall",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
        "cookie": "Hm_lvt_e20c9ff085f402c8cfc53a441378ca86=1604034491; Hm_lpvt_e20c9ff085f402c8cfc53a441378ca86=1604034491; _uab_collina=160403449124095273308375; token=4A7BF189424E49AC84C862EC34559EA3"
    }
    response = requests.post(url, headers=headers).text
    print(response)


if __name__ == '__main__':
    result_nonce = get_random_str()
    result_url = "/xdnphb/nr/cloud/douyin/account/getAccountAll?AppKey=joker"
    params = "{0}&nonce={1}".format(result_url, result_nonce)
    print(params)
    result_xyz = get_xyz(params)
    print(result_xyz)

    get_data(result_xyz, result_nonce)


