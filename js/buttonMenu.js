class buttonMenu extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section class="section_buttonMenu">
        <div class="section_buttonMenu-button" onclick="this.classList.toggle('active')"></div>
        <div class="section_buttonMenu-container" id='buttonMenu_container'>
            <div class="section_buttonMenu-container-circle1" id='circle1'></div>
            <div class="section_buttonMenu-container-circle2" id='circle2'></div>
            <div class="section_buttonMenu-container-circle3" id='circle3'></div>
        </div>        
        </section>
        `
    }
}

customElements.define('my-button-menu', buttonMenu)