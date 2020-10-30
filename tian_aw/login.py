# -*- coding: utf-8 -*-
import json
import base64
from Crypto.Cipher import AES


class USE_AES(object):
    """
    AES
    除了MODE_SIV模式key长度为：32, 48, or 64,
    其余key长度为16, 24 or 32
    详细见AES内部文档
    CBC模式传入iv参数
    本例使用常用的ECB模式
    """

    def __init__(self, key):
        if len(key) > 32:
            key = key[:32]
        self.key = self.to_16(key)

    def to_16(self, key):
        """
        转为16倍数的bytes数据
        :param key:
        :return:
        """
        key = bytes(key, encoding="utf8")
        while len(key) % 16 != 0:
            key += b'\0'
        return key  # 返回bytes

    def aes(self):
        return AES.new(self.key, AES.MODE_ECB)  # 初始化加密器

    def encrypt(self, text):
        aes = self.aes()
        # # 加密
        return str(base64.encodebytes(aes.encrypt(self.to_16(text))), encoding='utf8').replace('\n', '')

    def decode_bytes(self, text):
        aes = self.aes()
        return str(aes.decrypt(base64.decodebytes(bytes(
            text, encoding='utf8'))).rstrip(b'\0').decode("utf8"))  # 解密


if __name__ == '__main__':
    ase = USE_AES("48")
    data = {
        "body": {
            "loginMethod": "2",
            "name": "18126351541",
            "verificationCode": "479489"
        },
        "head": {
            "userCode": "null",
            "channelCode": "101",
            "transTime": 1572510077571,
            "transToken": "",
            "customerId": "null",
            "transSerialNumber": ""
        }
    }

    data_str = json.dumps(data)
    print(data_str)
    print(type(data_str))
    result = ase.encrypt(data_str)
    print(result)

