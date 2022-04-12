class MyDropMenu extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <img class="logo"src="./assets/Logo.svg" alt="">  
        <div>
            <a href=""> <h2>Inicio</h2> </a>
            <a href=""> <h2>Nosotros</h2> </a>
            <a href=""> <h2>Preguntas</h2> </a>
            <a href=""> <h2>Participantes</h2> </a>
        </div> 
        `
    }
}

customElements.define('my-drop-menu', MyDropMenu)
