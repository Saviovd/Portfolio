import './Projects.scss';
import './SwiperContainer.scss'
import Title from '../Title/Title';
import './ProjectSingle/ProjectSingle'
import ProjectSingle, { PropsProject } from './ProjectSingle/ProjectSingle';
import projects from './ProjectSingle/projects.json'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Projects = () => {
    return (
    <section className="projects" id="Projetos">
        <Title title='Projetos'/>
        <div className='projects_container'>
            {projects.map ((project: PropsProject) => (
                
                <ProjectSingle
                    image={project.image}
                    url= {project.url}
                    title= {project.title}
                    description={project.description}
                    key= {project.key}
                />

            ))}
        </div>

        <div className='swiper_container'>
            <Swiper
                className='swiper'
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                loop={true}
            >
            {projects.map ((project: PropsProject) => (    
                <SwiperSlide className='swiper_box'>
                    <ProjectSingle
                        image={project.image}
                        url= {project.url}
                        title= {project.title}
                        description={project.description}
                        key= {project.key}
                    />
                    </SwiperSlide>
                ))}
                ...
            </Swiper>
        </div>
    </section>)
}

export default Projects;
