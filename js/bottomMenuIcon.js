class bottomMenu extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="section_buttonMenu-button" onclick="this.classList.toggle('active')"></div>
        <div class="section_buttonMenu-container" id='buttonMenu_container'>
            <div class="buttonMenu-bckg" id='buttonMenu-bckg'></div>
            <div class="buttonMenu-circle1" id='circle1'></div>
            <div class="buttonMenu-circle2" id='circle2'></div>
            <div class="buttonMenu-circle3" id='circle3'></div>
            <div class="buttonMenu-button" id='button1'></div>
            <div class="buttonMenu-button" id='button2'></div>
            <div class="buttonMenu-button" id='button3'></div>
        </div>        
        </section>
        `
    }
}

customElements.define('my-bottom-menu', bottomMenu)