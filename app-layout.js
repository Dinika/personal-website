import { TemplateRenderer } from './utils/TemplateRenderer.js';
import './components/nav-bar.js';
import './sections/home-section.js';
import './sections/work-section.js';
import './sections/skills-section.js';
import './sections/about-section.js';
import './sections/contact-section.js';
import './components/copyright-info.js';
import './components/scroll-animator.js';

class AppLayout extends TemplateRenderer {

    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('navigateTo', event => {
            const section = this.shadowRoot.querySelector(event.detail);
            section.scrollIntoView({ behavior: 'smooth' });
        })
    }

    get template() {
        return `
            <style>

                :host {
                    display: block;
                    padding: 90px 250px 0px 250px;
                    
                }
        
            </style>

            <div>    
                <scroll-animator>
                    <nav-bar class="animate"></nav-bar>
                    
                    <home-section class="animate" id="home"></home-section>

                    <work-section class="animate" id="work"></work-section>

                    <skills-section class="animate" id="skills"></skills-section>

                    <about-section class="animate" id="about"></about-section>

                    <contact-section class="animate" id="contact"></contact-section>
                </scroll-animator>

                <copyright-info></copyright-info>
            </div>
        `;
    }

}

customElements.define('app-layout', AppLayout);
