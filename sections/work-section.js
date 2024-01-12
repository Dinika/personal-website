import { TemplateRenderer } from '../utils/TemplateRenderer.js';
import * as yearDetailsComponent from '../components/projects-by-year.js';
import { projects } from '../data/projects.js';
import { toComponentArgs } from '../utils/methods.js';
import '../components/scroll-animator.js';

class WorkSection extends TemplateRenderer {
    lastKnownScrollPosition = 0;
    lastScrollTop = 0;
    ticking = false;
    yAxisLength = 0;
    selfHeight = 0;

    connectedCallback() {
        super.connectedCallback();
        this.#scaleYAxisToGraphHeight();

        document.addEventListener("scroll", this.#throttledScrollListener.bind(this));
    }

    #throttledScrollListener() {
        this.lastKnownScrollPosition = window.scrollY;

        if (!this.ticking) {
            window.requestAnimationFrame(() => {
                this.#drawYAxisOnScroll(this.lastKnownScrollPosition);
                this.ticking = false;
            });

            this.ticking = true;
        }
    }

    /**
     * Scales the svg to the same height as this element, then makes it invisible by setting a mask.
     */
    #scaleYAxisToGraphHeight() {
        this.selfHeight = this.getBoundingClientRect().height;
        const yAxisContainer = this.shadowRoot.querySelector('svg');

        yAxisContainer.setAttribute('height', '' + this.selfHeight);
        yAxisContainer.setAttribute('viewBox', '0 0 1 ' + this.selfHeight);

        const yAxis = this.shadowRoot.querySelector('#thePath');
        this.yAxisLength = yAxis.getTotalLength();

        const mask = this.shadowRoot.querySelector('#mask');
        console.log('Length', this.yAxisLength);
        mask.style.strokeDasharray = this.yAxisLength;
        mask.style.strokeDashoffset = this.yAxisLength;
    }

    #drawYAxisOnScroll(scrollPos) {
        // If this element ("work-section") is no longer visible, don't do anything.
        if (scrollPos >= this.selfHeight) {
            return;
        }

        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const isUpwardScroll = currentScrollTop < this.lastScrollTop;

        // Don't "undraw" (i.e. make invisible) the yAxis when user scrolls in upward direction
        if (isUpwardScroll) {
            return;
        }

        const mask = this.shadowRoot.querySelector('#mask');
        const dashoffset =
            (this.yAxisLength - scrollPos * this.yAxisLength / (this.selfHeight));
        console.log('Dash offset', dashoffset)
        mask.style.strokeDashoffset = '' + dashoffset;

        this.lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    }

    projectsByYear = Object.values(projects).map((yearDetails) => (
        `<projects-by-year 
            ${yearDetailsComponent.yearDetailsAttrName}="${toComponentArgs(yearDetails)}">
        </projects-by-year>
        `
    )).join('');

    get template() {
        return `
        <style>
            :host {
                margin-top: 100px;
                display: block;
                margin-left: 40px;
            }

            .container {
                display: flex;
            }

            .content {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
                margin: 0px;
                flex: 1;
            }

            use{fill:none;}
            line{stroke-width:3px;}
            #mask{stroke:white}

            @media (width <= 900px) {
                :host {
                    margin-top: 2.5rem;
                    margin-left: 0;
                }
                .container {
                    width: max-content;
                }
            }
        </style>
        
        <div class="container">
            
            <svg width="1">
                <defs>
                    <line id="thePath" x1="0.5" y1="0.5" x2="0.499982" y2="100%" />
                    <mask id="mask1">
                        <use id="mask" xlink:href="#thePath" />
                    </mask>

                </defs>
                <use xlink:href="#thePath" stroke-dasharray="3 3" stroke="var(--primary-500)"  mask="url(#mask1)" id="use-mask" /> 
            </svg>

            <div class="content">
                ${this.projectsByYear}
            </div>
        </div>
    `;
    }

}

customElements.define('work-section', WorkSection);
