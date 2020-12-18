var vid = document.getElementById("vid-2");
const video = document.getElementById("vid-3");
var Italy = document.getElementById("vid-5");

function playVid1() {
    vid.play();
}

function playVid2() {
    Italy.play();
}

video.addEventListener("mouseover", function () {
    this.play();
}); 
