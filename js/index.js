
// Open menu from the hamburger menu button.
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

// Hides hero section and change color when section somos shows at the screen.
const section_somos = document.getElementById('somos');
   
function reveal1() {
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
    
window.addEventListener("scroll", reveal1);

// Reveals Magic button when section somos shows at the screen..
function reveal2() {
    var section_hero = document.getElementById('heroSection');
    var windowHeight = window.innerHeight;
    var elementTop = section_somos.getBoundingClientRect().top;
    var elementVisible = 550;
    if (elementTop < windowHeight - elementVisible) {
        section_hero.classList.add("active");
    } else {
        section_hero.classList.remove("active");
    }
}
    
window.addEventListener("scroll", reveal2);