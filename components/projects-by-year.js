import { TemplateRenderer } from "../utils/TemplateRenderer.js";
import './project-thumbnail.js';
import './scroll-animator.js';

export const yearDetailsAttrName = 'yeardetails';

class ProjectsByYear extends TemplateRenderer {

    static get observedAttributes() {
        return [yearDetailsAttrName];
    }

    connectedCallback() {
        super.connectedCallback();
        const width = Math.min(window.screen.width, window.innerWidth);
        const isMobileDevice = width < 1000;
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

    toProjectThumbnails = (projects, location) => projects
        .map(p => `
            <project-thumbnail class="horizontal-animate" project="${encodeURIComponent(JSON.stringify({ ...p, location }))}"></project-thumbnail>
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

                .personal-projects .headers h3 {
                    margin-bottom: 0;
                }

                .personal-projects .thumbnails {
                    justify-content: flex-end;
                }

                .thumbnails {
                    flex-wrap: wrap;
                }

                .subheader {
                    display: flex;
                    margin-top: 4px;
                    align-items: center;
                    font-size: 16px;
                }

                .subheader img {
                    width: 16px;
                    height: 16px;
                    margin-top: -6px;
                }

                .designation {
                    margin: 0 4px 0 0;
                    font-weight: 700;
                    font-size: 16px;

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

                .location {
                    display: flex;
                    align-items: center;
                    margin-left: 4px;
                }

                a {
                    font-family: Quicksand;
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 20px;
                    letter-spacing: 0em;
                    text-align: left;
                    text-decoration: none;
                    color: var(--primary-500);
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

                @media (width <= 900px) {
                    .project-details {
                        width: 80vw; 
                    }

                    .horizontal-media-scroller {
                        display: flex;
                        flex-wrap: nowrap;
                        overflow-x: auto;
                        height: 100%;
                        margin-bottom: 20px;
                        width: 100%;
                        scrollbar-width: none;
                    }

                    .horizontal-media-scroller::-webkit-scrollbar {
                        display: none;
                    }

                    project-thumbnail {
                        flex: 0 0 auto;
                    }

                    .personal-projects {
                        align-items: flex-start;
                    }
    
                    .personal-projects .headers {
                        align-items: flex-start;
                    }
    
                    .personal-projects .thumbnails {
                        justify-content: flex-start;
                    }

                    h3 {
                        font-size: 18px;
                    }

                    .subheader {
                        flex-direction: column;
                        align-items: flex-start;
                    }

                    .designation {
                        font-size: 1rem;
                        font-weight: 400;
                        padding-bottom: 0.25rem;
                    }

                    .subheader a {
                        font-size: 1rem;
                        font-weight: 400;
                        padding-bottom: 0.25rem;
                    }

                    .location {
                        margin-left: 2px;
                        align-items: baseline;
                    }

                    .subheader {
                        margin-top: 0;
                    }
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

                                <div class="subheader">
                                    <h5 class="designation">${this.yearDetails.work.designation}</h5>
                                    <div class="location">
                                        <img src="https://dinika.github.io/personal-website/assets/map-marker.svg" />
                                        <a href="${this.yearDetails.work.location.link}">${this.yearDetails.work.location.label}</a>
                                    </div>
                                </div>
                            </div>

                            <div class="thumbnails horizontal-media-scroller">
                                ${this.toProjectThumbnails(this.yearDetails.work.projects, this.yearDetails.work.location)}
                            </div>
                        </div>

                        <div class="project-details personal-projects animate">                            
                            <div class="headers">
                                <h3>Personal Projects</h3>

                                <div class="subheader">
                                    <div class="location">
                                        <img src="https://dinika.github.io/personal-website/assets/map-marker.svg" />
                                        <a href="${this.yearDetails.personal.location.link}">${this.yearDetails.personal.location.label}</a>
                                    </div>
                                </div>
                            </div>

                            <div class="thumbnails horizontal-media-scroller">
                                ${this.toProjectThumbnails(this.yearDetails.personal.projects, this.yearDetails.personal.location)}
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
