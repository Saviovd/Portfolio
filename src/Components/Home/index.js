import './Home.css'
import './Responsive.css'
import { FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa'

const Home = () => {
    return (<div>
        <section className="home">
            <div className="apresentacao">
                <h2 className="nome">Sávio Almeida</h2>
                <h3 className="cargo">FullStack Developer</h3>
            </div>
            <div className="social-media">
                <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/saviovd" className="icons-home"><FaLinkedinIn /></a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/Saviovd" className="icons-home"><FaGithub /></a>
                <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/saviovd" className="icons-home"><FaInstagram /></a>
            </div>
        </section>
    </div>)
}

export default Home;