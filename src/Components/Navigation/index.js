import './Navigation.css';
import './Responsive.css'
import NavItem from "../Nav-Items/";
import { FaBars } from "react-icons/fa";


const Nav = () => {


    function abreMenu() {
        let navMobile = document.querySelector('.navigation-mobile')
        if(navMobile.classList.contains('show')) {
            navMobile.classList.remove('show')
            navMobile.classList.add('hide')
        } else {
            navMobile.classList.remove('hide')
            navMobile.classList.add('show')
        }
    }

    return (<div>
        
        <nav className="navigation-desktop">
            <ul className="navigation-list">
                <NavItem item="Home" />
                <NavItem item="Sobre Mim" />
                <NavItem item="Projetos"/>
                <NavItem item="Contatos"/>
            </ul>
        </nav>

        <div className='Hamburger' onClick={abreMenu}><FaBars /></div>
        <nav className="navigation-mobile">
            <ul className="navigation-list">
                <NavItem item="Home" />
                <NavItem item="Sobre Mim" />
                <NavItem item="Projetos"/>
                <NavItem 
                    item="Contato"
                    style={{borderBottomWidth: 0}}
                />
            </ul>
        </nav>
        </div>)
}

export default Nav;