
export default function Project(props) {
    const {position, name, techstack, url, background} = props;


    return (
        <>
            <a target = 'blank' href = {url} style = {{ backgroundImage: `url(${background})`}} className = "project"  key = {position}>
                <div className = 'project-text-container'>
                    <h3 className = 'project-text'>Project: {name}</h3>
                    <h3 className = 'project-text'>Techstack: {techstack}</h3>
                </div>
            </a>
        </>
    )
}