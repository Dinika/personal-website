import { TemplateRenderer } from '../utils/TemplateRenderer.js';
import '../components/app-paper.js';

class HomeSection extends TemplateRenderer {

    get template() {
        return `
        <style>

            :host {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin: 92px 60px 0 60px;

            }

            h1 {
                font-family: 'Montserrat', sans-serif;
                font-size: 64px;
                font-weight: 800;
            }

            p {
                font-size: 18px;
                font-weight: 500;
                line-height: 30px;
                letter-spacing: 0em;
                text-align: left;
            }

            .highlight {
                color: var(--primary-500);
                font-weight: 700;
            }

            a {
                font-style: normal;
                font-weight: 500;
                text-decoration-line: underline;
                color: var(--text-700);
            }

            app-paper {
                max-width: 560px;
                min-height: 228px;
                padding: 36px;
            }

        </style>
        
        
        <h1>
            Hello,
            <br>
            I'm Dinika.            
        </h1>

        <app-paper>
            <p>
                I am a <span class="highlight">software engineer</span> experienced in architecturing and developing web applications.
                I am currently working for the <a href="https://en.wikipedia.org/wiki/Blue_Brain_Project">Blue Brain Project</a> at EPFL where I am playing a small part
                in the digital reconstruction and simulation of the brain.
            </p>
        </app-paper>
    `;
    }

}

customElements.define('home-section', HomeSection);
