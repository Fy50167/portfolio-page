import ME from '../assets/Me.jpg';
import DOWN from '../assets/Down.png';
import UP from '../assets/Up.png';
import LOGO from '../assets/KD_Logo.png';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

export default function About() {
    document.title = 'Francis Yang - About'

    const [isScroll, setIsScroll] = useState(true);

    const changeScroll = () => {
        setIsScroll(!isScroll);
    }

    return (
        <>
            <div className = 'wrapper'>
                <div className="animation-wrapper">
                    <div className="particle particle-1"></div>
                    <div className="particle particle-2"></div>
                    <div className="particle particle-3"></div>
                    <div className="particle particle-4"></div>
                </div>

                <CSSTransition
                    in = {isScroll}
                    timeout = {1000}
                    classNames = 'scroll-upper'
                >
                    <div className = 'page-margin w-100 h-100 d-flex align-items-center justify-content-evenly z-2 position-relative'>    
                        <button onClick = {() => changeScroll() } className = 'fade-down delay-2 animated position-absolute btn btn-arrow z-1'><img src = {DOWN} className = 'arrow' /></button>
                        <div className = 'fade-down delay-1 animated w-25'>
                            <h2 className = 'stylized'>About Me</h2>
                            <p>Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
                                Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
                                mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
                                lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
                                imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
                                in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
                            </p>    
                        </div>           
                        <img className = 'portrait fade-down delay-3 animated' src = {ME} alt = 'self-image' />
                        <div className = 'fade-down delay-5 animated w-25'>
                            <h2 className = 'stylized'>Other stuff</h2>
                            <p>Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
                                Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
                                mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
                                lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
                                imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
                                in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
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
                        <button onClick = {() => changeScroll() } className = 'position-absolute btn btn-arrow arrow-up'><img src = {UP} className = 'arrow' /></button>
                        <div className = 'w-25'>
                            <h2 className = 'stylized'>About Me</h2>
                            <p>Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
                                Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
                                mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
                                lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
                                imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
                                in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
                            </p>    
                        </div>                  
                        <img className = 'portrait' src = {LOGO} alt = 'large-logo' />
                        <div className = 'w-25'>
                            <h2 className = 'stylized'>About Me</h2>
                            <p>Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
                                Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
                                mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
                                lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
                                imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
                                in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
                            </p>    
                        </div>            
                    </div>
                </CSSTransition>

            </div>
        </>
    )
}