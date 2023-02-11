import './Navigation.scss'
import NavItem from "./NavItem/NavItem";


const Nav = () => {


    return (<div className='header_nav'>
        <nav className="navigation">
            <ul className="navigation_list">
                <NavItem itemName="Home" />
                <NavItem itemName="Sobre Mim" />
                <NavItem itemName="Projetos"/>
                <NavItem 
                    itemName="Contatos"
                    style={{borderBottomWidth: 0}}
                />
            </ul>
        </nav>
        </div>)
}

export default Nav;