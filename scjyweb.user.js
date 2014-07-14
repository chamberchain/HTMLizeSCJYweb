// ==UserScript==
// @name        提交期末成绩
// @namespace   test
// @grant none
// @include     http://jwc.scac.edu.cn/jwweb/XSCJ/KCCJ_ADD_rpt_T.aspx
// @version     1 
// @description 搭配EXCEL,从EXCEL复制数据即可粘贴到页面
// ==/UserScript==
if (frameElement) {
var ps=document.getElementsByTagName("td")[10];
var zk=document.getElementsByTagName("td")[11];
var mk=document.getElementsByTagName("td")[12];
var jl=document.getElementsByTagName("td")[13];
var zh=document.getElementsByTagName("td")[14];
abutton(ps,"提交平时成绩",function(){submitcj("CHKPSCJ");});
abutton(zk,"提交中考成绩",function(){submitcj("CHKQZCJ");});
abutton(mk,"提交末考成绩",function(){submitcj("CHKQMCJ");});
abutton(jl,"提交技能成绩",function(){submitcj("CHKJNCJ");});
abutton(zh,"提交综合成绩",function(){submitcj("CHKZHCJ");});
};

function submitcj(aname){
var cj= prompt("input scores below",60);
cj=cj.replace(/\n/g," ");
var scores=cj.split(" ");
for (var i=1;i<=scores.length;i++){
 var test=document.getElementsByName(aname+i)[0];
 test.setAttribute("value",scores[i-1]);
}
};
function abutton(ele,text,event){
ele.innerHTML="";
var abut=document.createElement("input");
abut.type="button";
abut.value=text;
abut.addEventListener("click",event,false);
ele.appendChild(abut);

};
