import { TemplateRenderer } from '../utils/TemplateRenderer.js';

class ProjectDialog extends TemplateRenderer {
    detail = '';

    open(detail) {
        console.log('Open')
        this.detail = detail;
        this.render();
        this.shadowRoot.querySelector('dialog').showModal();
        this.addEventListener('click', (event) => {
            event.stopImmediatePropagation();
            this.shadowRoot.querySelector('dialog').close()
        });
    }

    get template() {
        return `
            <style>
                dialog {
                    min-width: 50rem;
                    border-radius: 8px;
                    min-height: 30rem;    
                }

                dialog::backdrop {
                    background: rgba(0,0,0,0.8)
                }

            </style>
            
            <dialog>${this.detail}</dialog>
        `
    }

}

customElements.define('project-dialog', ProjectDialog);
