import { TemplateRenderer } from "../utils/TemplateRenderer.js";
import './project-thumbnail.js';

// TODO: Replace with proper data
const projects = [
    {
        name: 'WRAP',
        role: 'Developer',
        description: 'A figma like app that allows users to design dashboards that can subscribe to several devices in LHC',
        link: ''
    },
    {
        name: 'HelpAlarm',
        role: 'Lead Developer',
        description: 'Application used at the CCC to observe and manage alarms around CERN',
        link: ''
    },
    {
        name: 'ACW',
        role: 'Developer',
        description: 'Java and JS framework used to power all GUI applications in our section',
        link: ''
    },
    {
        name: 'TI Logbook',
        role: 'Tech Lead',
        description: 'Applications used by operators to manage and log events, work-orders, calls around the LHC',
        link: ''
    },
    {
        name: 'LHC Checklist',
        role: 'Developer',
        description: 'Used to test machine before the start of the LHC runs.',
        link: ''
    },
    {
        name: 'ASM',
        role: 'Platform Engineer',
        description: 'Used to schedule different operations and runs on the LHC',
        link: ''
    }
];

class ProjectsByYear extends TemplateRenderer {

    workThumbnails = projects
        .map(p => `
            <project-thumbnail project="${encodeURIComponent(JSON.stringify(p))}"></project-thumbnail>
        `)
        .join('');

    get template() {
        return `
            <style>
                .container, .y-axis, .project-details, .thumbnails {
                    display: flex;
                }

                .y-axis-label {
                    display: flex;
                    align-items: center;
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

                .project-details {
                    flex-direction: column;
                }

                .thumbnails {
                    flex-wrap: wrap;
                }

            </style>

            <div class="container">

                <div class="y-axis">
                    <div class="y-axis-label">
                        <h4>Oct 2020 - Now</h4>
                        <div class="marker"></div>
                    </div>                    
                    
                    <svg width="1" height="100%" viewBox="0 0 1 100%" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0.5" y1="0.5" x2="0.499934" y2="1499.5" stroke="#106C4B" stroke-linecap="square" stroke-dasharray="3 3"/>
                    </svg>
                </div>

                <div class="project-details">
                    <div class="headers">
                        <h3>Work Projects</h3>
                        <h5>CERN, Switzerland & France</h5>
                    <div>

                    <div class="thumbnails">
                        ${this.workThumbnails}
                    </div>
                </div>

            </div>
        `;
    }
}

customElements.define('projects-by-year', ProjectsByYear);
