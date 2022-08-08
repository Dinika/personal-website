import { TemplateRenderer } from "../utils/TemplateRenderer.js";

class ScrollAnimator extends TemplateRenderer {
    constructor() {
        super();
        this.noShadow = false;
    }

    connectedCallback() {
        super.connectedCallback();
        const observer = new IntersectionObserver(observedEntries => {
            observedEntries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                } else {
                    entry.target.classList.remove('active');
                }
            });
        });

        const animatables = this.querySelectorAll('.animate');
        animatables.forEach(animatable => {
            observer.observe(animatable);
        });
    }

    get template() {
        return `
            <style>
                ::slotted(.animate) {
                    transition: all 1s ease-in-out;
                    transform: translate3d(0px, 30px, 0);
                    opacity: 0;
                }
                
                ::slotted(.animate.active) {
                    transform: translate3d(0px, 0, 0);
                    opacity: 1;
                }
            </style>
            
            <slot></slot>
        `;
    }
}

customElements.define('scroll-animator', ScrollAnimator);
