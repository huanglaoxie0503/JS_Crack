#!/usr/bin/python
# -*- coding:UTF-8 -*-
import os
import execjs


def get_token():
    """获取token"""
    node_path = os.environ.get('NODE_PATH')
    file_name = os.path.join(os.path.dirname(__file__), 'hexin_v.js')
    with open(file_name, 'r') as f:
        js_content = f.read()
    context = execjs.compile(source=js_content, cwd=node_path)
    return context.call("v")


if __name__ == '__main__':
    header = get_token()
    print(header)
