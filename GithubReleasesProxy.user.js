// ==UserScript==
// @name         Github代理下载
// @namespace    https://github.com/ag2s20150909/Mconfig/
// @version      0.1
// @description  利用国内的cdn加速下载github上的发布文件。
// @author       Ag2S20150909
// @match        https://github.com/*
// @supportURL   https://github.com/ag2s20150909/Mconfig/issues
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
   var as =document.querySelectorAll('a.d-flex')
   for(var i=0;i<as.length;i++){
       let a=as[i]
       let href='http://github.strcpy.cn'+a.getAttribute('href');
       a.setAttribute('href',href);
       console.log('ggg'+href)
   }
})();
