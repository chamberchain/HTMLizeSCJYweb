// ==UserScript==
// @name        chiyin168
// @version     1.1.4.1
// @namespace   cc
// @description shit
// @include     http://www.chiyin168.com/*
// @exclude     http://www.chiyin168.com/ShiPin/*
// @downloadURL	https://github.com/chamberchain/HTMLizeSCJYweb/raw/master/chiyin.user.js
// @updateURL	https://github.com/chamberchain/HTMLizeSCJYweb/raw/master/chiyin.user.js
// @grant       unsafeWindow
// ==/UserScript==
$(document).ready(function () {
  var dlinks = $('div.scon_r ul:last-child li span:nth-child(1) a,div.yuanc1 div.yc_con a.shiting.trial');
  if (!!dlinks) {
    for (var i = 0; i < dlinks.length; i++) {
      var blink = document.createElement('a');
      blink.setAttribute('onclick', 'ShowTable(this)');
      blink.href = '###';
      blink.setAttribute('data-id', dlinks[i].getAttribute('data-id'));
      blink.setAttribute('data-type', dlinks[i].getAttribute('data-type'));
      blink.title = '免费下载';
      var dimg = document.createElement('img');
      dimg.src = 'http://www.chiyin168.com/Image/yytb_02.png';
      dimg.setAttribute('onmouseover',"this.src='http://www.chiyin168.com/Image/yytb_06.png'");
      dimg.setAttribute('onmouseout',"this.src='http://www.chiyin168.com/Image/yytb_02.png'");
      blink.appendChild(dimg);
      dlinks[i].parentNode.appendChild(blink);
    }
  }
});
  unsafeWindow.ShowTable = function (event) {
  var id = $(event).attr('data-id') || $(this).attr('data-id');
  var type = $(event).attr('data-type') || $(this).attr('data-type');
  $.post('/home/TrialSongs', {
    id: id,
    type: type
  }, function (data) {
    if (data.msg === true) {
      var alink = document.createElement('a');
      alink.href = data.url;
      alink.download = data.name.replace(/\./g, ' ')+data.url.match(/\.[^.]+/);
      document.body.appendChild(alink);
      alink.click();
      document.body.removeChild(alink);
    } else {
      alert(data.text);
    }
  }, 'json');
};
// $('.doload').off('click', ShowTable).on('click', st);
//$('a[onclick="ShowTable(this)"]').removeAttr('onclick').on('click', st);

