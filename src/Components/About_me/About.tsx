import './About.scss'
import Title from '../Title/Title'

const About = () => {

    return (
        <section className="about" id="Sobre Mim">
            <Title title='Sobre Mim' />
            <div className="about_container">
                    <img src="assets/savio_photograph.png  " alt="Fotografia de Sávio" className="photograph" />
                    <div className="about_text">
                        <p className='about_text-paragraph'>Muito Prazer!
                            <br/> Sou um desenvolvedor full stack com 2 anos de experiência em ferramentas como React, JavaScript e Python. 
                            Tenho habilidades sólidas em desenvolvimento front-end e back-end, incluindo o uso de bibliotecas 
                            populares e frameworks. Sou comprometido com a qualidade do código e estou sempre disposto a aprender novas tecnologias.
                        </p>
                        {/* <span className='about_text-span'>🔱Faciam quodlibet quod necesse est🔱</span> */}
                    </div>
            </div>
        </section>
    )
}

export default About;
