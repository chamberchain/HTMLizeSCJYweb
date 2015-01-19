// ==UserScript==
// @name        gcxycjtj
// @namespace   zbq
// @include     http://jiaowu.scetc.net/jiaoshi/cj/jshi/lu.asp*
// @version     1
// @grant       none
// ==/UserScript==
var cjcell=document.querySelectorAll("input[id='chengji']");
if (!cjcell.length){
  return false
}
var ps=document.querySelector(".tablef > td:nth-child(9)");
var qm=document.querySelector(".tablef > td:nth-child(10)");
abutton(ps,"提交\n平时\n成绩",function(){submitcj(0)});
abutton(qm,"提交\n期末\n成绩",function(){submitcj(1)});
function submitcj(startn){
var cj= prompt("input|paste scores below",60);
  cj=cj.replace(/\n/g," ").replace(/(^\s*|\s*$)/g,"").replace(/\s{2,}/g," ");
var scores=cj.split(" ");
if(!confirm("点击确定使用当前顺序\n点击取消将反转当头顺序")){
  scores=scores.reverse();
}
for (var i=1;i<=scores.length;i++){
 var test=document.getElementsByName("fldname"+startn)[0];
 test.setAttribute("value",scores[i-1]);
 startn+=3;
}
}
function abutton(ele,text,event){
ele.innerHTML="";
var abut=document.createElement("input");
abut.type="button";
abut.value=text;
abut.addEventListener("click",event,false);
ele.appendChild(abut);
}
