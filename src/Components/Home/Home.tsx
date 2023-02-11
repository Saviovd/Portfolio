import './Home.scss';
import { FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa'

const Home = () => {
    return (
        <section id='Home' className="home">
            <div className="apresentation">
                <h2 className="apresentation_name line_1">Olá, me chamo Sávio Almeida e </h2>
                <h2 className='apresentation_name line_2'>sou desenvolvedor Front-End &#128075;</h2>
            </div>
            <div className="apresentation_mobile">
                <h2 className="apresentation_name line_1">Olá, me chamo  </h2>
                <h2 className='apresentation_name line_2'>Sávio Almeida e sou </h2>
                <h2 className='apresentation_name line_3'>desenvolvedor Front-End &#128075;</h2>
            </div>
            <div className="social_media">
                <a className='anchor_icon' target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/saviovd"><FaLinkedinIn className="icons_home"/></a>
                <a className='anchor_icon' target="_blank" rel="noopener noreferrer" href="https://github.com/Saviovd"><FaGithub className="icons_home"/></a>
                <a className='anchor_icon' target="_blank" rel="noopener noreferrer" href="https://instagram.com/saviovd"><FaInstagram className="icons_home"/></a>
            </div>
        </section> )
}

export default Home;