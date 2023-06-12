import styled from 'styled-components';

interface ITitleProps {
   firstColor: string;
   secondColor?: string;
   firstWord: string;
   secondWord?: string
}
const TitleStyle = styled.div`
   display: inline-flex;
   text-align: center;
   .title {
      margin: 0 0 3rem 0;
      font-size: 4.5rem;

      @media screen {
         @media (max-width: 1600px) {
            font-size: 4rem;
         }
      }
   }
`

const Title = ({ firstWord, secondWord,firstColor, secondColor }: ITitleProps) => {
   return (<>
   <TitleStyle>
      <h2 className='title' style={{color: `${firstColor}`}}>{firstWord}</h2>
      <h2 className='title' style={{color: `${secondColor}`, marginLeft: '10px'}}>{secondWord}</h2>
   </TitleStyle>
   </>)
}

export default Title;
