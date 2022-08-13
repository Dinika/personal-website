import { TemplateRenderer } from "../utils/TemplateRenderer.js";


/**
 * Animates wrapped child elements as the user scrolls to the position where they become visible.
 * The wrapped children that should animate must have a class of `animate`.
 * 
 */
class ScrollAnimator extends TemplateRenderer {
    observer = new IntersectionObserver(observedEntries => {
        observedEntries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
            }
        });
    });

    dynamicDurationObserver = new IntersectionObserver(observedEntries => {
        observedEntries.forEach((entry, index) => {
            if (entry.isIntersecting && !entry.target.classList.contains('done')) {
                const animation = entry.target.animate({
                    opacity: [0, 1],
                }, {
                    duration: 200,
                    iterations: 1,
                    delay: 250 * index
                });

                animation.onfinish = () => entry.target.style.opacity = 1;
                entry.target.classList.add('done');
            }
        });
    });

    connectedCallback() {
        super.connectedCallback();

        if (this.classList.contains('horizontal')) {
            const dynamics = this.querySelectorAll('.horizontal-animate');
            dynamics.forEach(animatable => {
                this.dynamicDurationObserver.observe(animatable);
            });
        }

        const animatables = this.querySelectorAll('.animate');
        animatables.forEach(animatable => {
            this.observer.observe(animatable);
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
