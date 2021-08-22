// ==UserScript==
// @name         百度文库下载
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include      https://wenku.baidu.com/*
// @icon         https://www.google.com/s2/favicons?domain=baidu.com
// @grant        none
// ==/UserScript==
(function() {
    var app = document.getElementById("app");
    var btn_content = document.createElement("div");
    btn_content.id = "btn_content";
    app.appendChild(btn_content);
})();
(function(){
    var btn = document.getElementById("btn_content");
    btn.style.width ="40px";
    btn.style.height = "100px";
    btn.style.backgroundColor = "blue";
    btn.style.position = "fixed";
    btn.style.top ="200px";
})();
(function(){
    document.getElementById("btn_content").onclick = function(){
        var docs = document.getElementsByClassName("reader-pic-item")
        for(var i=0;i<docs.length;i++){
            console.log(document.getElementsByClassName("reader-pic-item")[i].style.backgroundImage)
        }
    }
})();
