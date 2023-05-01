import { ProjectStyle } from "./styles"

export interface PropsProject {
    image: string
    url: string
    title: string
    description: string
    key: number
}

const ProjectSingle = ({image, url, title, description, key}: PropsProject) => {


    return (
        <ProjectStyle key={key} className='project_url' >
            <a href={`${url}`} target="_blank" rel="noopener noreferrer" className="project">
                <img className="project_preview" src={image} alt="Preview do Projeto"/>
                <h4 className='project_name'>{title}</h4>
                <p className="project_description">{description}</p>
            </a>
        </ProjectStyle>
    )
}

export default ProjectSingle;