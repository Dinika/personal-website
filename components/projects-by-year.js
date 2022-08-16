import { TemplateRenderer } from "../utils/TemplateRenderer.js";
import './project-thumbnail.js';
import './scroll-animator.js';

export const yearDetailsAttrName = 'yeardetails';

class ProjectsByYear extends TemplateRenderer {

    static get observedAttributes() {
        return [yearDetailsAttrName];
    }

    attributeChangedCallback(attrName, newValue) {
        if (attrName === yearDetailsAttrName) {
            this.yearDetails = JSON.parse(decodeURIComponent(newValue));
            this.removeAttribute(yearDetailsAttrName);
            if (newValue != null) {
                this.render();
            }
        }
    }

    toProjectThumbnails = (projects) => projects
        .map(p => `
            <project-thumbnail class="horizontal-animate" project="${encodeURIComponent(JSON.stringify(p))}"></project-thumbnail>
        `)
        .join('');

    get template() {
        return `
            <style>
                :host {
                    width: 100%;
                }

                .container, .project-details, .thumbnails {
                    display: flex;
                }

                .y-axis-label {
                    display: flex;
                    align-items: center;
                    margin-left: -50px;
                }

                .graph-elements {
                    margin-left: 20px;
                    flex: 1;
                }

                .y-axis-label h4 {
                    writing-mode: vertical-rl;
                    transform: rotate(180deg);
                    text-align: center;
                    margin: 0 10px;

                    font-family: Montserrat, sans-serif ;
                    font-size: 18px;
                    font-weight: 300;
                    line-height: 22px;
                    letter-spacing: 0em;
                }

                .y-axis-label .marker {
                    width: 16px;
                    height: 16px;
                    background: black;
                    border-radius: 50%;
                    margin-right: -8px;
                    z-index: 1;
                }

                .headers { 
                    margin-left: 24px;
                }

                h3 {
                    font-family: 'Quicksand', sans-serif;
                    font-size: 24px;
                    font-weight: 700;
                    line-height: 30px;
                    letter-spacing: 0em;
                    text-align: left;
                    margin: 12px 0;
                }

                .project-details {
                    flex-direction: column;
                }

                .personal-projects {
                    align-items: flex-end;
                }

                .personal-projects .headers {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                    margin-right: 64px;
                }

                .personal-projects .thumbnails {
                    justify-content: flex-end;
                }

                .thumbnails {
                    flex-wrap: wrap;
                }

                .location {
                    display: flex;
                    align-items: flex-start;
                }

                a {
                    font-family: Quicksand;
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 20px;
                    letter-spacing: 0em;
                    text-align: left;
                    text-decoration: none;
                    color: var(--text-700);
                    display: inline-block;
                    position: relative;
                    margin-left: 4px;
                    padding-bottom: 8px;
                }

                a:after {    
                    background: none repeat scroll 0 0 transparent;
                    bottom: 0;
                    content: "";
                    display: block;
                    height: 2px;
                    left: 50%;
                    position: absolute;
                    background: var(--primary-500);
                    transition: width 0.3s ease 0s, left 0.3s ease 0s;
                    width: 0;
                  }

                  a:hover:after { 
                    width: 100%; 
                    left: 0; 
                  } 

                  project-thumbnail {
                    opacity: 0;
                  }
            </style>

            ${this.yearDetails ? `
                <div class="container">

                    <div class="y-axis-label">
                        <h4>${this.yearDetails.label}</h4>
                        <div class="marker"></div>
                    </div>                    

                    <scroll-animator class="graph-elements horizontal">
                        <div class="project-details animate">
                            <div class="headers">
                                <h3>Work Projects</h3>

                                <div class="location">
                                    <img src="https://dinika.github.io/personal-website/assets/map-marker.svg" />
                                    <a href="${this.yearDetails.work.link}">${this.yearDetails.work.location}</a>
                                </div>
                            </div>

                            <div class="thumbnails">
                                ${this.toProjectThumbnails(this.yearDetails.work.projects)}
                            </div>
                        </div>

                        <div class="project-details personal-projects animate">                            
                            <div class="headers">
                                <h3>Personal Projects</h3>

                                <div class="location">
                                    <img src="https://dinika.github.io/personal-website/assets/map-marker.svg" />
                                    <a>${this.yearDetails.personal.location}</a>
                                </div>
                            </div>

                            <div class="thumbnails">
                                ${this.toProjectThumbnails(this.yearDetails.personal.projects)}
                            </div>
                        </div>
                    </scroll-animator>
                </div>            
                ` : ''
            }
        `;
    }
}

customElements.define('projects-by-year', ProjectsByYear);
