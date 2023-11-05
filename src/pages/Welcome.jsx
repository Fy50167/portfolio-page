import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";

export default function Welcome() {

    const setWelcome = useOutletContext();

    useEffect(() => {
        setWelcome(false);
      });

    return (
        <>
            <div className = "wrapper">
                <div className="animation-wrapper">
                    <div className="particle particle-1"></div>
                    <div className="particle particle-2"></div>
                    <div className="particle particle-3"></div>
                    <div className="particle particle-4"></div>
                </div>

                <div className = 'w-100 h-100 d-flex flex-column align-items-center justify-content-center z-1 position-relative'>               
                    <div className = 'fade-down delay-1 animated w-100'>
                        <h2 className = 'gold mb-4 fs-4'>You're visiting the site of:</h2>
                        <h1 className = 'gold mb-4 stylized large-text'>FRANCIS YANG</h1>
                        <a href = '/about' className = 'enter btn'>Enter</a>
                    </div>
                </div>
            </div>
        </>
    )
}