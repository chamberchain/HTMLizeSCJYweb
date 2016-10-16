// ==UserScript==
// @name        chiyin168
// @namespace   cc
// @description shit
// @include     http://www.chiyin168.com/*
// @exclude     http://www.chiyin168.com/ShiPin/*
// @version     1
// @grant       none
// ==/UserScript==
unsafeWindow.ShowTable = unsafeWindow.Getpath = function (event) {
  var id = $(event).attr('data-id') || $(this).attr('data-id');
  var type = $(event).attr('data-type') || $(this).attr('data-type');
  $.post('/home/TrialSongs', {
    id: id,
    type: type
  }, function (data) {
    if (data.msg === true) {
      var alink = document.createElement('a');
      alink.href = data.url;
      alink.download = data.name;
      document.body.appendChild(alink);
      alink.click();
      document.body.removeChild(alink);
      //make it still could play
      var player=document.querySelector("audio#custom-player");
      if (player){
        document.body.removeChild(player);
      }
      var audio=document.createElement("audio");
      audio.id="custom-player";
      audio.src=data.url;
      document.body.appendChild(audio);
      audio.play();
    } else {
      alert(data.text);
    }
  }, 'json');
}
