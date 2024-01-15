import { TemplateRenderer } from '../utils/TemplateRenderer.js';
import '../components/app-paper.js';
import '../components/scroll-animator.js';
import * as skills from '../data/skills.js';

class SkillsSection extends TemplateRenderer {

    skillsToListItems = (skillItems) => skillItems.map(s => `<li>${s}</li>`).join('');

    get template() {
        return `
        <style>
            :host {
                margin: 5rem 3.5rem 0 3.5rem;
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

            .horizontal-animate {
                opacity: 0;
            }

            @keyframes cursorAnimate {
                from {
                    opacity: 0;
                }
        
                to {
                    opacity: 1;
                }
            }

            @media (width <= 900px) {
                :host {
                    margin: 3rem 0 0 0; 
                }

                h1 {
                    font-size: 3rem;
                    margin-bottom: 0;
                }

                .cursor {
                    height: 2.5rem;
                }

                .content {
                    flex-direction: column;
                }

                h4 {
                    font-weight: 500;
                    margin-top: 1.875rem;
                    margin-bottom: 1.35rem;
                    margin-left: 1rem;
                }

                li {
                    font-size: 1rem;
                }

                app-paper {
                    padding-top: 1.25rem;
                    padding-bottom: 1.25rem;
                    padding-left: 1.125rem;
                    width: 16rem;
                }

                app-paper.full-height {
                    min-height: unset;
                }
            }

        </style>
        
        
        <div>
            <h1>
                Skills
            </h1>
            <div class="cursor"></div>
        </div>
        
        <scroll-animator class="horizontal">
            <div class="content">
                <div class="animate horizontal-animate">
                    <h4>Advanced</h4>
                    <app-paper class="full-height">
                        <ul>
                            ${this.skillsToListItems(skills.advanced)}
                        </ul>
                    </app-paper>
                </div>
                
                <div class="animate horizontal-animate">
                    <h4>Intermediate</h4>
                    <app-paper class="full-height">
                        <ul>
                            ${this.skillsToListItems(skills.intermediate)}
                        </ul>
                    </app-paper>
                </div>
                
                <div class="animate horizontal-animate">
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
        </scroll-animator>

        `;
    }

}

customElements.define('skills-section', SkillsSection);
