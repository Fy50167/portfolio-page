import projects from '../utils/projects';
import Project from '../components/Project';


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
                        <Project 
                            position = {projects.indexOf(project)}
                            name = {project.name}
                            techstack = {project.techstack}
                            url = {project.url}
                            background = {project.background}
                        />
                    ))}      
                </div>
            </div>
        </>
    )
}