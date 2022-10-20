import './Project-single.css' 
import './Responsive.css'


const Project_single = (props) => {

    const url = document.querySelector('.about-project')

    return (
        <div className="projects-itens">
            <img className="project-preview" src={props.img}/>

            <div className='info'>
                    <h3 className='about-project'>
                        <a   href={`${props.url}`} target="_blank" rel="noopener noreferrer">
                            {props.about}
                        </a>
                    </h3>
                <p className="about-project_description">{props.about_description}</p>
            </div>
        </div>
    )
}

export default Project_single;