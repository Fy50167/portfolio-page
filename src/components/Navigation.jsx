
export default function Navigation() {
    return (
        <>           
            <a id = 'about' href = '/about' className = {location.pathname === '/about' ? 'gold nav-link stylized active': 'gold nav-link stylized'}>About</a>
            <a id = 'work' href = '/work' className = {location.pathname === '/work' ? 'gold nav-link stylized active': 'gold nav-link stylized'}>Work</a>
            <a id = 'resume' href = '/resume' className = {location.pathname === '/resume' ? 'gold nav-link stylized active': 'gold nav-link stylized'}>Resume</a>
            <a id = 'contact' href = '/contact' className = {location.pathname === '/contact' ? 'gold nav-link stylized active': 'gold nav-link stylized'}>Contact</a>
        </>
    )
}