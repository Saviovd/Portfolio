import data from '../../../data/data.json'
import Title from '../Title/Title';
import './ProjectSingle/ProjectSingle'
import ProjectSingle, { PropsProject } from './ProjectSingle/ProjectSingle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { ProjectsStyle } from './styles';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { SwipeProjectStyle } from './swiper';

const { ProjectList } = data

export const Projects = () => {
    return (<>
        <ProjectsStyle id="Projetos">
            <Title title='Projetos'/>
            <div className='projects_container'>
                {ProjectList.map ((project: PropsProject) => (
                    
                    <ProjectSingle
                        image={project.image}
                        url= {project.url}
                        title= {project.title}
                        description={project.description}
                        key= {project.key}
                    />
                ))}
            </div>

            <SwipeProjectStyle>
                <Swiper
                    className='swiper'
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    loop={true}
                >
                {ProjectList.map ((project: PropsProject) => (    
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
            </SwipeProjectStyle>
        </ProjectsStyle>
    </>)
} 
