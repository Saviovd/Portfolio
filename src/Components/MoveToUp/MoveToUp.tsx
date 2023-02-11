import './MoveToUp.scss';
import {useState} from 'react';
import {FiChevronUp} from 'react-icons/fi';

const MoveToUp = () =>{

const [visible, setVisible] = useState(false)

const toggleVisible = () => {
const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
        setVisible(true)
    } 
    else if (scrolled <= 300){
        setVisible(false)
    }
};

const scrollToTop = () =>{
    window.scrollTo({
        top: 0, 
        behavior: 'smooth'
    });
};

window.addEventListener('scroll', toggleVisible);

return (
<div  className='circle scroll'
style={{display: visible ? 'inline' : 'none'}} 
onClick={scrollToTop}>
    <FiChevronUp className='bounce' />
</div>
);
}

export default MoveToUp;