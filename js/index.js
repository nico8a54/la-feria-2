
function slideMenu() {   
    var element = document.getElementById("menu"); 
    element.classList.toggle("active");
}
function openButtonMenu() {   
    var element = document.getElementById("buttonMenu_container"); 
    var circle1 = document.getElementById('circle1')
    var circle2 = document.getElementById('circle2')
    var circle3 = document.getElementById('circle3')
    element.classList.toggle("active");
    circle1.classList.toggle("active");
    circle2.classList.toggle("active");
    circle3.classList.toggle("active");
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

