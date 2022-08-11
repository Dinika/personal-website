import { TemplateRenderer } from '../utils/TemplateRenderer.js';
import * as yearDetailsComponent from '../components/projects-by-year.js';
import { projects } from '../data/projects.js';
import { toComponentArgs } from '../utils/methods.js';

class WorkSection extends TemplateRenderer {

    projectsByYear = Object.values(projects).map((yearDetails) => (
        `<projects-by-year 
            ${yearDetailsComponent.yearDetailsAttrName}="${toComponentArgs(yearDetails)}">
        </projects-by-year>
        `
    )).join('');

    get template() {
        return `
        <style>

            :host {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
                margin: 92px 60px 0 0px;
            }

        </style>
        
        ${this.projectsByYear}        
    `;
    }

}

customElements.define('work-section', WorkSection);
