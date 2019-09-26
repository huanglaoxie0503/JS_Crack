"""
    目的：粉笔网登录密码 password 字段 js 加密破解
    网址：https://fenbi.com/page/home
"""

import requests
import execjs


def get_password(pwd):
    with open('fenbi_js_02.js', 'r') as file:
        js = file.read()

    ctx = execjs.compile(js)
    result = ctx.call('get_pwd', pwd)
    return result


def login(phone, password):
    pwd = get_password(password)
    url = "https://webapi.fenbi.com/tiku/api/users/loginV2?kav=12&app=web"
    data = {
        "password": pwd,
        "persistent": "true",
        "app": "web",
        "phone": phone
    }
    headers = {
        "Origin": "https://fenbi.com",
        "Referer": "https://fenbi.com/page/home",
        "Sec-Fetch-Mode": "cors",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36"
    }
    response = requests.post(url, headers=headers, data=data).text
    print(response)

    # 返回结果，破解成功
    # {"code":1,"msg":"成功","data":{"id":64872392,"email":null,"phone":"18126351541","createdTime":1569471472655,"identity":"18126351541"}}


if __name__ == "__main__":
    # 手机号码或者邮箱
    tel = "13688888888"
    # 登录密码
    tel_pwd = "13688888888"
    login(tel, tel_pwd)



