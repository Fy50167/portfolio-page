import ME from '../assets/Me.jpg';
import DOWN from '../assets/Down.png';
import UP from '../assets/Up.png';
import LOGO from '../assets/KD_Logo.png';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

export default function About() {
    document.title = 'Francis Yang - About';

    const [isScroll, setIsScroll] = useState(true);

    const changeScroll = () => {
        setIsScroll(!isScroll);
        const upArrow = document.querySelector('#arrow-up');
        if (!upArrow.classList.contains('display')) {
            upArrow.classList.add('display');
        }
    }

    return (
        <>
            <div className = 'wrapper fixed-back'>
                <div className="animation-wrapper">
                    <div className="particle particle-1"></div>
                    <div className="particle particle-2"></div>
                    <div className="particle particle-3"></div>
                    <div className="particle particle-4"></div>
                </div>

                <div className = 'monitor page-margin w-100 h-100 d-flex align-items-center justify-content-evenly'>
                    <CSSTransition
                        in = {isScroll}
                        timeout = {1000}
                        classNames = 'scroll-upper'
                    >
                        <div className = 'd-flex w-100 h-100 align-items-center justify-content-evenly position-relative'>    
                            <button onClick = {() => changeScroll() } className = 'fade-down delay-2 animated position-absolute btn btn-arrow z-2'><img src = {DOWN} className = 'arrow' /></button>
                            <div className = 'fade-down delay-1 animated w-25'>
                                <h2 className = 'stylized'>About Me</h2>
                                <p>Full freelance stack web developer and software engineer based in Southern California. Proficient in
                                    multiple technologies such as node, MySQL, noSQL, the MERN stack, Liquid, but with a heavy
                                    specialization in the MERN stack and all things React. Also studying other languages such as Python,
                                    C#, and Java as I apply for junior developer positions.  
                                </p>    
                            </div>           
                            <img className = 'portrait fade-down delay-3 animated' src = {ME} alt = 'self-image' />
                            <div className = 'fade-down delay-5 animated w-25'>
                                <h2 className = 'stylized'>My Background</h2>
                                <p>Graduated from the University of Southern California, San Diego, as a double major
                                    in Cognitive Neuroscience as well as Music. Entered college with these two majors
                                    with the intent to conduct research concerning the brain and the way it is impacted by sound,
                                    but I also developed an interest in Computer Science through my time at UCSD that I ultimately decided 
                                    to pursue instead. 
                                </p>    
                            </div>
                        </div>
                    </CSSTransition>

                    <CSSTransition
                        in = {!isScroll}
                        timeout = {1000}
                        classNames = 'scroll-lower'
                    >
                        <div className = 'page-margin w-100 h-100 d-flex align-items-center justify-content-evenly z-1 position-fixed lower-content'>    
                            <button onClick = {() => changeScroll() } className = 'position-absolute btn btn-arrow arrow-up' id = 'arrow-up'><img src = {UP} className = 'arrow' /></button>
                            <div className = 'w-25'>
                                <h2 className = 'stylized'>Experience</h2>
                                <p>
                                    Since I developed an interested in computer science so late (around halfway through my junior year of college), I wasn't able to take many classes concerning it if I wanted to graduate on time.
                                    Instead, I learned basic Front-End languages such as HTML, CSS, Javascript, and Liquid on my own during my senior year, and took a coding bootcamp from UC Berkeley shortly after graduation
                                    to gain some experience with the Back-End as well. Currently, I'm spending my time making projects and studying data algorithms in preparation for job interviews.
                                </p>    
                            </div>                  
                            <img className = 'portrait' src = {LOGO} alt = 'large-logo' />
                            <div className = 'w-25'>
                                <h2 className = 'stylized'>Freelance Work</h2>
                                <p>
                                    Throughout my senior year of college, I used the languages that I had learned on my own to act as a freelance web developer on Upwork for people looking to start E-Commerce businesses
                                    via the Shopify platform. While the work that I did wasn't particularly advanced, it did at the very least provide me with some real work experience (communicating with clients/collaborators, 
                                    working with deadlines, etc.) and allowed me to fund my bootcamp. You can view all of my reviews (which are all 5 stars) in my Upwork profile via my socials!
                                </p>    
                            </div>            
                        </div>
                    </CSSTransition>
                </div>

                <div className = 'mobile page-margin w-100 h-auto d-flex flex-column align-items-center position-relative justify-content-evenly z-2'>
                        <div className = 'text-div'>
                            <h2 className = 'stylized'>About Me</h2>
                            <p>Web developer and software engineer based in Southern California proficient in
                                    multiple technologies such as node, MySQL, noSQL, the MERN stack, Liquid, and Python.
                                    Although lacking in knowledge concerning other languages such as C++ and Java, I intend 
                                    to learn them once I've really mastered the languages that I'm working with right now!
                            </p>    
                        </div>           
                        <img className = 'portrait' src = {ME} alt = 'self-image' />
                        <div className = 'text-div'>
                            <h2 className = 'stylized'>My Background</h2>
                            <p>Graduated from the University of Southern California, San Diego, as a double major
                                in Cognitive Neuroscience as well as Music. Although I entered college with these two majors
                                with the intent to conduct research concerning the brain and the way it is impacted by sound,
                                I also developed an interest in Computer Science through my time at UCSD that I ultimately decided 
                                to pursue instead. 
                            </p>    
                        </div>

                        <div className = 'text-div'>
                            <h2 className = 'stylized'>Experience</h2>
                            <p>Since I developed an interested in computer science so late (around halfway through my junior year of college), I wasn't able to take many classes concerning it as a double major.
                                Instead, I learned basic Front-End languages such as HTML, CSS, Javascript, and Liquid on my own during my senior year, and took a coding bootcamp from UC Berkeley shortly after graduation
                                to gain some experience with the Back-End as well. Currently, I'm spending my time making projects and studying data algorithms in preparation for job interviews.
                            </p>    
                        </div>                  
                        <img className = 'portrait' src = {LOGO} alt = 'large-logo' />
                        <div className = 'text-div'>
                            <h2 className = 'stylized'>Freelance Work</h2>
                            <p>Throughout my senior year of college, I used the languages that I had learned on my own to act as a freelance web developer on Upwork for people looking to start E-Commerce businesses
                                via the Shopify platform. While the work that I did wasn't particularly advanced, it did at the very least provide me with some real work experience (communicating with clients/collaborators, 
                                working with deadlines, etc.) and allowed me to fund my bootcamp. You can view all of my reviews (which are all 5 stars) in my Upwork profile via my socials!
                            </p>    
                        </div>              
                </div>     
            </div>
        </>
    )
}