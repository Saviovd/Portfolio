import { FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa'
import { HomeStyle } from './styles'
import Typewriter from 'typewriter-effect'

export const HomePage = () => {
    return (<>
        <HomeStyle id='Home'>
            <div className="apresentation">
                <Typewriter
                    
                    onInit={(typewriter) => {
                        typewriter.typeString("Olá, me chamo Sávio Almeida, <br />")
                        .start()
                        .pauseFor(100)
                        .typeString("Bem-vindo(a) ao meu portfólio de dev Front-")
                        .pauseFor(100)
                        .deleteChars(6)
                        .typeString("Full-stack! .<br /><br />")
                        .pauseFor(100)
                        .typeString("Bora desenvolver coisas incríveis juntos!")
                    }}
                />
            </div>
            <div className="social_media">
                <a className='anchor_icon' target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/saviovd"><FaLinkedinIn className="icons_home"/></a>
                <a className='anchor_icon' target="_blank" rel="noopener noreferrer" href="https://github.com/Saviovd"><FaGithub className="icons_home"/></a>
                <a className='anchor_icon' target="_blank" rel="noopener noreferrer" href="https://instagram.com/saviovd"><FaInstagram className="icons_home"/></a>
            </div>
        </HomeStyle> 
    </>)
}
