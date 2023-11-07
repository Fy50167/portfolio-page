import GITHUB from '../assets/github.png';
import INSTAGRAM from '../assets/instagram.jpg';
import LINKEDIN from '../assets/linkedin.png';
import UPWORK from '../assets/upwork-logo.png';


export default function Socials() {

    return (
        <>
            <div className = 'position-fixed z-3 social-container d-flex flex-md-column justify-content-center align-items-center'>
                <a target = 'blank' className = 'h-auto w-auto' href = 'https://www.linkedin.com/in/francis-yang-125082222/'><img className = 'socials linkedin' src = {LINKEDIN} /></a>
                <a target = 'blank' className = 'h-auto w-auto' href = 'https://github.com/Fy50167'><img className = 'socials github' src = {GITHUB} /></a>
                <a target = 'blank' className = 'h-auto w-auto' href = 'https://www.instagram.com/francis_yayng/'><img className = 'socials instagram' src = {INSTAGRAM} /></a>
                <a target = 'blank' className = 'h-auto w-auto' href = 'https://www.upwork.com/freelancers/~019d1770b0e5419a80'><img className = 'socials upwork' src = {UPWORK} /></a>
            </div>
        </>
    )
}