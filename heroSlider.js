<<<<<<< HEAD
var video1 = document.getElementById('video1')
var video2 = document.getElementById('video2')
var video3 = document.getElementById('video3')
var title1 = document.getElementById('title1')
var title2 = document.getElementById('title2')
var title3 = document.getElementById('title3')

video1.onended = function () {
    video2.play();
    video1.style.opacity=0;
    video2.style.opacity=1;
    video2.style.animationName="slide2";
    video3.style.opacity=0;
    title1.style.display="none";
    title2.style.display="flex";
    title3.style.display="none";
}
video2.onended = function () {
    video3.play();
    video1.style.opacity=0;
    video2.style.opacity=0;
    video3.style.opacity=1;
    title1.style.display="none";
    title2.style.display="none";
    title3.style.display="flex";
}
video3.onended = function () {
    video1.play();
    video1.style.opacity=1;
    video2.style.opacity=0;
    video3.style.opacity=0;
    title1.style.display="flex";
    title2.style.display="none";
    title3.style.display="none";
}
=======
const line1 = document.getElementById("line1");
line1.style.backgroundColor = "red";

const myElement = document.getElementById("demo");
myElement.style.color = "red";

var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter ++;
    if(counter>3){
        counter = 1;
    }
},6000)
>>>>>>> parent of 8004d24 (v0.1.2)
