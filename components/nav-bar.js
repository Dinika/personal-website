import { TemplateRenderer } from '../utils/TemplateRenderer.js';

class NavBar extends TemplateRenderer {
    connectedCallback() {
        super.connectedCallback();
        const navLinks = this.shadowRoot.querySelectorAll('a');
        navLinks.forEach(l => {
            l.addEventListener('click', (event) => {
                this.dispatchEvent(new CustomEvent('navigateTo', { detail: l.hash, bubbles: true, composed: true }))
            });
        })
    }

    get template() {
        return `
        <style>

            nav {
                display: flex;
                justify-content: flex-end;
            }

            ul {
                display: flex;
                list-style-type: none;
                width: 40%;
                justify-content: space-between;
            }

            a {
                font-weight: 700;
                font-size: 14px;
                cursor: pointer;
                color: var(--text-700);
                line-height: 20px;
                letter-spacing: 0em;
                text-align: left;
                text-decoration: none;
                display: inline-block;
                position: relative;
                margin-left: 4px;
                padding-bottom: 8px;
            }

            a:hover, a:focus, a.active {
                color: var(--primary-500);
            }

            a:after {    
                background: none repeat scroll 0 0 transparent;
                bottom: 0;
                content: "";
                display: block;
                height: 2px;
                left: 50%;
                position: absolute;
                background: var(--primary-500);
                transition: width 0.3s ease 0s, left 0.3s ease 0s;
                width: 0;
            }

            a:hover:after { 
                width: 100%; 
                left: 0; 
            } 

        </style>
        
        
        <nav>
            <ul>
                <li class="active"><a href="#home">Home</a></li>
                <li><a href="#work">Work</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    `;
    }

}

customElements.define('nav-bar', NavBar);
