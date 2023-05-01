
import './NavItem.scss'

interface PropsNavItem {
    style?: React.CSSProperties
    itemName: string
}

const NavItem = ({itemName, style}: PropsNavItem) => {
    return (
        <li className="navigation_item" style={style}><a className="menu_button" href={`#${itemName}`}>{itemName}</a></li>
)
}

export default NavItem;