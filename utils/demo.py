#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2024-07-08  下午5:35
# @Author  : heshuai.huang
# @Desc:
def run():
    with ThreadPoolExecutor(max_workers=20) as pool:
        spiders = [
            Spider1,
            Spider2,
            Spider3,
        ]
        futures = []
        for spider_cls in spiders:
            spider = spider_cls()
            future = pool.submit(spider.crawl)
            futures.append(future)

        for future in futures:
            try:
                result = future.result()
                logger.info(f"任务完成: {result}")
            except Exception as e:
                logger.error(f"任务执行出错: {e}")