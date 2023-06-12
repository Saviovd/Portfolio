import Nav from '../Nav/Nav';
import { HeaderStyle } from './headerStyles';

const Header = () => {
   return (<>
   <HeaderStyle>
      <h1 className='logo'>logo aqui!</h1>
      <Nav />
   </HeaderStyle>
   </>)
}


export default Header;
