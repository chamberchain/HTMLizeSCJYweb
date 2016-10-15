// ==UserScript==
// @name        chiyin168
// @namespace   cc
// @description shit
// @include     http://www.chiyin168.com/*
// @exclude     http://www.chiyin168.com/Mall/*
// @exclude     http://www.chiyin168.com/ShiPin/*
// @version     1
// @grant       none
// ==/UserScript==
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
      alink.download = data.name;
      document.body.appendChild(alink);
      alink.click();
      document.body.removeChild(alink);
    } else {
      alert(data.text);
    }
  }, 'json');
}
/*
function onxiazai() {
  $(this).off('click');
  $(this).css('background-image', 'url(/Image/201609090857.gif)');
  var id = $('#xzsongid').val();
  var type = $('#xzsongtype').val();
  $.post('/home/GetSongsPath', {
    id: id,
    type: type
  }, function (data) {
    console.log(data.Message);
    $('#call').hide();
    if (data.msg === true) {
      if (type === 'ws') {
        var mp3url = data.mp3;
        var wavurl = data.wav;
        var wavtxt = '无损wav下载';
        var mp3txt = '车载MP3下载';
        if (mp3url === 'null') {
          mp3url = 'javascript:void()';
          mp3txt = '暂无MP3格式';
        }
        if (wavurl === 'null') {
          wavurl = 'javascript:void()';
          wavtxt = '暂无wav格式';
        }
        var callhtml = '';
        callhtml += '                    <td>                                                                                                                        ';
        callhtml += '                        <a id="wav" target="_blank"  href="' + wavurl + '" style="cursor: pointer;display:block; background:#02b8ed; width:120px; padding:5px; color:#fff; margin-left:25px;"  >' + wavtxt + '</a>      ';
        callhtml += '                    </td>                                                                                                                       ';
        callhtml += '                    <td style="float: left">                                                                                                    ';
        callhtml += '                        <a id="mp3" target="_blank"  href="' + mp3url + '" style="cursor: pointer;display:block; background:#88c800; width:120px; padding:5px; color:#fff;" >' + mp3txt + '</a></td>    ';
        $('#call3').html(callhtml);
      }
      if (type === 'yc') {
        var wavur = data.wav;
        var callhtm = '';
        callhtm += '                    <td colspan="2" style="text-align:center" >                                                                                                                        ';
        callhtm += '                        <a id="wav" target="_blank"  href="' + wavur + '" style="cursor: pointer;display:block; background:#02b8ed; width:120px; margin:auto;padding:5px; color:#fff; border:none; padding:5px 0px;"  >无损wav下载</a>                                   ';
        callhtm += '                    </td>                                                                                                                       ';
        $('#call3').html(callhtm);
      }
      if (type === 'album') {
        var code = data.wav;
        var url = data.mp3;
        var albht = '';
        albht += '                    <td>                                                                                                                        ';
        albht += '                        提取码:                                  ';
        albht += '                    </td>                                                                                                                       ';
        albht += '                    <td style="float: left">  <span style="color:red;font-size:18px">' + code + '</span> ';
        albht += '                    </td>    ';
        $('#call3').html(albht);
        albht = '                    <td colspan="2" style="text-align:center" >                                                                                                                        ';
        albht += '                        <a id="wav" target="_blank"  href="' + url + '" style="cursor: pointer;display:block;width:200px;margin:auto;margin-top:25px; font-size:18px; background:#e40b02; color:#fff; border:none; padding:5px 0px;" >点击下载</a>                                   ';
        albht += '                    </td> ';
        $('#call2').html(albht);
      }
    } else {
      $('#xzerrors').text(data.text);
    }
  }, 'json');
}
*/
