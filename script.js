// console.log("Welcome to Spotify");
// let sonindex = 0;
// let audioElement = new Audio(t.mp3);
let masterPlay = document.getElementById('masterPlay');
let myprogressbar = document.getElementById('myprogressbar');
let song = document.getElementById('song');

song.onloadeddata = function(){
  myprogressbar.max = song.ondurationchange;
  myprogressbar.value = song.currentTime;
}

function playPause(){
  if(masterPlay.classList.contains("fa-circle-pause")){
    song.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
  }
  else{
    song.play();
    masterPlay.classList.add("fa-circle-pause");
    masterPlay.classList.remove("fa-circle-play");
  }
}














// let songs=[
//   {songName: "Tu Maan Meri Jaan", filePath:"t.mp3", coverPath:"pexels-george-desipris-899238 (1).jpg"}, 
//   {songName: "Tu Maan Meri Jaan", filePath:"t.mp3", coverPath:"pexels-george-desipris-899238 (1).jpg"},
//   {songName: "Tu Maan Meri Jaan", filePath:"t.mp3", coverPath:"pexels-george-desipris-899238 (1).jpg"},
//   {songName: "Tu Maan Meri Jaan", filePath:"t.mp3", coverPath:"pexels-george-desipris-899238 (1).jpg"},

// ]


// masterPlay.addEventListener('click',()=>{
//   if(audioElement.paused || audioElement.currentTime<=0){
//     audioElement.play();
//   }
// })
// // listen to event
// myprogressbar.addEventListener('timeupdate',()=>{
//   console.log('timeupdate');
// })
