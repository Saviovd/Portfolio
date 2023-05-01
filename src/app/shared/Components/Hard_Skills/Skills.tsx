import { Swiper, SwiperSlide } from 'swiper/react'
import data from '../../../data/data.json'
import Skill from './Skill/Skill'
import { SkillsStyle } from './styles'

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Autoplay, Navigation } from 'swiper'

const { Lenguages } = data


export const Skills = () => {
    return (<>
        <SkillsStyle>
            <h4 className="skills_title">Algumas das ferramentas que possuo conhecimento</h4>
            <div className="skill_list">
                <Swiper
                    modules={[Pagination, Navigation, Autoplay]}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: true
                    }}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    spaceBetween={0}
                    slidesPerView={1}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        860: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    className='lenguages'>
                    {Lenguages.map(lenguage => (
                        <SwiperSlide className='lenguage'>
                            <Skill
                                logo={lenguage.logo}
                                name={lenguage.name}
                                about={lenguage.about}
                                key={lenguage.key}
                            />
                        </SwiperSlide>
                    ))}
                    ...
                </Swiper>
            </div>
        </SkillsStyle>
    </>)
}
