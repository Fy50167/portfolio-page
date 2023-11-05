import LOGO from '../assets/KD_Logo.png';

export default function Navigation() {
    return (
        <>
            <div className = 'navbar d-flex px-4 z-3 justify-content-between'>
                <div className = 'd-flex w-50 align-items-center justify-content-start'>
                    <img className = 'logo' src = {LOGO} alt = 'logo' />
                    <a href = '/'><h1 className = 'gold stylized'>FRANCIS YANG</h1></a>
                </div>
                
                <div className = 'd-flex flex-grow-1 justify-content-end px-5'>
                    <a href = '/about' className = 'gold nav-link stylized'>About</a>
                    <a href = '/work' className = 'gold nav-link stylized'>Work</a>
                    <a href = '/contact' className = 'gold nav-link stylized'>Contact</a>
                </div>
            </div>
        </>
    )
}