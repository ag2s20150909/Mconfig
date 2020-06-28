// ==UserScript==
// @name         Github代理下载
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://github.com/*
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
