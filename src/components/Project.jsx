
export default function Project(props) {
    const {name, techstack, deploy, url, background, description} = props;

    const renderLink = () => {
        if (deploy) {
            return (
                <a target = '_blank' className = 'gold' href = {deploy}>Click me to go to the app!</a>
            )
        }
    }

    return (
        <>
            <div className = 'work-border d-flex flex-column flex-md-row w-100 py-2 px-4 justify-content-center align-items-center'>
                <a target = 'blank' href = {url} style = {{ backgroundImage: `url(${background})`}} className = "project z-1"  >
                    <div className = 'project-text-container'>
                        <h3 className = 'project-text'>Project: {name}</h3>
                        <h3 className = 'project-text'>Techstack: {techstack}</h3>
                    </div>
                </a>
                
                <div className = 'project-description z-0'>
                    {renderLink()}
                    <p>{description}</p>
                </div>
            </div>
        </>
    )
}