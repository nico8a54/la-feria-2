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