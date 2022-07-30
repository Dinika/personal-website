import { TemplateRenderer } from '../utils/TemplateRenderer.js';
import '../components/app-paper.js';

class CopyrightInfo extends TemplateRenderer {

    emailId = "dinikasaxenas@gmail.com";

    get template() {
        return `
        <style>
            
            p {
                font-family: Quicksand;
                font-size: 18px;
                font-weight: 500;
                line-height: 23px;
                letter-spacing: 0em;
                text-align: center;
                color: var(--text-300);
            }

            a {
                font-family: 'Quicksand', sans-serif;
                font-size: 18px;
                color: var(--primary-700);
                text-decoration: none;
                cursor: pointer;
            }

            .highlight {
                color: var(--primary-700);
            }
        </style>
        
        
        <p>Copyright © 2022 <span class="highlight">Dinika Saxena</span> | Licensed under <a href="todo">GNU GPLv3</a> | Get the <a href="https://github.com/Dinika/personal-website.git">source code</a>.</p>
    `;
    }

}

customElements.define('copyright-info', CopyrightInfo);
