import projects from '../utils/projects';
import Project from '../components/Project';


export default function Work() {
    document.title = 'Francis Yang - Work';

    return (
        <>
            <div className = 'wrapper h-100'>
                <div className="animation-wrapper">
                    <div className="particle particle-1"></div>
                    <div className="particle particle-2"></div>
                    <div className="particle particle-3"></div>
                    <div className="particle particle-4"></div>
                </div>

                <div className = 'work-margin w-100 h-auto d-flex flex-column flex-wrap align-items-center justify-content-center'>

                    {projects.map((project) => (
                        <Project 
                            position = {projects.indexOf(project)}
                            name = {project.name}
                            techstack = {project.techstack}
                            deploy= {project.deploy}
                            url = {project.url}
                            background = {project.background}
                            description = {project.description}
                        />
                    ))}      
                </div>
            </div>
        </>
    )
}