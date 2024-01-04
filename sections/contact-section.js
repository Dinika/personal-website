import { TemplateRenderer } from '../utils/TemplateRenderer.js';
import '../components/app-paper.js';
import '../components/scroll-animator.js';

class ContactSection extends TemplateRenderer {

    emailId = "dinika@greyllama.cc";

    get template() {
        return `
        <style>
            :host {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                margin: 0px 60px 0 60px;
                min-height: 100vh;
            }

            h1 {
                font-family: 'Montserrat', sans-serif;
                font-size: 64px;
                margin-top: 0px;
                margin-bottom: 0px;
                margin-right: 4px;
            }

            p {
                font-size: 18px;
                font-weight: 500;
                line-height: 30px;
                letter-spacing: 0em;
            }

            a {
                font-family: 'Quicksand', sans-serif;
                font-size: 20px;
                font-weight: 700;
                line-height: 25px;
                letter-spacing: 0em;
                text-align: center;                
                color: var(--text-700);
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
                background: var(--primary-500);
                transition: width 0.3s ease 0s, left 0.3s ease 0s;
                width: 0;
            }

            a:hover:after { 
                width: 100%; 
                left: 0; 
            } 

            app-paper {
                max-width: 560px;
                min-height: 228px;
                padding: 36px;
                text-align: center;
            }

            .header {
                display: flex;
                align-items: baseline;
                margin-bottom: 16px;
                width: 100%;
                justify-content: center;
            }

            button.copy-button {
                all: unset;
            }

            .copy-text .copy-button {
                margin-bottom: 4px;
                opacity: 0;
                cursor: pointer;
                transition: opacity 0.2s ease-in-out;
            }

            .copy-text:hover .copy-button {
                opacity: 0.7;
            } 

        </style>
        
        
        <div class="header">
            <h1>Get in touch</h1>
            <img src="https://dinika.github.io/personal-website/assets/send-me-love.svg" title="(づ｡◕‿‿◕｡)づ - stranger danger"/>
        </div>


        <scroll-animator>
            <app-paper class="animate">
                <p>
                    Questions or Comments? I’d love to hear from you!
                </p>

                <p>Email me at 
                    <span class="copy-text">
                        <a href="mailto:${this.emailId}" title="Opens your email client to write me an email">${this.emailId}</a>
                        <button class="copy-button" onclick="navigator.clipboard.writeText('${this.emailId}')"><img src="https://dinika.github.io/personal-website/assets/copy.svg" title="Copy email id"/></button>
                    </span>
                </p>

                <p>You can also find me on <a href="https://linkedin.com/in/dinika-saxena">LinkedIn</a> or <a href="https://github.com/Dinika">GitHub</a>.</p>
                <p>Most of my artwork is available <a href="https://www.instagram.com/grey_llama_drama/">here</a>. Do stop by, say hi!</p>
            </app-paper>
        </scroll-animator>
    `;
    }

}

customElements.define('contact-section', ContactSection);
