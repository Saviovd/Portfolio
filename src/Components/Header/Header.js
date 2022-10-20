import './Header.css';
import './Responsive.css';
import Nav from '../Navigation/';

    
const Header = () => {
    return(<div>
        <header id='Home' className="header">
            <div className='header_content'>
                <h1 className="logo"><img className="logotipo" src="IMG/savio_logo.png" alt="Logo Sávio" /></h1>
                <Nav />
            </div>
        </header>
    </div>)
}

export default Header;