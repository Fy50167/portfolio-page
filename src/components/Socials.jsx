import GITHUB from '../assets/github.png';
import INSTAGRAM from '../assets/instagram.png';
import LINKEDIN from '../assets/linkedin.png';
import UPWORK from '../assets/upwork.png';


export default function Socials() {

    return (
        <>
            <div>
                <a target = 'blank' className = 'h-auto w-auto' href = 'https://www.linkedin.com/in/francis-yang-125082222/'><img className = 'socials' src = {LINKEDIN} /></a>
                <a target = 'blank' className = 'h-auto w-auto' href = 'https://github.com/Fy50167'><img className = 'socials' src = {GITHUB} /></a>
                <a target = 'blank' className = 'h-auto w-auto' href = 'https://www.instagram.com/francis_yayng/'><img className = 'socials' src = {INSTAGRAM} /></a>
                <a target = 'blank' className = 'h-auto w-auto' href = 'https://www.upwork.com/freelancers/~019d1770b0e5419a80'><img className = 'socials' src = {UPWORK} /></a>
            </div>
        </>
    )
}