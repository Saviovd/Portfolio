import { CSSProperties } from 'styled-components'
import {NavItemStyle} from './styles'

interface PropsNavItem {
    itemName: string
    style?: CSSProperties
    url?: string
}

const NavItem = ({itemName, style, url}: PropsNavItem) => {
    return (<>
        <NavItemStyle>
            <a style={style} className="menu_button" href={`${itemName}` === 'Meu curriculum' ? `./files/${url}` : `#${itemName}`}>{itemName}</a>
        </NavItemStyle>
    </>)
}

export default NavItem;