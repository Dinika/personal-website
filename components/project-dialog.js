import { TemplateRenderer } from '../utils/TemplateRenderer.js';

class ProjectDialog extends TemplateRenderer {
    project;

    open(project) {
        this.project = project;

        this.render();

        this.shadowRoot.querySelector('dialog').showModal();

        this.addEventListener('click', (event) => {
            event.stopImmediatePropagation();

            const dialog = this.shadowRoot.querySelector('dialog');
            const rect = dialog.getBoundingClientRect();
            const isInDialog = (rect.top <= event.clientY && event.clientY <= rect.top + rect.height
                && rect.left <= event.clientX && event.clientX <= rect.left + rect.width);

            if (!isInDialog) {
                dialog.close();
            }
        });
    }

    get template() {
        if (!this.project) {
            return ``;
        }

        return `
            <style>
                dialog {
                    min-width: 50rem;
                    max-width: 980px;
                    border-radius: 20px;
                    border: none;
                    background: var(--primary-300);
                    min-height: 30rem;
                    padding: 44px 20px 20px 68px; 
                }

                dialog::backdrop {
                    background: rgba(0,0,0,0.8)
                }

                h3 {
                    font-size: 24px;
                    font-weight: 700;
                    color: var(--primary-500);
                    margin: 0;
                }

                h5 {
                    font-size: 20px;
                    font-weight: 600;
                    line-height: 25px;
                    letter-spacing: 0em;
                    text-align: left;
                    margin: 8px 0;
                }

                p {
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 20px;
                    letter-spacing: 0em;
                    text-align: left;
                }

                ul {
                    margin: 0px;
                    margin-bottom: 28px;
                    max-width: 75%;
                }

                li {
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 20px;
                    letter-spacing: 0em;
                    text-align: left;

                }

                .subheader {
                    display: flex;
                    margin-top: 4px;
                    align-items: center;
                    font-size: 14px;
                }

                .subheader img {
                    width: 14px;
                    height: 14px;
                    margin-top: 2px;
                }

                .designation {
                    margin: 0 4px 0 0;
                    font-weight: 700;
                }

                .location {
                    display: flex;
                    align-items: center;
                }

                a {
                    font-family: Quicksand;
                    font-weight: 400;
                    line-height: 20px;
                    letter-spacing: 0em;
                    text-align: left;
                    text-decoration: none;
                    color: var(--primary-700);
                    display: inline-block;
                    position: relative;
                    margin-left: 4px;
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

                .badge {
                    min-width: 108px;
                    height: 36px;
                    background: var(--primary-700);
                    border-radius: 20px;
                    color: white;
                    display: inline-block;
                    text-align: center;
                    font-size: 16px;
                    line-height: 36px;
                    margin: 4px 10px;
                    font-weight: 500;
                }

                @media (width <= 900px) {
                    dialog {
                        min-width: unset;
                        max-width: unset;
                        width: 80%;
                        max-height: 70%;
                        padding-left: 1.5rem;
                        padding-top: 2rem;
                    }

                    .subheader {
                        flex-direction: column;
                        align-items: flex-start;
                        margin-top: 0.5rem;
                    }
                    
                    p {
                        font-size: 0.875rem;
                        margin-top: 1.25rem;
                        margin-bottom: 1.25rem;
                    }

                    h5 {
                        margin-bottom: 1.5rem;
                    }

                    ul {
                        max-width: unset;
                        padding-inline-start: inherit;
                    }

                    li {
                        font-size: 0.875rem;
                    }

                    a {
                        display: unset;
                        margin-left: unset;
                        color: var(--primary-500);
                    }

                    .badge {
                        font-size: 0.75rem;
                        min-width: 5rem;
                        height: 1.5rem;
                        line-height: 1.5rem;
                        margin: 0.25rem 0.5rem;
                    }
                }
            </style>
            
            <dialog>
                <h3>${this.project.name}</h3>

                <div class="subheader">
                    <h4 class="designation">${this.project.role}</h4>
                    <div class="location">
                        <img src="https://dinika.github.io/personal-website/assets/map-marker.svg" />
                        <a href="${this.project.location.link}">${this.project.location.label}</a>
                    </div>
                </div>

                <p>${this.project.description}</p>

                ${this.project.details ? `
                    <h5>Key roles and responsibilities</h5>

                    <ul>
                        ${this.project.details.key_roles.map(r => `<li>${r}</li>`).join('')}
                    </ul>

                    ${this.project.details.resource_links.length > 0 ? `
                            <h5>Links</h5>
                            <ul>
                                ${this.project.details.resource_links.map(l => `<li><a href="${l.link}">${l.label}</a></li>`).join('')}
                            </ul>   
                        `
                    : ``
                }

                    <h5>Key Technologies</h5>
                    <div>
                        ${this.project.details.technologies.map(t => `<span class="badge">${t}</span>`).join('')}
                    </div>
                    `
                : `  
                    <h5>Project Details</h5>
                    <div class="coming-soon">Coming Soon</div>
                ` }


            </dialog>
        `
    }

}

customElements.define('project-dialog', ProjectDialog);
