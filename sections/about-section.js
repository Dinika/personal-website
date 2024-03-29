import { TemplateRenderer } from '../utils/TemplateRenderer.js';

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

            a {
                font-family: 'Quicksand', sans-serif;
                font-weight: 700;
                line-height: 25px;
                letter-spacing: 0em;
                text-align: center;                
                color: var(--primary-500);
                display: inline-block;
                position: relative;
                text-decoration: none;
                cursor: pointer;
                padding-bottom: 4px;
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

            @media (width <= 900px) {
                :host {
                    margin: 4rem 0 0 0; 
                }
                
                h1 {
                    font-size: 3rem;
                    margin-bottom: 1rem;
                }

                h4 {
                    margin-top: 1rem;
                    margin-bottom: 1rem;
                }

                p {
                    margin-top: 0;
                    max-width: unset;
                    font-size: 1rem;
                }
            }

        </style>
        
        
        <h1>
            About me.        
        </h1>

        <scroll-animator>
            <div class="animate">
                <div class="header">
                    <img src="https://dinika.github.io/personal-website/assets/not-a-robot.svg" title="Not a robot." />
                    <h4>Who am I?</h4>
                </div>
                <p>
                    I am a software engineer, specialized in full-stack web development. Currently, I am working at BBP, EPFL with a group of really smart engineers,
                    managers, and neuroscientists to develop services, applications, and APIs that are used for digital reconstruction and simulation of brain.
                    It is truly a humbling experience.
                </p>
            </div>

            <div class="animate">
                <div class="header">
                    <img src="https://dinika.github.io/personal-website/assets/rainbows-and-sunshine.svg" title="Why git 'blame' though?" />
                    <h4>What kind of work do I enjoy?</h4>
                </div>
                <p>
                    I like spending time on improving the quality of engineering systems. I am always eager to improve and develop my team’s ability to provide reliable, high available software by using priciples of <span class="highlight">automated testing</span> and <span class="highlight">CI/CD</span>.
                </p>

                <p>
                    I like working in autonomous teams. I find <span class="highlight">pair-programming</span> and code-reviews fun and extremely helpful.
                </p>

                <p>
                    Finally, I like it when I have the opportunity to get <span class="highlight">involved in all stacks of feature development</span> - from user-requirements gathering, to architecture design, backend / frontend development, code-deployment, and finally assessing user-reactions. Not only is it a gratifying experience to be in touch with our users needs, I believe, it also helps me deliver better engineering solutions.
                </p>    
            </div>

            <div class="animate">
                <div class="header">
                    <img src="https://dinika.github.io/personal-website/assets/cutie-patootie.svg" title="Wagwan?" />
                    <h4>What do I like to do in my free time?</h4>
                </div>
                <p>
                    I love playing with my dog - Sudo, <a href="https://www.instagram.com/grey_llama_drama/">sculpting with clay, making art</a>, drawing botanical illustrations, dancing, playing FitXR on the oculus, walking around lakes and in parks, eating noodles, learning about VR, and pair-programming with my friends on open-sourced projects.
                </p>
            </div>

        </scroll-animator>
        
    `;
    }

}

customElements.define('about-section', AboutSection);
