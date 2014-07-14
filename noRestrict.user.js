// ==UserScript==
// @name        ForSCJYrubbishWebSite
// @namespace   zbq
// @include     http://jwc.scac.edu.cn/jwweb/XSCJ/Tea_KCCJLR.aspx
// @include     http://jwc.scac.edu.cn/*
// @version     1
// @grant       none
// ==/UserScript==
window.addEventListener("load",
function(){
var doc=document.body;
doc.oncontextmenu=null;
doc.onselectstart=null;
ondragstart=null;
onsource=null;
},
true);
unsafeWindow.openWinX=unsafeWindow.openPrintWin=function(url){
window.open(url,"blank");
}
unsafeWindow.SaveData=function(){           
try{
window.frames[0].document.forms["form1"].submit();  
}catch(e){alert(e)}
}
var laji1=document.getElementById('link');
var laji2=document.getElementById("note");
removelaji(laji1);
//removelaji(laji2);
function removelaji(ele){
ele.parentNode.parentNode.removeChild(ele.parentNode);
}
