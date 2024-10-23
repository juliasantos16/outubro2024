// Player 1
const audioPlayer1 = document.getElementById('audioPlayer1');
const playPauseBtn1 = document.getElementById('playPauseBtn1');
const progressBar1 = document.getElementById('progressBar1');

playPauseBtn1.addEventListener('click', function() {
  if (audioPlayer1.paused) {
    audioPlayer1.play();
    playPauseBtn1.classList.remove('fa-play');
    playPauseBtn1.classList.add('fa-pause');
  } else {
    audioPlayer1.pause();
    playPauseBtn1.classList.remove('fa-pause');
    playPauseBtn1.classList.add('fa-play');
  }
});

audioPlayer1.addEventListener('timeupdate', function() {
  const progress1 = (audioPlayer1.currentTime / audioPlayer1.duration) * 100;
  progressBar1.style.width = progress1 + '%';
});

// Player 2
const audioPlayer2 = document.getElementById('audioPlayer2');
const playPauseBtn2 = document.getElementById('playPauseBtn2');
const progressBar2 = document.getElementById('progressBar2');

playPauseBtn2.addEventListener('click', function() {
  if (audioPlayer2.paused) {
    audioPlayer2.play();
    playPauseBtn2.classList.remove('fa-play');
    playPauseBtn2.classList.add('fa-pause');
  } else {
    audioPlayer2.pause();
    playPauseBtn2.classList.remove('fa-pause');
    playPauseBtn2.classList.add('fa-play');
  }
});

audioPlayer2.addEventListener('timeupdate', function() {
  const progress2 = (audioPlayer2.currentTime / audioPlayer2.duration) * 100;
  progressBar2.style.width = progress2 + '%';
});

// Player 3
const audioPlayer3 = document.getElementById('audioPlayer3');
const playPauseBtn3 = document.getElementById('playPauseBtn3');
const progressBar3 = document.getElementById('progressBar3');

playPauseBtn3.addEventListener('click', function() {
  if (audioPlayer3.paused) {
    audioPlayer3.play();
    playPauseBtn3.classList.remove('fa-play');
    playPauseBtn3.classList.add('fa-pause');
  } else {
    audioPlayer3.pause();
    playPauseBtn3.classList.remove('fa-pause');
    playPauseBtn3.classList.add('fa-play');
  }
});

audioPlayer3.addEventListener('timeupdate', function() {
  const progress3 = (audioPlayer3.currentTime / audioPlayer3.duration) * 100;
  progressBar3.style.width = progress3 + '%';
});


const audioPlayer4 = document.getElementById('audioPlayer4');
const playPauseBtn4 = document.getElementById('playPauseBtn4');
const progressBar4 = document.getElementById('progressBar4');

playPauseBtn4.addEventListener('click', function() {
  if (audioPlayer4.paused) {
    audioPlayer4.play();
    playPauseBtn4.classList.remove('fa-play');
    playPauseBtn4.classList.add('fa-pause');
  } else {
    audioPlayer4.pause();
    playPauseBtn4.classList.remove('fa-pause');
    playPauseBtn4.classList.add('fa-play');
  }
});

audioPlayer4.addEventListener('timeupdate', function() {
  const progress4 = (audioPlayer4.currentTime / audioPlayer4.duration) * 100;
  progressBar4.style.width = progress4 + '%';
});


const audioPlayer5 = document.getElementById('audioPlayer5');
const playPauseBtn5 = document.getElementById('playPauseBtn5');
const progressBar5 = document.getElementById('progressBar5');

playPauseBtn5.addEventListener('click', function() {
  if (audioPlayer5.paused) {
    audioPlayer5.play();
    playPauseBtn5.classList.remove('fa-play');
    playPauseBtn5.classList.add('fa-pause');
  } else {
    audioPlayer5.pause();
    playPauseBtn5.classList.remove('fa-pause');
    playPauseBtn5.classList.add('fa-play');
  }
});

audioPlayer5.addEventListener('timeupdate', function() {
  const progress5 = (audioPlayer5.currentTime / audioPlayer5.duration) * 100;
  progressBar5.style.width = progress5 + '%';
});


const audioPlayer6 = document.getElementById('audioPlayer6');
const playPauseBtn6 = document.getElementById('playPauseBtn6');
const progressBar6 = document.getElementById('progressBar6');

