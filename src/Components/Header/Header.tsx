import './Header.scss'
import Nav from './Navigation/Navigation';
import { useState } from 'react';
import NavItem from './Navigation/NavItem/NavItem';

    
const Header = () => {

    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    const reset = () => {
        setMenuClass("menu hidden")
        setIsMenuClicked(false)
        setBurgerClass("burger-bar unclicked")
    }

    return(
        <header className="header">
            <div className='header_container'>
                <img className="logo" src="assets/savio_logo.svg " alt="Logo Sávio" />
                <Nav />
                <div onClick={reset} className={` ${menu_class}`}>
                    <NavItem itemName="Home" />
                    <NavItem itemName="Sobre Mim" />
                    <NavItem itemName="Projetos"/>
                    <NavItem 
                        itemName="Contatos"
                        style={{borderBottomWidth: 0}}
                    />
                </div>
                {/* <Nav /> */}
                <div onClick={updateMenu} className='hamburger_wrapper'>
                    <div className='hamburger_icon'>
                        <span className={burger_class}></span>
                        <span className={burger_class}></span>
                        <span className={burger_class}></span>
                    </div>
                </div>
            </div>
        </header>)
}

export default Header;