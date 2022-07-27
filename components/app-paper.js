import { TemplateRenderer } from "../utils/TemplateRenderer.js";

class AppPaper extends TemplateRenderer {
    get template() {
        return `
            <style>
                :host {
                    display: block;
                    box-sizing: border-box;
                    background: var(--primary-300);
                    box-shadow: 18px 18px 18px rgba(177, 196, 199, 0.25);
                    border-radius: 12px;
                }

            </style>

            <slot>/slot>
        `;
    }
}

customElements.define('app-paper', AppPaper);
