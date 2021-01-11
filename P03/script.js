const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

//Functions
//1.Toggle video- play or pause video
//if video is playing- pause and vise versa

function toggleVideo(){
    if(video.pause){
        video.play();
    } else{
        video.pause();
    }

};

//2-update icon - toggle between play and pause icons
//if video is playing,then show pause icon
//if video is paused,them show play icon

function updateIcon() {
    if(video.pause){
        play.innerHTML = '<i class="fas fa-play fa-2x"></i>';
    } else {
        play.innerHTML = '<i class="fas fa-pause fa-2x"></i>';
    }

};

//3.updateProgress- update the position of the progress bar
    //update slider

function updateProgress () {
    progress.value = video.currentTime/video.duration*100;


    //update timestamp
    //Rounding down the minutes
    let minutes = Math.floor(video.currentTime /60);
    if (minutes < 10){
        minutes = `0${minutes}`;
    }
    //Rounding down the seconds
    let seconds = Math.floor(video.currentTime % 60);
    if(seconds < 10){
        seconds = `0${seconds}`;
    }

    //display time
    timestamp.innerHTML = `${minutes}:${seconds}`;

};


//4.Stop Video- stop video playback and set time to zero

function stopVideo() {
    video.pause();
    video.currentTime = 0;

};

//5.Set progress update video playback time based on manual change in progress

function setProgress() {
    video.currentTime = progress.value*video.duration/100;

};



//event listners
//1-video element - click to play or pause video
video.addEventListener('click',toggleVideo);

//2-video element - Play button toggle to pause icon
video.addEventListener('pause',updateIcon);

//3- video element - pause button toggle to play icon
video.addEventListener('play', updateIcon);

//4-video element- update progress bar and timestamp
video.addEventListener('timeupdate', updateProgress);

//5- Play button - click to play or pause video
play.addEventListener('click',toggleVideo);

//6- stop button - click to reset video and pause video
stop.addEventListener('click', stopVideo);

//7- Progress bar - change position to change time of playback
progress.addEventListener('change', setProgress);