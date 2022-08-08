import { TemplateRenderer } from '../utils/TemplateRenderer.js';
import '../components/app-paper.js';
import * as skills from '../data/skills.js';

class SkillsSection extends TemplateRenderer {

    skillsToListItems = (skillItems) => skillItems.map(s => `<li>${s}</li>`).join('');

    get template() {
        return `
        <style>

            :host {
                margin: 92px 60px 0 60px;
                display: block;
            }

            h1 {
                font-family: 'Montserrat', sans-serif;
                font-size: 64px;
                display: inline-block;
            }

            .cursor {
                background: var(--text-700);
                display: inline-block;

                height: 56px;
                width: 3px;
                margin-left: 15px;
                animation: cursorAnimate 1000ms;
                animation-iteration-count: infinite;
            }

            .content {
                display: flex;
                justify-content: space-between;
            }

            h4 {
                color: var(--primary-500);
                margin-bottom: 60px;
                font-family: 'Quicksand', sans-serif;
                font-size: 20px;
                font-weight: 600;
                line-height: 25px;
                letter-spacing: 0em;
                text-align: left;
            }

            app-paper {
                width: 300px;
                padding-top: 20px;
                padding-left: 20px;
                padding-bottom: 42px;
            }

            app-paper.full-height {
                min-height: 512px;
            }

            ul {
                list-style-type: none;
                padding-inline-start: 0px;
                margin-top: 0px;
            }

            li {
                font-family: 'Quicksand', sans-serif;
                font-size: 20px;
                font-weight: 400;
                line-height: 25px;
                letter-spacing: 0em;
                text-align: left;
            }

            .dev-env-header {
                margin-top: 58px;
                margin-bottom: 24px;
            }

            .dev-env-container {
                border: 1px dashed var(--primary-500);
                border-radius: 15px;
                padding-top: 20px;
                padding-left: 20px;
            }

            @keyframes cursorAnimate {
                from {
                    opacity: 0;
                }
        
                to {
                    opacity: 1;
                }
            }

        </style>
        
        
        <div>
            <h1>
                Skills
            </h1>
            <div class="cursor"></div>
        </div>
        
        <div class="content">
            <div class="animate">
                <h4>Advanced</h4>
                <app-paper class="full-height">
                    <ul>
                        ${this.skillsToListItems(skills.advanced)}
                    </ul>
                </app-paper>
            </div>
            
            <div class="animate">
                <h4>Intermediate</h4>
                <app-paper class="full-height">
                    <ul>
                        ${this.skillsToListItems(skills.intermediate)}
                    </ul>
                </app-paper>
            </div>
            
            <div class="animate">
                <h4>Beginner</h4>
                <app-paper>
                    <ul>
                        ${this.skillsToListItems(skills.beginner)}
                    </ul>
                </app-paper>

                <h4 class="dev-env-header">Development Environment</h4>
                <div class="dev-env-container">
                    <ul>
                        ${this.skillsToListItems(skills.devEnvironment)}
                    </ul>
                </div>
            </div>
        </div>
    `;
    }

}

customElements.define('skills-section', SkillsSection);
