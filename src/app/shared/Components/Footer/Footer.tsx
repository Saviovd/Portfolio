import { FaLinkedinIn, FaGithub, FaInstagram, FaWhatsapp} from 'react-icons/fa';
import { ImLocation } from 'react-icons/im'
import { FooterStyle } from "./styles";

export const Footer = () => {
    return (
    <FooterStyle>
        <div className='footer_container'>
                <div className="footer_contacts">
                    <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/saviovd" className="icons_footer"><FaLinkedinIn className="icon_footer"/></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/Saviovd" className="icons_footer"><FaGithub className="icon_footer"/></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/saviovd" className="icons_footer"><FaInstagram className="icon_footer"/></a>
                    <a target="_blank" rel="noopener noreferrer" href='https://api.whatsapp.com/send?phone=5541991791628' className='icons_footer' ><FaWhatsapp className='icon_footer' /></a>
                </div>
                <div className='footer_adress'>
                    <p className='adress'><ImLocation className="icon_adress" /> Curitiba, Brasil</p>
                </div>
        </div>
        <div className='copy'>
            <p className="copy_text">&copy; todos os direitos reservados <a href='https://linkedin.com/in/saviovd' className='name_copy'>Sávio Almeida</a>.</p>
        </div>
    </FooterStyle>
    )
}
