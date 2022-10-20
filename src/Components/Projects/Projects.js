import './Projects.css'
import './Responsive.css'
import ProjectSingle from './Project-single/Project-single';
import { useRef } from 'react';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';


const Projects = () => {

    const carousel = useRef(null);

    const handleLeftClick = (event) => {
        event.preventDefault();
        console.log(carousel.current.offsetWidth)
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }

    const handleRightClick = (event) => {
        event.preventDefault();
        console.log(carousel.current.offsetWidth)
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    }

    return (<section className="projects" id="Projetos">
            <h2 className="title-section">Projetos</h2>
                <div className='content'>
                    <div className='container'>
                        <div className='carousel' ref={carousel}>
                            <ProjectSingle
                                url={'https://github.com/Saviovd/Huddle_landing_page'}                              
                                img={require('./Project-single/img-projects/huddle.png')}
                                about="Huddle landingpage"
                                about_description="Exercicio do site Front-End Mentor, desenvolvido com HTML/CSS"
                            />
                            <ProjectSingle
                                url={'https://github.com/Saviovd/NFT-front-end-mentor'}
                                img={require('./Project-single/img-projects/NFT-Front-end_mentor.png')}
                                about="NFT Card"
                                about_description="Exercicio do site Front-End Mentor, desenvolvido com HTML/CSS"
                            />
                            <ProjectSingle
                                url={'https://github.com/Saviovd/Marvel-Avengers_mapadevweek'}                                  
                                img={require('./Project-single/img-projects/Marvel.png')}
                                about="Select your Player"
                                about_description="Desenvolvido no Evento mapaDevWeek com HTML/CSS e JavaScript"
                            />
                            <ProjectSingle
                                url={'https://github.com/Saviovd/Organo_React'}             
                                img={require('./Project-single/img-projects/organo.png')}
                                about="Organo"
                                about_description="Desenvolvido no curso de React da plataforma Alura"
                            />
                            <ProjectSingle     
                                url={'https://github.com/Saviovd/SimplePokedex'}                     
                                img={require('./Project-single/img-projects/pokemon_pokedex.png')}
                                about="Pokedex"
                                about_description="Desenvolvido com HTML/CSS e JavaScript consumindo a Api PokéAPI"
                            />
                            <ProjectSingle
                                url={'https://github.com/Saviovd/StarBucks_Landingpage'}                            
                                img={require('./Project-single/img-projects/StarBucks.png')}
                                about="StarBucks Landingpage"
                                about_description="Meu primeiro projeto, desenvolvido com HTML/CSS no curso de Front-End da Danki.Code"
                            />
                            <ProjectSingle
                                url={'https://github.com/Saviovd/stranger_things'}
                                img={require('./Project-single/img-projects/Stranger_things.png')}
                                about="Stranger Things Home"
                                about_description="Desenvolvido com HTML/CSS, baseado em uma publicação vista no Linkedin "
                            />
                            <ProjectSingle
                            url={'https://github.com/Saviovd/Carrinho-de-compras'}
                            img={require('./Project-single/img-projects/supermercado.png')}
                                about="Sistema de compras"
                                about_description="App desenvolvido com JavaSCript, cadastra e calcula valor de produtos"
                            />
                        </div>
                        <div className='buttons'>
                            <button className='Left' onClick={handleLeftClick} ><FaChevronCircleLeft /></button>
                            <button className='Right' onClick={handleRightClick} ><FaChevronCircleRight /></button>
                        </div>
                    </div>
                </div>
            </section>)
}

export default Projects;
