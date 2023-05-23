window.onload = function() {
  document.getElementById('btn1').addEventListener('click', function() {
      playAudio('btn_audio1');
  });
  
  document.getElementById('btn2').addEventListener('click', function() {
      playAudio('btn_audio2');
  });
}

function playAudio(audioId) {
  var audio = document.getElementById(audioId);
  audio.currentTime = 0;
  audio.play();
}
