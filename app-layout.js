import { TemplateRenderer } from './utils/TemplateRenderer.js';
import './components/nav-bar.js';

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
                    padding: 90px 120px;
                }
        
            </style>

            
            <div>
                <nav-bar></nav-bar>
                <div>
                    <h1>Hello,</h1>
                    <h1>I'm Dinika</h1>
                <div>
            </div>
        `;
    }

}

customElements.define('app-layout', AppLayout);
