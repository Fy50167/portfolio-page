import projects from '../utils/projects';



export default function Work() {
    document.title = 'Francis Yang - Work';

    return (
        <>
            <div className = 'wrapper'>
                <div className="animation-wrapper">
                    <div className="particle particle-1"></div>
                    <div className="particle particle-2"></div>
                    <div className="particle particle-3"></div>
                    <div className="particle particle-4"></div>
                </div>

                <div className = 'w-100 h-100 pad-y d-flex flex-wrap align-items-end justify-content-center'>

                    {projects.map((project) => (
                        <a target = 'blank' href = {project.url} className = 'project' key = {projects.indexOf(project)} style = {{ backgroundImage: `url(${project.background})` }}>
                            <div className = 'project-text-container'>
                                <h3 className = 'project-text'>{project.name}</h3>
                                <h3 className = 'project-text'>{project.techstack}</h3>
                            </div>
                        </a>
                    ))}      
                </div>
            </div>
        </>
    )
}