import Title from '../Title/Title'
import { AboutStyle } from './styles'

export const About = () => {

    return (<>
        <AboutStyle id='Sobre Mim'>
            <Title title='Sobre Mim' />
            <div className="about_container">
                <img src="./assets/savio_photograph.png  " alt="Fotografia de Sávio" className="photograph" />
                <p className='about_text'>
                Eu sou um desenvolvedor altamente qualificado com mais de 2 anos de experiência em ReactJS, 
                tenho habilidades em tecnologias voltadas para o front-end, back-end e mobile, como NextJS, 
                Flutter, Express e MongoDB. Meu objetivo é criar aplicativos e interfaces performáticos, 
                inovadores e de alta qualidade, sempre atualizado em relação às novas tecnologias e tendências
                de mercado. No momento estou estudando a implementação de IA nas aplicações que desenvolvo para
                torná-las mais avançadas e personalizadas às necessidades dos usuários.
                </p>
            </div>
        </AboutStyle>
    </>)
}
