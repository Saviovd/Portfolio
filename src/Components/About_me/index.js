import './About.css'
import './Responsive.css'
import Icons from '../Icons/';
import Box from '../EduBox/'
import Certificate from '../Certificates/Index';
import { FaClock } from 'react-icons/fa';

const About = () => {

    return (<div>
        <section className="about" id="Sobre Mim">
            <h2 className="title-section">Sobre Mim</h2>
            <div className="about-content">
                <div className='foto_about'>
                    <div className='foto'>
                        <img src="IMG/savio_photograph.png  " alt="Fotografia de Sávio" className="fotografy" />
                    </div>
                    <div className="about-text">
                        <p className='text-about'>Olá, me chamo Sávio, tenho 20 anos e sou estudante de ADS. Sou fascinado tecnologia desde criança,
                        quando me apaixonei por vídeo games e em algum momento tive curiosidade de saber como eles eram feitos. E assim fui sabendo
                        aos poucos oque era desenvolvimento de software, foi um caminho longo e desde então, a cada dia tento aprender um pouco mais, sempre me 
                        mantendo atualizado. O mundo está em constante mudança, e eu não quero ficar para trás.
                        </p>
                        <span className='text-about'>🔱Faciam quodlibet quod necesse est🔱</span>
                    </div>
                </div>
                <div className='icons_about'>
                    <h4>Algumas das ferramentas que possuo conhecimento</h4>
                    <Icons />
                </div>
                <div className='formacao' >
                    <h3>Formação</h3>
                    <div className='courses'>
                        <div className='graduate_idioms'>
                            <div className='graduate'>
                                <h4 className='title_course'>Graduação</h4>
                                <Box
                                    type="Tecnólogo"
                                    course='Análise e desenvolvimento de sistemas'
                                    instituition='Universidade Anhembi Morumbi'
                                    period= 'Jun/2021 - Dez/2023'
                                />
                            </div>
                            <div className='idioms'>
                                <h4 className='title_course'>Idiomas</h4>
                                <Box 
                                    type='Inglês'
                                    course='Intermediate Course in English'
                                    instituition='Aslan Idiomas'
                                    period='Jun/2017 - Jun/2020'
                                    hours='360h'
                                    clock={<FaClock />}
                                />
                            </div>
                        </div>
                        <div className='certificates'>
                        <h4 className='title_course'>Cursos</h4>
                            <div className='certificates_box' >
                                <Certificate 
                                    type='Front-End'
                                    course='WebMaster Front-End Completo'
                                    instituition='Danki.Code'
                                    hours='81h'
                                    clock={<FaClock />}
                                />
                                <Certificate 
                                    type='Front-End'
                                    course='WebMaster Front-End Completo 2.0'
                                    instituition='Danki.Code'
                                    hours='10h'
                                    clock={<FaClock />}
                                />
                                <Certificate 
                                    type='JavaScript'
                                    course='JavaScript Completo'
                                    instituition='Danki.Code'
                                    hours='14h'
                                    clock={<FaClock />}
                                />
                                <Certificate 
                                    type='JavaScript'
                                    course='Dominando Funções em JavaScript'
                                    instituition='Digital Innovation One'
                                    hours='1h'
                                    clock={<FaClock />}
                                />
                                <Certificate 
                                    type='Lógica'
                                    course='Lógica de Programação Essencial'
                                    instituition='Digital Innovation One'
                                    hours='4h'
                                    clock={<FaClock />}
                                />
                                <Certificate 
                                    type='ReactJs'
                                    course='Trabalhando com Componentes em React'
                                    instituition='Digital Innovation One'
                                    hours='2h'
                                    clock={<FaClock />}
                                />
                                <Certificate 
                                    type='JavaScript'
                                    course='JavaScript: tipos, variáveis e funções'
                                    instituition='Alura'
                                    hours='12h'
                                    clock={<FaClock />}
                                />
                                <Certificate 
                                    type='POO'
                                    course='JavaScript: programando a Orientação a Objetos'
                                    instituition='Alura'
                                    hours='10h'
                                    clock={<FaClock />}
                                />
                                <Certificate 
                                    type=''
                                    course=''
                                    instituition=''
                                    hours=''
                                    clock={<FaClock />}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>)
}

export default About;