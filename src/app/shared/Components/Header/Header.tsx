import Nav from './Navigation/Navigation';
import NavItem from './Navigation/NavItem/NavItem';
import { HeaderStyle } from './styles';
import { useState } from 'react';

    
export const Header = () => {

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
        <HeaderStyle>
            <div className='header_container'>
                <img className="logo" src="./savio_logo.svg " alt="Logo Sávio" />
                <Nav />
                <div onClick={reset} className={` ${menu_class}`}>
                    <NavItem itemName="Home" />
                    <NavItem itemName="Sobre Mim" />
                    <NavItem itemName="Projetos"/>
                    <NavItem itemName="Meu curriculum"
                        style={{textDecoration: 'underline'}}
                    />
                </div>
                <div onClick={updateMenu} className='hamburger_wrapper'>
                    <div className='hamburger_icon'>
                        <span className={burger_class}></span>
                        <span className={burger_class}></span>
                        <span className={burger_class}></span>
                    </div>
                </div>
            </div>
        </HeaderStyle>)
}
