const video1 = document.getElementById("video1")
const video2 = document.getElementById("video2")
const video3 = document.getElementById("video3")

// Detección de slide y cambio de estado
var stateSlider = 0;
UIkit.util.on('#slider-hero', 'itemshow', (e) => {
    switch (e.detail[0].index) {
        case 0:
            if (stateSlider == 0) {
                video1.style.width = "100%";
                video2.style.width = "0%";
                video3.style.width = "0%";
            } else if (stateSlider == 1) {
                video1.style.width = "100%";
                video2.style.transition = "width 0.3s ease-in";
                video2.style.width = "0%";
                video3.style.width = "0%";
            } else if (stateSlider == 2) {
                video1.style.width = "100%";
                video2.style.transition = "none";
                video2.style.width = "0%";
                video3.style.transition = "none";
                video3.style.width = "0%";
            }
            stateSlider = 0;
            break;

        case 1:
            if (stateSlider == 0) {
                video1.style.width = "100%";
                video2.style.transition = "width 0.3s ease-in";
                video2.style.width = "100%";
                video3.style.width = "0%";
            } else if (stateSlider == 2) {
                video1.style.width = "100%";
                video2.style.transition = "width 0.3s ease-in";
                video2.style.width = "100%";
                video3.style.transition = "width 0.3s ease-in";
                video3.style.width = "0%";
            }
            stateSlider = 1;
            break;

        case 2:
            if (stateSlider == 0) {
                video1.style.width = "100%";
                video2.style.transition = "none";
                video2.style.width = "100%";
                video3.style.transition = "none";
                video3.style.width = "100%";
            } else if (stateSlider == 1) {
                video1.style.width = "100%";
                video2.style.transition = "width 0.3s ease-in";
                video2.style.width = "100%";
                video3.style.transition = "width 0.3s ease-in";
                video3.style.width = "100%";
            }
            stateSlider = 2;
            break;
    
        default:
            break;
    }
});