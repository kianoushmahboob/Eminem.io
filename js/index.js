var songs = ["luck.mp3", "not.mp3", "step.mp3"];
var limit = songs.length;
var poster = ["img/ll.jpg", "img/ll.jpg", "img/ll.jpg"];
var songTitle = document.getElementById("audioTitle");
var fillbar = document.getElementById("fall");
var song = new Audio();
currentSong = 0;
window.onload = playSong;
function playSong() {
  song.src = songs[currentSong];
  songTitle.textContent = songs[currentSong];
  song.play();
}
function playOrPause() {
  if (song.paused) {
    song.play();
    $("#play-puse i").removeClass("fas fa-play");
    $("#play-puse i").addClass("fas fa-pause");
  }
  else {
    song.pause();
    $("#play-puse i").removeClass("fas fa-pause ");
    $("#play-puse i").addClass("fas fa-play");
  }
}
song.addEventListener("timeupdate", function () {
  var pos = song.currentTime / song.duration;
  fillbar.style.width = pos * 98 + '%';
});
function next() {
  currentSong++;
  if (currentSong >= limit) {
    currentSong = 0;
  }
  playSong();
}