import './Footer.css';
import './Responsive.css';
import { FaLinkedinIn, FaGithub, FaInstagram, FaWhatsapp, FaEnvelope} from 'react-icons/fa';

const Footer = () => {
    return (<footer>
        <div className='container-footer'>
                <div className='contact-footer'>
                    <p className='email'><FaEnvelope /> savio.pinheiroal@gmail.com</p>
                    <a className='whatsapp' target="_blank" rel="noopener noreferrer" href='https://api.whatsapp.com/send?phone=5592982827650'><FaWhatsapp />  +55 92 98282-7650</a>
                </div>
                <div className="social-media_footer">
                    <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/saviovd" className="icons-footer"><FaLinkedinIn /></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/Saviovd" className="icons-footer"><FaGithub /></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/saviovd" className="icons-footer"><FaInstagram /></a>
                </div>
        </div>
        <div className='copy'>
            <p>&copy; todos os direitos reservados <a href='https://linkedin.com/in/saviovd' className='Name_copy'>Sávio Almeida</a>.</p>
        </div>
    </footer>)
}

export default Footer;