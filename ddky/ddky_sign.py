# -*- coding: utf-8 -*-
import time
import requests
from hashlib import md5

"""
    叮当快药 sign标签 js加密破解
    url = "http://www.ddky.com/commodity.html?"
"""


def get_sign():
    time_stamp = time.time()
    local_time = time.localtime(time_stamp)
    str_time = time.strftime("%Y-%m-%d %H:%M:%S", local_time)

    l = ["method", "orderTypeId", "orgcode", "pageNo", "pageSize", "plat", "platform", "shopId", "t", "v", "versionName"]

    data = {
        "method": "ddsy.product.query.orgcode.product.list.b2c",
        "orderTypeId": "0",
        "orgcode": "010101,010104",
        "pageNo": "1",
        "pageSize": "100",
        "plat": "H5",
        "platform": "H5",
        "shopId": "-1",
        "t": "{0}".format(str_time),
        "v": "1.0",
        "versionName": "3.2.0",
    }

    p = ""
    for i in range(0, 11):
        m = l[i]
        p += m + data.get(m)
    f = data['method'] + p + '6C57AB91A1308E26B797F4CD382AC79D'
    sign = get_md5_value(f).upper()
    data['sign'] = sign

    # 测试 sign 是否有效
    headers = {
        "Referer": "http://www.ddky.com/commodity.html?ddkycache=a7b19e879d2f2f279d356f5afa6d5cff",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36"
    }
    url = "http://product.ddky.com/product/queryOrgcodeProductListForB2C.htm?sign={0}&method=ddsy.product.query.orgcode.product.list.b2c&orderTypeId=0&orgcode=010101,010104&pageNo=1&pageSize=100&plat=H5&platform=H5&shopId=-1&t={1}&v=1.0&versionName=3.2.0".format(sign, str_time)
    response = requests.get(url.strip(), headers=headers).json()
    filter_info_list_results = response['data']['filterInfoList']
    for result in filter_info_list_results:
        print(result)
    product_list_results = response['data']['productList']
    for result in product_list_results:
        print(result)


def get_md5_value(params):
    res = md5(params.encode()).hexdigest()
    return res


if __name__ == '__main__':
    get_sign()