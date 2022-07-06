import { TemplateRenderer } from './utils/TemplateRenderer.js';
import './components/nav-bar.js';
import './sections/home-section.js';

class AppLayout extends TemplateRenderer {
    constructor() {
        super();
        this.noShadow = false;
    }

    get template() {
        return `
            <style>

                :host {
                    display: block;
                    padding: 90px 250px;
                }
        
            </style>

            
            <div>
                <nav-bar></nav-bar>
                
                <home-section>/home-section>
            </div>
        `;
    }

}

customElements.define('app-layout', AppLayout);
