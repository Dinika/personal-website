import { TemplateRenderer } from '../utils/TemplateRenderer.js';
import '../components/app-paper.js';

class AboutSection extends TemplateRenderer {

    get template() {
        return `
        <style>

            :host {
                margin: 92px 60px 0 80px;
                display: block;
            }

            h1 {
                font-family: 'Montserrat', sans-serif;
                font-size: 64px;
                font-weight: 800;
            }

            p {
                font-size: 18px;
                font-weight: 500;
                line-height: 30px;
                letter-spacing: 0em;
                text-align: left;
            }

            .highlight {
                color: var(--primary-500);
                font-weight: 700;
            }

            .header {
                display: flex;
                align-items: center;
            }

            h4 {
                font-family: 'Quicksand', sans-serif;
                font-size: 20px;
                font-weight: 700;
                line-height: 25px;
                letter-spacing: 0em;
                color: var(--primary-500);
                margin-left: 12px;
            }

            p {
                max-width: 80%;
            }

        </style>
        
        
        <h1>
            About me.          
        </h1>

        <div class="header">
            <img src="../assets/not-a-robot.svg" />
            <h4>Who am I?</h4>
        </div>
        <p>
            I am a software engineer, specialized in full-stack web development. Currently, I am working at CERN with a group of really smart engineers,
            managers, and physicists to develop services, applications, and APIs that are used for managing and smoothly opertating the LHC.
            It is truly a humbling experience.
        </p>
        
        <div class="header">
            <img src="../assets/rainbows-and-sunshine.svg" />
            <h4>What kind of work do I enjoy?</h4>
        </div>
        <p>
            I like spending time on improving the quality of engineering systems. I am always eager to improve and develop my team’s ability to provide reliable, high available software by using priciples of <span class="highlight">automated testing</span> and <span class="highlight">CI/CD</span>.

            I like working in autonomous teams. I find <span class="highlight">pair-programming</span> and code-reviews fun and extremely helpful.

            Finally, I like it when I have the opportunity to get <span class="highlight">involved in all stacks of feature development</span> - from user-requirements gathering, to architecture design, backend / frontend development, code-deployment, and finally assessing user-reactions. Not only is it a gratifying experience to be in touch with our users needs, I belive, it also helps me deliver better engineering solutions.
        </p>
        
        <div class="header">
            <img src="../assets/cutie-patootie.svg" />
            <h4>What do I like to do in my free time?</h4>
        </div>
        <p>
            I love playing with my dog - Sudo, dancing to hip-hop songs, playing FitXR on the oculus, listening to songs, walking around lakes and in parks, taking naps, eating noodles, learning about VR, and pair-programming with my friends on open-sourced projects.
        </p>
        
    `;
    }

}

customElements.define('about-section', AboutSection);
