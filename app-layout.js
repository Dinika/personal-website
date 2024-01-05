import { TemplateRenderer } from './utils/TemplateRenderer.js';
import './components/nav-bar.js';
import './components/nav-menu.js';
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
                    padding: 90px 15rem 0px 15rem;
                    position: relative;
                }

                .mobile-only {
                    display: none;
                }

                @media (1000px <= width <= 1400px) {
                    :host {
                        padding: 90px 8rem 0px 8rem;
                    }
                }

                @media (max-width: 1000px) {
                    :host {
                        padding: 90px 2rem 0px 2rem;
                    }
                    .mobile-only {
                        display: block;
                    }

                    .not-for-mobile {
                        display: none;
                    }
                }
                
            </style>

            <div>    
                <scroll-animator>
                    <nav-bar class="animate not-for-mobile"></nav-bar>
                    
                    <nav-menu class="mobile-only"></nav-menu>

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
