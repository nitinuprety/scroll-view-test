var frameNumber = 0, // start video at frame 0
 
    // lower numbers = faster playback
    playbackConst = 800, 
    // get page height from video duration
    setHeight = document.getElementById("set-height"), 
    // select video element         
    vid = document.getElementById('v0'); 

// dynamically set the page height according to video length
vid.addEventListener('loadedmetadata', function() {
  console.log("FRAME:", frameNumber);
  setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
});

// Use requestAnimationFrame for smooth playback
function scrollPlay(){  
  var frameNumber  = window.scrollY/playbackConst;
  vid.currentTime  = frameNumber;
  window.requestAnimationFrame(scrollPlay);
}

window.requestAnimationFrame(scrollPlay);