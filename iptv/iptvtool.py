#!/usr/bin/python3
# -*- coding: utf-8 -*-
import urllib.parse
import os
import base64
import re
import requests
import json


def getFiles():
    files=[]
    r=requests.get('https://github.com/SPX372928/MyIPTV')
    ls=re.findall(r'<a class="js-navigation-open Link--primary" title="(.*?)" data-pjax="#repo-content-pjax-container" href="(.*?)">(.*?)</a>',r.text)
    for l in ls:
        m={}
        name=l[0]
        m['url']='https://ghproxy.com/https://raw.githubusercontent.com/SPX372928/MyIPTV/master/'+name;
        m['name']=name.replace('.txt','')
        if 'Y失效' not in name and '.md' not in name:
            files.append(m)
            formatFile(m['url'],m['name'])
    print(files)
    return files
    
def formatFile(url,name):
    f=open(name+'.txt',mode='w',encoding='utf-8')
    lines=requests.get(url).text
    ss=re.findall(r'(.*?) (.*?),(http(|s):\/\/.*?)\n',lines)
    for l in ss:
        item=l[0].strip()
        quality=l[1].strip()
        itemurl=l[2]
        f.write('%s,%s$%s%s\n' %(item,itemurl,name,quality))
    f.flush()


files=getFiles()
#formatFile('https://ghproxy.com/https://raw.githubusercontent.com/SPX372928/MyIPTV/master/%E4%B8%8A%E6%B5%B7%E7%99%BE%E8%A7%86%E9%80%9A%E8%81%94%E9%80%9Aip%E7%89%88.txt','上海百视通联通ip版')
