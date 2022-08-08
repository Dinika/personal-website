import { TemplateRenderer } from './utils/TemplateRenderer.js';
import './components/nav-bar.js';
import './sections/home-section.js';
import './sections/work-section.js';
import './sections/skills-section.js';
import './sections/about-section.js';
import './sections/contact-section.js';
import './components/copyright-info.js';
class AppLayout extends TemplateRenderer {
    constructor() {
        super();
        this.noShadow = false;
    }

    connectedCallback() {
        super.connectedCallback();

        const observer = new IntersectionObserver(observedEntries => {
            observedEntries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    return;
                }
            });
        });

        const animatables = this.shadowRoot.querySelectorAll('.animate');
        console.log('document', document.querySelectorAll('.animate'));
        console.log('this.querySelectorAll', this.querySelectorAll('.animate'));

        animatables.forEach(animatable => {
            observer.observe(animatable);
        });
    }

    get template() {
        return `
            <style>

                :host {
                    display: block;
                    padding: 90px 250px 0px 250px;
                }

                .animate {
                    transition: all 1s ease-in-out;
                    transform: translate3d(0px, 30px, 0);
                    opacity: 0;
                }
                
                .animate.active {
                    transform: translate3d(0px, 0, 0);
                    opacity: 1;
                }                
        
            </style>

            <div>    
                <nav-bar class="animate"></nav-bar>
                
                <home-section class="animate"></home-section>

                <work-section class="animate"></work-section>

                <skills-section class="animate"></skills-section>

                <about-section class="animate"></about-section>

                <contact-section class="animate"></contact-section>
                
                <copyright-info></copyright-info>
            </div>
        `;
    }

}

customElements.define('app-layout', AppLayout);