playPauseBtn6.addEventListener('click', function() {
  if (audioPlayer6.paused) {
    audioPlayer6.play();
    playPauseBtn6.classList.remove('fa-play');
    playPauseBtn6.classList.add('fa-pause');
  } else {
    audioPlayer6.pause();
    playPauseBtn6.classList.remove('fa-pause');
    playPauseBtn6.classList.add('fa-play');
  }
});

audioPlayer6.addEventListener('timeupdate', function() {
  const progress6 = (audioPlayer6.currentTime / audioPlayer6.duration) * 100;
  progressBar6.style.width = progress6 + '%';
});

const audioPlayer7 = document.getElementById('audioPlayer7');
const playPauseBtn7 = document.getElementById('playPauseBtn7');
const progressBar7 = document.getElementById('progressBar7');

playPauseBtn7.addEventListener('click', function() {
  if (audioPlayer7.paused) {
    audioPlayer7.play();
    playPauseBtn7.classList.remove('fa-play');
    playPauseBtn7.classList.add('fa-pause');
  } else {
    audioPlayer7.pause();
    playPauseBtn7.classList.remove('fa-pause');
    playPauseBtn7.classList.add('fa-play');
  }
});

audioPlayer7.addEventListener('timeupdate', function() {
  const progress7 = (audioPlayer7.currentTime / audioPlayer7.duration) * 100;
  progressBar7.style.width = progress7 + '%';
});

const audioPlayer8 = document.getElementById('audioPlayer8');
const playPauseBtn8 = document.getElementById('playPauseBtn8');
const progressBar8 = document.getElementById('progressBar8');

playPauseBtn8.addEventListener('click', function() {
  if (audioPlayer8.paused) {
    audioPlayer8.play();
    playPauseBtn8.classList.remove('fa-play');
    playPauseBtn8.classList.add('fa-pause');
  } else {
    audioPlayer8.pause();
    playPauseBtn8.classList.remove('fa-pause');
    playPauseBtn8.classList.add('fa-play');
  }
});

audioPlayer8.addEventListener('timeupdate', function() {
  const progress8 = (audioPlayer8.currentTime / audioPlayer8.duration) * 100;
  progressBar8.style.width = progress8 + '%';
});

const audioPlayer9 = document.getElementById('audioPlayer9');
const playPauseBtn9 = document.getElementById('playPauseBtn9');
const progressBar9 = document.getElementById('progressBar9');

playPauseBtn9.addEventListener('click', function() {
  if (audioPlayer9.paused) {
    audioPlayer9.play();
    playPauseBtn9.classList.remove('fa-play');
    playPauseBtn9.classList.add('fa-pause');
  } else {
    audioPlayer9.pause();
    playPauseBtn9.classList.remove('fa-pause');
    playPauseBtn9.classList.add('fa-play');
  }
});

audioPlayer9.addEventListener('timeupdate', function() {
  const progress9 = (audioPlayer9.currentTime / audioPlayer9.duration) * 100;
  progressBar9.style.width = progress9 + '%';
});


const audioPlayer10 = document.getElementById('audioPlayer10');
const playPauseBtn10 = document.getElementById('playPauseBtn10');
const progressBar10 = document.getElementById('progressBar10');

playPauseBtn10.addEventListener('click', function() {
  if (audioPlayer10.paused) {
    audioPlayer10.play();
    playPauseBtn10.classList.remove('fa-play');
    playPauseBtn10.classList.add('fa-pause');
  } else {
    audioPlayer10.pause();
    playPauseBtn10.classList.remove('fa-pause');
    playPauseBtn10.classList.add('fa-play');
  }
});

audioPlayer10.addEventListener('timeupdate', function() {
  const progress10 = (audioPlayer10.currentTime / audioPlayer10.duration) * 100;
  progressBar10.style.width = progress10 + '%';
});


const audioPlayer11 = document.getElementById('audioPlayer11');
const playPauseBtn11 = document.getElementById('playPauseBtn11');
const progressBar11 = document.getElementById('progressBar11');

playPauseBtn11.addEventListener('click', function() {
  if (audioPlayer11.paused) {
    audioPlayer11.play();
    playPauseBtn11.classList.remove('fa-play');
    playPauseBtn11.classList.add('fa-pause');
  } else {
    audioPlayer11.pause();
    playPauseBtn11.classList.remove('fa-pause');
    playPauseBtn11.classList.add('fa-play');
  }
});

