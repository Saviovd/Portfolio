import './About.scss'
import Title from '../Title/Title'

const About = () => {

    return (
        <section className="about" id="Sobre Mim">
            <Title title='Sobre Mim' />
            <div className="about_container">
                    <img src="assets/savio_photograph.png  " alt="Fotografia de Sávio" className="photograph" />
                    <div className="about_text">
                        <p className='about_text-paragraph'>Muito prazer!
                            <br/> me chamo Sávio, tenho 21 anos e me tornei desenvolvedor a cerca de 2 anos. Com esse
                            tempo pude desenvolver habilidades sólidas em HTML, CSS, JavaScript e ReactJS. Tenho familiaridade com 
                            ferramentas de desenvolvimento, como NPM e Webpack e também possuo experiência na criação de aplicativos escaláveis 
                            e performáticos. Além disso, tenho conhecimento em outras bibliotecas e tecnologias relacionadas ao front-end,
                            como Angular e SASS.
                        </p>
                        <span className='about_text-span'>🔱Faciam quodlibet quod necesse est🔱</span>
                    </div>
            </div>
        </section>
    )
}

export default About;
