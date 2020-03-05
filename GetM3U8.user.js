// ==UserScript==
// @name         GetM3U8
// @namespace    https://github.com/ag2s20150909/GetM3U8
// @version      0.1
// @description  使用JS代码获取腾讯、优酷、爱奇艺视频播放时的m3u8链接/文件。
// @author       Ag2S20150909
// @supportURL   https://github.com/ag2s20150909/GetM3U8/issues
// @match        https://v.qq.com/x/cover/*
// @match        https://v.youku.com/v_show/*
// @match        https://www.iqiyi.com/v_*
// @grant        none
// ==/UserScript==


(function () {
    //腾讯视频
    function do_tencentvideo() {
        var js = "prompt(PLAYER._DownloadMonitor.context.dataset.title,PLAYER._DownloadMonitor.context.dataset.currentVideoUrl);";
        var btn = document.createElement("button");
        btn.innerHTML = "Download";
        btn.setAttribute('class', 'tag_item');
        btn.setAttribute('onclick', js);
        document.getElementsByClassName('video_tags')[0].appendChild(btn);
    }

    //优酷
    function do_youku() {
        var js = "var url;var size=0;Array.from(videoPlayer.getData()._playlistData.stream).forEach(function(element,index,array){if(element.audio_lang==videoPlayer.getConfig().language&&element.size>size){url=element.m3u8_url;size=element.size}});/*nilaoda*/prompt(videoPlayer.getData()._videoData.title+\"_\"+videoPlayer.getConfig().language+\"_\"+(size/1024/1024).toFixed(2)+\"MB\",url);";
        var btn = document.createElement("button");
        btn.innerHTML = "Download";
        btn.setAttribute('class', 'v-tag');
        btn.setAttribute('onclick', js);
        document.getElementsByClassName('v-tag')[0].parentNode.appendChild(btn);

    }

    //爱奇艺
    function do_iqiyi() {
        var js = "try{var info=playerObject._player._core._movieinfo.originalData.data.program.video;info.forEach(function(item,index){if(item._selected){var m3u8Content=\"\";if(item.m3u8==undefined){try{if(typeof(eval(cmd5x))==\"function\"){}}catch(e){var req1=new XMLHttpRequest();req1.open(\"GET\",\"https://static.iqiyi.com/js/common/f6a3054843de4645b34d205a9f377d25.js\",false);req1.onload=function(){var script=document.createElement(\"script\");script.text=req1.responseText;document.getElementsByTagName(\"head\")[0].appendChild(script)};req1.send(null)}var fs=item.fs;var content=\"#EXTM3U\\n\";fs.forEach(function(fs_i,fs_index){var url=fs_i.l;var prefix=\"https://data.video.iqiyi.com/videos\";var api=prefix+url;try{var t=playerObject._player._core._movieinfo.originalData.data.boss.data.t;api=prefix+url+\"&cross-domain=1&t=\"+t+\"&QY00001=\"+/qd_uid=(\\d+)/g.exec(url)[1]+\"&ib=4&ptime=0&ibt=\"+cmd5x(t+/\\/(\\w{10,})/g.exec(url)[1])}catch(err){}var req=new XMLHttpRequest();req.overrideMimeType(\"application/json\");req.open(\"GET\",api,false);req.onload=function(){var jsonResponse=JSON.parse(req.responseText);content+=\"#EXTINF:0\\n\"+jsonResponse[\"l\"]+\"\\n\"};req.send(null)});content+=\"#EXT-X-ENDLIST\";m3u8Content=content}else{m3u8Content=item.m3u8}var blob=new Blob([m3u8Content],{type:\"text/plain\"});var url=URL.createObjectURL(blob);var title=(document.title.indexOf(\"-\")!=-1?document.title.substring(0,document.title.indexOf(\"-\")):document.title.replace(/\\s/,\"\"))+\"_\"+item.scrsz+\"_\"+(item.code==2?\"H264\":\"H265\")+\"_\"+document.getElementsByClassName(\"iqp-time-dur\")[0].innerText.replace(/:/,\".\")+\"_\"+(item.vsize/1024/1024).toFixed(2)+\"MB.m3u8\";var aLink=document.createElement(\"a\");aLink.href=url;aLink.download=title;aLink.style.display=\"none\";var event;if(window.MouseEvent){event=new MouseEvent(\"click\")}else{event=document.createEvent(\"MouseEvents\");event.initMouseEvent(\"click\",true,false,window,0,0,0,0,0,false,false,false,false,0,null)}aLink.dispatchEvent(event)}})}catch(err){var info1=playerObject._player.package.engine.adproxy.engine.movieinfo.vidl;info1.forEach(function(item1,index1){if(item1.responseData!=undefined){var info=item1.responseData.data.program.video;info.forEach(function(item,index){if(item._selected){var m3u8Content=\"\";if(item.m3u8==undefined){try{if(typeof(eval(cmd5x))==\"function\"){}}catch(e){var req1=new XMLHttpRequest();req1.open(\"GET\",\"https://static.iqiyi.com/js/common/f6a3054843de4645b34d205a9f377d25.js\",false);req1.onload=function(){var script=document.createElement(\"script\");script.text=req1.responseText;document.getElementsByTagName(\"head\")[0].appendChild(script)};req1.send(null)}var fs=item.fs;var content=\"#EXTM3U\\n\";fs.forEach(function(fs_i,fs_index){var url=fs_i.l;var prefix=\"https://data.video.iqiyi.com/videos\";var api=prefix+url;try{var t=playerObject._player.package.engine.adproxy.engine.movieinfo.current.boss.data.t;api=prefix+url+\"&cross-domain=1&t=\"+t+\"&QY00001=\"+/qd_uid=(\\d+)/g.exec(url)[1]+\"&ib=4&ptime=0&ibt=\"+cmd5x(t+/\\/(\\w{10,})/g.exec(url)[1])}catch(err){console.error(err)}var req=new XMLHttpRequest();req.overrideMimeType(\"application/json\");req.open(\"GET\",api,false);req.onload=function(){var jsonResponse=JSON.parse(req.responseText);content+=\"#EXTINF:0\\n\"+jsonResponse[\"l\"]+\"\\n\"};req.send(null)});content+=\"#EXT-X-ENDLIST\";m3u8Content=content}else{m3u8Content=item.m3u8}var blob=new Blob([m3u8Content],{type:\"text/plain\"});var url=URL.createObjectURL(blob);var title=(document.title.indexOf(\"-\")!=-1?document.title.substring(0,document.title.indexOf(\"-\")):document.title.replace(/\\s/,\"\"))+\"_\"+item.scrsz+\"_\"+(item.code==2?\"H264\":\"H265\")+\"_\"+document.getElementsByClassName(\"iqp-time-dur\")[0].innerText.replace(/:/,\".\")+\"_\"+(item.vsize/1024/1024).toFixed(2)+\"MB.m3u8\";/*nilaoda*/var aLink=document.createElement(\"a\");aLink.href=url;aLink.download=title;aLink.style.display=\"none\";var event;if(window.MouseEvent){event=new MouseEvent(\"click\")}else{event=document.createEvent(\"MouseEvents\");event.initMouseEvent(\"click\",true,false,window,0,0,0,0,0,false,false,false,false,0,null)}aLink.dispatchEvent(event)}})}})}";
        var btn = document.createElement("a");
        btn.innerHTML = "<button>Download</button>";
        btn.setAttribute('class', 'tag_item');
        btn.setAttribute('href', "javascript:" + js);
        document.getElementsByClassName('qy-player-tag')[0].appendChild(btn);
    }

    var m_host = window.location.host;
    if (/qq.com/.test(m_host)) {
        do_tencentvideo();
    } else if (/youku.com/.test(m_host)) {
        do_youku();
    } else if (/iqiyi.com/.test(m_host)) {
        do_iqiyi();
    }
})();