audioPlayer11.addEventListener('timeupdate', function() {
  const progress11 = (audioPlayer11.currentTime / audioPlayer11.duration) * 100;
  progressBar11.style.width = progress11 + '%';
});


const audioPlayer12 = document.getElementById('audioPlayer12');
const playPauseBtn12 = document.getElementById('playPauseBtn12');
const progressBar12 = document.getElementById('progressBar12');

playPauseBtn12.addEventListener('click', function() {
  if (audioPlayer12.paused) {
    audioPlayer12.play();
    playPauseBtn12.classList.remove('fa-play');
    playPauseBtn12.classList.add('fa-pause');
  } else {
    audioPlayer12.pause();
    playPauseBtn12.classList.remove('fa-pause');
    playPauseBtn12.classList.add('fa-play');
  }
});

audioPlayer12.addEventListener('timeupdate', function() {
  const progress12 = (audioPlayer12.currentTime / audioPlayer12.duration) * 100;
  progressBar12.style.width = progress12 + '%';
});

const audioPlayer13 = document.getElementById('audioPlayer13');
const playPauseBtn13 = document.getElementById('playPauseBtn13');
const progressBar13 = document.getElementById('progressBar13');

playPauseBtn13.addEventListener('click', function() {
  if (audioPlayer13.paused) {
    audioPlayer13.play();
    playPauseBtn13.classList.remove('fa-play');
    playPauseBtn13.classList.add('fa-pause');
  } else {
    audioPlayer13.pause();
    playPauseBtn13.classList.remove('fa-pause');
    playPauseBtn13.classList.add('fa-play');
  }
});

audioPlayer13.addEventListener('timeupdate', function() {
  const progress13 = (audioPlayer13.currentTime / audioPlayer13.duration) * 100;
  progressBar13.style.width = progress13 + '%';
});

const audioPlayer14 = document.getElementById('audioPlayer14');
const playPauseBtn14 = document.getElementById('playPauseBtn14');
const progressBar14 = document.getElementById('progressBar14');

playPauseBtn14.addEventListener('click', function() {
  if (audioPlayer14.paused) {
    audioPlayer14.play();
    playPauseBtn14.classList.remove('fa-play');
    playPauseBtn14.classList.add('fa-pause');
  } else {
    audioPlayer14.pause();
    playPauseBtn14.classList.remove('fa-pause');
    playPauseBtn14.classList.add('fa-play');
  }
});

audioPlayer14.addEventListener('timeupdate', function() {
  const progress14 = (audioPlayer14.currentTime / audioPlayer14.duration) * 100;
  progressBar14.style.width = progress14 + '%';
});

const audioPlayer15 = document.getElementById('audioPlayer15');
const playPauseBtn15 = document.getElementById('playPauseBtn15');
const progressBar15 = document.getElementById('progressBar15');

playPauseBtn15.addEventListener('click', function() {
  if (audioPlayer15.paused) {
    audioPlayer15.play();
    playPauseBtn15.classList.remove('fa-play');
    playPauseBtn15.classList.add('fa-pause');
  } else {
    audioPlayer15.pause();
    playPauseBtn15.classList.remove('fa-pause');
    playPauseBtn15.classList.add('fa-play');
  }
});

audioPlayer15.addEventListener('timeupdate', function() {
  const progress15 = (audioPlayer15.currentTime / audioPlayer15.duration) * 100;
  progressBar15.style.width = progress15 + '%';
});

const audioPlayer16 = document.getElementById('audioPlayer16');
const playPauseBtn16 = document.getElementById('playPauseBtn16');
const progressBar16 = document.getElementById('progressBar16');

playPauseBtn16.addEventListener('click', function() {
  if (audioPlayer16.paused) {
    audioPlayer16.play();
    playPauseBtn16.classList.remove('fa-play');
    playPauseBtn16.classList.add('fa-pause');
  } else {
    audioPlayer16.pause();
    playPauseBtn16.classList.remove('fa-pause');
    playPauseBtn16.classList.add('fa-play');
  }
});

audioPlayer16.addEventListener('timeupdate', function() {
  const progress16 = (audioPlayer16.currentTime / audioPlayer16.duration) * 100;
  progressBar16.style.width = progress16 + '%';
});
