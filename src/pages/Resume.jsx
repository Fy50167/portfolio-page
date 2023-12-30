import RESUME from '../assets/Resume.pdf';

export default function Resume() {
    document.title = 'Francis Yang - Resumé';

    return (
        <>
            <div className = "wrapper">
                <div className="animation-wrapper">
                    <div className="particle particle-1"></div>
                    <div className="particle particle-2"></div>
                    <div className="particle particle-3"></div>
                    <div className="particle particle-4"></div>
                </div>

                    <div className = 'page-margin w-100 h-100 d-flex flex-column align-items-center justify-content-center z-1 position-relative'>  
                        <div className = 'fade-down delay-1 animated w-100 h-auto'>
                            <h1 className = 'stylized gold large-text mb-4'>RESUMÉ</h1>
                            <div className = 'text-start w-100 m-auto'>
                                <h2 className = 'text-center'>View my full resume <span><a className = 'gold stylized' download = 'Francis_Yang_Resume.pdf' href = {RESUME}>here!</a></span></h2>
                                <div className = 'resume m-auto fs-4'>
                                    <h2>Tech Languages</h2>
                                    <ul>
                                        <li><p>Front-end languages like: HTML, CSS, JS, and JQuery</p></li>
                                        <li><p>Back-end lanuages like: MySQL, NoSQL, GraphQL</p></li>
                                        <li><p>MERN Stack (MongoDB, Express, React, and Node)</p></li>
                                        <li><p>Liquid</p></li>
                                        <li><p>Python</p></li>
                                        <li><p>C#</p></li>
                                    </ul>
                                    <h2>Workplace Experience</h2>
                                    <ul>
                                        <li><p>Numerous long and short-term freelance web development jobs via Upwork</p></li>
                                        <li><p>Student Lead at an On-Campus restaurant during college</p></li>
                                    </ul>
                                </div>
                                
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}