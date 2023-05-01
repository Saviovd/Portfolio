// import './Navigation.scss'
import NavItem from "./NavItem/NavItem";
import { NavigationStyle } from "./styles";


const Nav = () => {


    return (<>
        <NavigationStyle>
            <nav className="navigation">
                <ul className="navigation_list">
                    <NavItem itemName="Home" />
                    <NavItem itemName="Sobre Mim" />
                    <NavItem itemName="Projetos"/>
                    <NavItem itemName="Meu curriculum"
                        style={{textDecoration: 'underline'}}
                        url="Full Stack cv.pdf"
                    />
                </ul>
            </nav>
        </NavigationStyle>
        </>)
}

export default Nav;