class MyDropMenu extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <img class="logo"src="./assets/Logo.svg" alt="">  
            <div class="menuLinks_container">
                <div class="menuLinks_container-links dfc">
                    <a href="">Inicio</a>
                    <a href="">Nosotros</a>
                    <a href="">Preguntas</a>
                    <a href="">Participantes</a>
                </div>
                <div class="menuLinks_container-line"></div>
                
                <div class="menuLinks_container-contactos">
                    <h2>CONTACTO</h2>
                    <div>
                        <span>Espacios y participacion</span>
                        <a href="">juana.montoya@laferiadediseno.com</a>
                        <a href="">+57 313 637 3318</a>
                    </div>
                    <div>
                        <span>Producción General</span>
                        <a href="">produccion@laferiadediseno.com</a>
                    </div>
                    <div class="menuSiguenos2">
                        <span>Siguenos</span>
                        <div>
                            <a href="">
                                <img class="logoSocial"src="./assets/instagram.svg" alt=""> 
                            </a>
                            <a href="">
                                <img class="logosocial"src="./assets/Linkedin.svg" alt="">  
                            </a>
                        </div>
                    </div>
                </div>
            </div> 

            <div class="menuSiguenos">
                <span>Siguenos</span>
                <div>
                    <a href="">
                        <img class="logoSocial"src="./assets/instagram.svg" alt=""> 
                    </a>
                    <a href="">
                        <img class="logosocial"src="./assets/Linkedin.svg" alt="">  
                    </a>
                </div>
            </div>

            <img class="menuImage"src="./assets/Feria+Nav.svg" alt="">

        `
    }
}

customElements.define('my-drop-menu', MyDropMenu)
