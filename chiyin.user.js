// ==UserScript==
// @name        chiyin168
// @version     1.0.02
// @namespace   cc
// @description shit
// @include     http://www.chiyin168.com/*
// @exclude     http://www.chiyin168.com/ShiPin/*
// @downloadURL	https://github.com/chamberchain/HTMLizeSCJYweb/raw/master/chiyin.user.js
// @updateURL		https://github.com/chamberchain/HTMLizeSCJYweb/raw/master/chiyin.user.js
// @grant       none
// ==/UserScript==
document.addEventListener('DOMContentLoaded', function (e) {
  var dlinks = document.querySelectorAll('div.scon_r ul:last-child li span:nth-child(1) a');
  if (!!dlinks) {
    for (var i = 0; i < dlinks.length; i++) {
      var blink = document.createElement('a');
      blink.href = '###';
      blink.setAttribute('data-id', dlinks[i].getAttribute('data-id'));
      blink.setAttribute('data-type', dlinks[i].getAttribute('data-type'));
      blink.setAttribute('onclick', 'ShowTable(this)');
      blink.title = '免费下载';
      var dimg = document.createElement('img');
      //dimg.setAttribute('onmouseover', 'this.src=img4.src');
      //dimg.setAttribute('onmouseout', 'this.src=img3.src');
      dimg.src = 'http://www.chiyin168.com/Image/yytb_02.png';
      blink.appendChild(dimg);
      dlinks[i].parentNode.appendChild(blink);
    }
  }
}, false);
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
      alink.download = data.name.replace(/\./g," ");
      document.body.appendChild(alink);
      alink.click();
      document.body.removeChild(alink);
    } else {
      alert(data.text);
    }
  }, 'json');
}
