
function slideMenu() {   
    var element = document.getElementById("menu"); 
    element.classList.toggle("active");
}

// Open magic button at the botom of the screen.
function openButtonMenu() {   
    var btnMenuContainer = document.getElementById("buttonMenu_container"); 
    var circle1 = document.getElementById('circle1')
    var circle2 = document.getElementById('circle2')
    var circle3 = document.getElementById('circle3')
    var button1 = document.getElementById('button1')
    var button2 = document.getElementById('button2')
    var button3 = document.getElementById('button3')
    btnMenuContainer.classList.toggle("active");
    circle1.classList.toggle("active");
    circle2.classList.toggle("active");
    circle3.classList.toggle("active");
    button1.classList.toggle("active");
    button2.classList.toggle("active");
    button3.classList.toggle("active");
}

// Scroll Magic.
    var controller = new ScrollMagic.Controller();

    var scene1 = new ScrollMagic.Scene({
        triggerElement: '.section_somos',
        duration: "100%",
    })

    .setClassToggle('.section_hero','active')
    .addTo (controller)

    // get the current scroll offset for the start and end of the scene.
    var start = scene1.scrollOffset(0);
    var end = scene1.scrollOffset(1) + scene1.duration();
    console.log("the scene starts at", start, "and ends at", end);

   
function reveal() {
    var section_somos = document.getElementById('somos');
    var buttonMenu = document.getElementById('btnMenu');
    var windowHeight = window.innerHeight;
    var elementTop = section_somos.getBoundingClientRect().top;
    var elementVisible = 750;
    if (elementTop < windowHeight - elementVisible) {
        buttonMenu.classList.add("active");
    } else {
        buttonMenu.classList.remove("active");
    }
}
    
window.addEventListener("scroll", reveal);
