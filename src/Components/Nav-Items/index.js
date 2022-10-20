import './Nav-item.css'

const NavItem = (props) => {
    return (<div>
        <li className="navigation-item" style={props.style}><a className="menu-button" href={"#" + props.item}>{props.item}</a></li>
</div>)
}

export default NavItem;