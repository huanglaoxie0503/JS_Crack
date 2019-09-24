# -*- coding: utf-8 -*-
import requests
import execjs

"""
 换换回收价格数据js破解，网址：https://www.huanhuanhuishou.com
"""

conn = requests.post(
    url="https://www.huanhuanhuishou.com/Index/getGoodsInfo",
    headers={
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36"
    }
)

code = conn.headers.get('Content-Text')
res = conn.text

# 此处读取的js文件就是上面扣出来的代码。
with open('huanhuan_js_parse.js', 'r') as file:
    js = file.read()

ctx = execjs.compile(js)
result = ctx.call('get_data', code, res)

print(result)