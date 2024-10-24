import { TemplateRenderer } from '../utils/TemplateRenderer.js';

class NavMenu extends TemplateRenderer {
    static openButtonId = 'open-nav-menu-button';
    static closeButtonId = 'close-nav-menu-button';
    static menuMask = 'menu-mask';

    connectedCallback() {
        super.connectedCallback();

        this.#addMenuEventListener('open');
        this.#addMenuEventListener('close');
    }

    #openMenu() {
        const menuWrapper = this.shadowRoot.getElementById(NavMenu.menuMask);
        menuWrapper.classList.add('show');
    }

    #closeMenu() {
        const menuWrapper = this.shadowRoot.getElementById(NavMenu.menuMask);
        menuWrapper.classList.remove('show');
    }

    #addMenuEventListener(type = 'open') {
        if (type === 'open') {
            const openMenuButton = this.shadowRoot.getElementById(NavMenu.openButtonId);
            openMenuButton.addEventListener('click', this.#openMenu.bind(this));
        } else if (type === 'close') {
            const navLinks = this.shadowRoot.querySelectorAll('a.section-link');
            navLinks.forEach(l => {
                l.addEventListener('click', (event) => {
                    this.#closeMenu();
                    this.dispatchEvent(new CustomEvent('navigateTo', { detail: l.hash, bubbles: true, composed: true }))
                });
            });

            const closeMenuButton = this.shadowRoot.getElementById(NavMenu.closeButtonId);
            closeMenuButton.addEventListener('click', this.#closeMenu.bind(this));

            const menu = this.shadowRoot.querySelector('nav');
            const mask = this.shadowRoot.getElementById(NavMenu.menuMask);

            mask.addEventListener('click', (event) => {
                const menuRect = menu.getBoundingClientRect();
                const clickedOutsideMenu = event.clientX >= (menuRect.left + menuRect.width);
                if (clickedOutsideMenu) {
                    this.#closeMenu();
                }
            })
        }
    }

    get template() {
        const openMenuButton = `<button id="${NavMenu.openButtonId}" class="open-menu-btn" alt="Open navigation menu"><img src="../assets/menu-icon.svg" /></button>`;
        const menu = `
            <div id="${NavMenu.menuMask}">
                <nav>
                    <button id="${NavMenu.closeButtonId}" alt="Close navigation menu"><img src="../assets/close-icon.svg" /></button>
                    <ul>
                        <li><a class="section-link" href="#home">Home</a></li>
                        <li><a class="section-link" href="#work">Work</a></li>
                        <li><a class="section-link" href="#skills">Skills</a></li>
                        <li><a class="section-link" href="#about">About</a></li>
                        <li><a class="section-link" href="https://blog.dinika.greyllama.cc">Blog</a></li>
                        <li><a class="section-link" href="#contact">Contact</a></li>
                        <li><a href="https://dinika.github.io/personal-website/Resume_Dinika_Saxena.pdf" download>Resume</a></li>
                    </ul>
                </nav>
            </div>
        `;

        return `
            <style>
                #${NavMenu.menuMask} {
                    width: 100vw;
                    height: 100vh;
                    position: fixed;
                    top: 0;
                    left: -100vw;
                    z-index: 9;
                    transition: left 0.5s cubic-bezier(0.820, 0.085, 0.395, 0.895);
                }
                
                nav {
                    position: fixed;
                    top: 0;
                    background: var(--primary-700);
                    color: white;
                    width: 70vw;
                    min-width: max-content;
                    height: 100vh;
                    z-index: 10;
                }

                .show {
                    left: 0 !important;
                }
                .hide {
                    left: -10000px;
                }

                .open-menu-btn {
                    margin-left: 0rem;
                    margin-top: 0.8rem;
                    z-index: 8;
                }

                a {
                    font-size: 1.5rem;
                    line-height: 25px;
                    letter-spacing: 0em;
                    text-align: center;                
                    color: white;
                    display: inline-block;
                    position: relative;
                    text-decoration: none;
                    cursor: pointer;
                    padding-bottom: 4px;
                }

                a:after {    
                    background: none repeat scroll 0 0 transparent;
                    bottom: 0;
                    content: "";
                    display: block;
                    height: 2px;
                    left: 50%;
                    position: absolute;
                    background: white;
                    transition: width 0.3s ease 0s, left 0.3s ease 0s;
                    width: 0;
                }
    
                a:hover:after { 
                    width: 100%; 
                    left: 0; 
                } 

                ul {
                    list-style: none;
                }

                li {
                    margin-top: 20px;
                    margin-bottom: 20px;
                }

                li:first-of-type {
                    margin-top: 3rem;
                }

                button {
                    background: transparent;
                    border: none;
                    cursor: pointer;
                }

                #${NavMenu.openButtonId} {
                    position: fixed;
                    top: 10px;
                    left: 10px;
                }

                #${NavMenu.closeButtonId} {
                    position: absolute;
                    top: 10px;
                    right: 10px;
                }
            </style>
            
            ${openMenuButton}
            ${menu}
        `
    }
}

customElements.define('nav-menu', NavMenu);
