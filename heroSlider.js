var counter = 1;
const line = document.getElementById('manual-btn-' + counter);


setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    line.style.backgroundColor = '#3A37E0';
    counter ++;
    if(counter>3){
        counter = 1;
    }
},6000)