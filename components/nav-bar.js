import { TemplateRenderer } from '../utils/TemplateRenderer.js';

class NavBar extends TemplateRenderer {

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

            li {
                font-weight: 700;
                font-size: 14px;
                cursor: pointer;
            }

            li.active {
                color: var(--primary-500);
            }

        </style>
        
        
        <nav>
            <ul>
                <li class="active">Home</li>
                <li>Work</li>
                <li>Skills</li>
                <li>About</li>
                <li>Contact</li>
                <li>Skills</li>
            </ul>
        </nav>
    `;
    }

}

customElements.define('nav-bar', NavBar);
