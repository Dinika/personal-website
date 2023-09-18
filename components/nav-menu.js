import { TemplateRenderer } from '../utils/TemplateRenderer.js';

class NavMenu extends TemplateRenderer {
    #isMenuOpen = false;
    static openButtonId = 'open-nav-menu-button';
    static closeButtonId = 'close-nav-menu-button';

    connectedCallback() {
        super.connectedCallback();

        this.#addMenuEventListener('open');
    }

    #openMenu() {
        this.#isMenuOpen = true;

        this.render();

        this.#addMenuEventListener('close');
    }

    #closeMenu() {
        this.#isMenuOpen = false;

        this.render();

        this.#addMenuEventListener('open');
    }

    #addMenuEventListener(type = 'open') {
        if (type === 'open') {
            const openMenuButton = this.shadowRoot.getElementById(NavMenu.openButtonId);
            openMenuButton.addEventListener('click', this.#openMenu.bind(this));



        } else if (type === 'close') {
            const navLinks = this.shadowRoot.querySelectorAll('a.section-link');
            navLinks.forEach(l => {
                l.addEventListener('click', (event) => {
                    this.dispatchEvent(new CustomEvent('navigateTo', { detail: l.hash, bubbles: true, composed: true }))
                });
            });

            const closeMenuButton = this.shadowRoot.getElementById(NavMenu.closeButtonId);
            closeMenuButton.addEventListener('click', this.#closeMenu.bind(this));
        }
    }

    get template() {
        const openMenuButton = `<button id="${NavMenu.openButtonId}" class="open-menu-btn" alt="Open navigation menu"><img src="../assets/menu-icon.svg" /></button>`;
        const menu = `
            <nav>
                <button id="${NavMenu.closeButtonId}" alt="Close navigation menu"><img src="../assets/close-icon.svg" /></button>
                <ul>
                    <li><a class="section-link" href="#home">Home</a></li>
                    <li><a class="section-link" href="#work">Work</a></li>
                    <li><a class="section-link" href="#skills">Skills</a></li>
                    <li><a class="section-link" href="#about">About</a></li>
                    <li><a class="section-link" href="#contact">Contact</a></li>
                    <li><a href="https://dinika.github.io/personal-website/Resume_Dinika_Saxena.pdf" download>Resume</a></li>
                </ul>
            </nav>
        `;

        return `
            <style>
                nav {
                    position: fixed;
                    top: 0;
                    left: 0;
                    background: var(--primary-700);
                    color: white;
                    width: 70vw;
                    min-width: max-content;
                    height: 100vh;
                    z-index: 10;
                }

                a {
                    color: white;
                    text-decoration: none;
                }

                ul {
                    list-style: none;
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

                .show {
                    display: block;
                }

                .hide {
                    display: none;
                }
            </style>
            
            ${this.#isMenuOpen ? menu : openMenuButton}
        `
    }
}

customElements.define('nav-menu', NavMenu);
