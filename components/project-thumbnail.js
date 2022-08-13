import { TemplateRenderer } from '../utils/TemplateRenderer.js';
import './app-paper.js';

class ProjectThumbnail extends TemplateRenderer {

    static get observedAttributes() {
        return ['project'];
    }

    attributeChangedCallback(attrName, newValue) {
        if (attrName === 'project') {
            this.project = JSON.parse(decodeURIComponent(newValue));
            this.removeAttribute('project');
        }
        this.render();
    }

    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('openDialog', { detail: this.project?.description, bubbles: true, composed: true }))
        })
    }

    get template() {
        return `
            <style>
                .parent {
                    position: relative;
                    text-align: left;
                    display: flex;
                    flex-direction: column;
                    width: 224px;
                    height: 224px;
                    justify-content: center;
                    padding-left: 24px;
                    box-sizing: border-box;
                    margin: 30px 30px;
                    cursor: pointer;
                    z-index: 0;
                }

                .parent::before {
                    content: "";
                    background: var(--primary-300);
                    position: absolute;
                    width: 194px;
                    height: 194px;
                    z-index: -1;
                    left: 0px;
                    border-radius: 12px;
                    transition: transform 0.2s ease-in-out;
                    box-shadow: 18px 18px 18px rgba(177, 196, 199, 0.25);
                    border-radius: 12px;
                }

                .parent:hover::before {
                    transform: scale(1.4);
                }

                h3, p {
                    font-family: 'Quicksand', sans-serif;
                    letter-spacing: 0em;
                    margin: 0;
                    transition: transform 0.2s ease-in-out;
                }

                .parent:hover h3, .parent:hover p {
                    transform: translate(-30px, -70px);
                }

                h3 {
                    font-size: 20px;
                    font-weight: 700;
                    line-height: 25px;
                    margin-bottom: 2px;
                    max-width: 150px;
                }
            
                p {
                    font-size: 18px;
                    font-weight: 500;
                    line-height: 23px;
                }


                .description {
                    position: absolute;
                    font-family: 'Quicksand', sans-serif;
                    font-size: 14px;
                    font-weight: 500;
                    line-height: 18px;
                    letter-spacing: 0em;
                    text-align: left;
                    color: var(--primary-700);
                    margin-top: 30px;
                }
            
                .more {
                    position: absolute;
                    font-family: 'Quicksand', sans-serif;
                    font-size: 14px;
                    font-weight: 700;
                    line-height: 18px;
                    letter-spacing: 0em;
                    text-align: left;
                    color: var(--primary-500);                    
                }

                .hidden-until-hover {
                    transform: scale(0);
                    transition: all 0.2s ease-in-out;
                }

                .parent:hover .hidden-until-hover {
                    transform: scale(1);
                    opacity: 1;
                }

                .parent:hover .description {
                    transform: translateX(-30px);
                }

                .parent:hover .more {
                    transform: translate(140px, 100px);
                }

            </style>
            ${this.project
                ? `
                    <div class="parent">    
                        <h3>${this.project.name}</h3>
                        <p>${this.project.role}</p>
                        <p class="description hidden-until-hover">${this.project.description}</p>
                        <a class="more hidden-until-hover">More</a>
                    </div>
                    `
                : ''
            }
        `
    }

}

customElements.define('project-thumbnail', ProjectThumbnail);