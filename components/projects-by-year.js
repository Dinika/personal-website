import { TemplateRenderer } from "../utils/TemplateRenderer.js";
import './project-thumbnail.js';

export const yearDetailsAttrName = 'yeardetails';

class ProjectsByYear extends TemplateRenderer {

    static get observedAttributes() {
        return [yearDetailsAttrName];
    }

    attributeChangedCallback(attrName, newValue) {
        if (attrName === yearDetailsAttrName) {
            this.yearDetails = JSON.parse(decodeURIComponent(newValue));
            this.removeAttribute(yearDetailsAttrName);
        }

        this.render();

        if (newValue != null) {
            this.#scaleYAxisToGraphHeight();
        }
    }

    connectedCallback() {
        super.connectedCallback();
        // this.scrollYAxis()
    }

    #scaleYAxisToGraphHeight() {
        const height = this.getBoundingClientRect().height;
        console.log('height', height)
        const yAxis = this.shadowRoot.querySelector('svg');
        // yAxis.setAttribute('viewBox', '0 0 0.2 ' + height);
        yAxis.setAttribute('height', '' + height);
        console.log(yAxis)
        this.render()

    }

    scrollYAxis() {
        const thePath = this.shadowRoot.querySelector('#thePath');
        const mask1 = this.shadowRoot.querySelector('#mask1');
        var l = thePath.getTotalLength();
        var dasharray = l;
        mask1.style.strokeDasharray = dasharray;
        var dashoffset = l;
        mask1.style.strokeDashoffset = dashoffset;
        this.addEventListener("scroll", function () {

            dashoffset =
                l - this.scrollTop * l / (this.scrollHeight - this.clientHeight);

            mask1.style.strokeDashoffset = dashoffset;
        });
    }

    toProjectThumbnails = (projects) => projects
        .map(p => `
            <project-thumbnail project="${encodeURIComponent(JSON.stringify(p))}"></project-thumbnail>
        `)
        .join('');

    get template() {
        return `
            <style>
                :host {
                    width: 100%;
                }

                .container, .y-axis, .project-details, .thumbnails {
                    display: flex;
                }

                .y-axis-label {
                    display: flex;
                    align-items: center;
                }

                .graph-elements {
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

                .y-axis .marker {
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

                use{fill:none;}
                path{stroke-width:3px;}
                #mask{stroke:white}
            </style>

            ${this.yearDetails ? `
                <div class="container">

                    <div class="y-axis">
                        <div class="y-axis-label">
                            <h4>${this.yearDetails.label}</h4>
                            <div class="marker"></div>
                        </div> 
                                          
                        <svg id="svg" width="1">

                            <defs>
                                <path id="thePath" d="m 0.5,0.5 -1.8e-5,403" />
                    
                                <mask id="mask1">
                                    <use id="mask" xlink:href="#thePath" />
                                </mask>
                    
                            </defs>
                            <use xlink:href="#thePath" stroke-dasharray="3 3" stroke="black" mask="url(#mask1)" />
                    
                        </svg>
                    
                    </div>

                    <div class="graph-elements">
                        <div class="project-details">
                            <div class="headers">
                                <h3>Work Projects</h3>

                                <div class="location">
                                    <img src="../assets/map-marker.svg" />
                                    <a href="${this.yearDetails.work.link}">${this.yearDetails.work.location}</a>
                                </div>
                            </div>

                            <div class="thumbnails">
                                ${this.toProjectThumbnails(this.yearDetails.work.projects)}
                            </div>
                        </div>

                        <div class="project-details personal-projects">
                            <div class="headers">
                                <h3>Personal Projects</h3>

                                <div class="location">
                                    <img src="../assets/map-marker.svg" />
                                    <a>${this.yearDetails.personal.location}</a>
                                </div>
                            </div>

                            <div class="thumbnails">
                                ${this.toProjectThumbnails(this.yearDetails.personal.projects)}
                            </div>
                        </div>
                    </div>
                </div>            
                ` : ''
            }
        `;
    }
}

customElements.define('projects-by-year', ProjectsByYear);
