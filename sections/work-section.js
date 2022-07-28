import { TemplateRenderer } from '../utils/TemplateRenderer.js';
import '../components/projects-by-year.js';

class WorkSection extends TemplateRenderer {

    get template() {
        return `
        <style>

            :host {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin: 92px 60px 0 0px;

            }

        </style>
        
        <projects-by-year></projects-by-year>

        
        
    `;
    }

}

customElements.define('work-section', WorkSection);
