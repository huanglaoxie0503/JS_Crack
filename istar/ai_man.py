# -*- coding: utf-8 -*-
import requests

from tools.aes import AesDo

"""
艾曼名人经营系统
url : https://istar.aiman.cn/
"""

base_url = "https://istar.aiman.cn/iStarServer/fans/important/group/list/week?recordDate={0}&oid={1}&otype=7&fansGroupType=0&weiboFansNum=0&weiboAccountType=0&diffuseIndex=0&pageNum={2}&sign=d4e9e8e63b5611a72735e52b78776fb5"
headers = {
    "Host": "istar.aiman.cn",
    "Referer": "https://istar.aiman.cn/kol/analyze",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "token": "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIxNmUyMDMxN2FjZmYwMGNmMjQyZDkiLCJzdWIiOiJ7XCJpZFwiOjE1MjQwLFwicGhvbmVfbnVtYmVyXCI6XCIxODEyNjM1MTU0MVwiLFwibmFtZVwiOlwiMTgxMjYzNTE1NDFcIixcInN0YXR1c1wiOjEsXCJhY2NvdW50X3R5cGVcIjoxLFwiYmVnaW5fZGF0ZVwiOlwiMjAxOS0xMC0zMFwiLFwiZW5kX2RhdGVcIjpcIjIxMTktMTAtMzFcIixcImRlc1wiOlwi57q_5LiK5Li05pe25rOo5YaM55qE55So5oi3XCIsXCJrb2xfY291bnRcIjozLFwiY3JlYXRlX3RpbWVcIjoxNTcyNDk4MTM1MzA4fSIsImlhdCI6MTU3MjQ5ODE0MywiZXhwIjoxNTczMTAyOTQzfQ.Z_JPIlgRsD4BZOGKtLSj1HAJhsGOohuMDdSLKNbbBVc",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Safari/537.36"
}


def get_data(url):
    ase_do = AesDo()
    response = requests.get(url, headers=headers).json()
    print(response)

    # 调试js代码找到加密逻辑，如下
    """
        var o = e, i = o.data;
        if (1 === o.isEncrypt) {
            var r = g.a.parse(o.lastFetchTime + "000")
              , l = g.a.parse(o.lastFetchTime + "000")
              # 主要部分
              , n = u.a.decrypt(i.toString(), r, {
                iv: l
            }).toString(g.a);
            return o.data = JSON.parse(n),
            o
        }
    """
    # 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
    data = response['data']
    last_fetch_time = response['lastFetchTime']
    # 1572508834042000
    last_fetch_time = "{0}{1}".format(last_fetch_time, "000")
    print(data)
    print(last_fetch_time)

    # Python 实现 js 加密逻辑 。AES 解密 数据
    encrypt_en = ase_do.decrypt(last_fetch_time, data)
    print(encrypt_en)
    return encrypt_en


if __name__ == '__main__':
    record_date = "2019-10-21"
    oid = "118326"
    page_num = "1"
    url = base_url.format(record_date, oid, page_num)

    get_data(url)