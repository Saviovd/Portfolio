import styled from 'styled-components';

interface IButtonProps {
   url: string;
   title: string;
   className?: string;
   bgColor?: string;
   _blank: boolean;
}

const ButtonStyle = styled.a`
   align-self: center;
   justify-self: center;

   display: block;
   position: relative;
   background: none;
   border: none;
   outline: none;
   cursor: pointer;
   padding: 1rem 3rem;
   font-size: 1.5rem;
   letter-spacing: 0.3rem;
   text-align: center;
   text-transform: uppercase;
   border: 1px solid rgb(var(--first-primary-color));
   transition: all 0.2s ease;
   margin: 0 3rem 0 0;
   white-space: nowrap;

   &:before,
   &:after {
      content: '☠ GET OUT! ☠';
      position: absolute;
      top: 0;
      left: 0;
      padding: 8px 0;
      width: 100%;
      -webkit-clip: rect(0px, 0px, 0px, 0px);
      clip: rect(0px, 0px, 0px, 0px);
      background: rgb(var(--first-primary-color));
      color: #fff;
   }

   &:before {
      left: -3px;
      top: -2px;
      text-shadow: 2px 0 rgb(var(--first-primary-color));
      box-shadow: 2px 0 rgb(var(--first-primary-color));
   }

   &:after {
      left: 2px;
      bottom: -2px;
      text-shadow: -1px 0 rgb(var(--first-primary-color));
      box-shadow: -1px 0 rgb(var(--first-primary-color));
   }

   &:hover {
      background: rgba(var(--second-primary-color), 0.3);
      color: rgb(var(--first-primary-color));
   }

   &:hover:before {
      animation: glitch-button 1.5s forwards linear alternate-reverse;
   }

   &:hover:after {
      animation: glitch-button 2s forwards linear alternate;
   }

   @keyframes glitch-button {
      0% {
         clip: rect(-3px, 600px, 0px, 0px);
      }
      5.88235% {
         clip: rect(0px, 600px, 0px, 0px);
      }
      11.76471% {
         clip: rect(-3px, 600px, 0px, 0px);
      }
      17.64706% {
         clip: rect(-3px, 600px, 0px, 0px);
      }
      23.52941% {
         clip: rect(100px, 600px, 100px, 0px);
      }
      29.41176% {
         clip: rect(0px, 600px, 600px, 0px);
      }
      35.29412% {
         clip: rect(100px, 600px, 0px, 0px);
      }
      41.17647% {
         clip: rect(0px, 600px, 600px, 0px);
      }
      47.05882% {
         clip: rect(100px, 600px, 0px, 0px);
      }
      52.94118% {
         clip: rect(-3px, 600px, 0px, 0px);
      }
      58.82353% {
         clip: rect(100px, 450px, 100px, 0px);
      }
      64.70588% {
         clip: rect(0px, 450px, 0px, 0px);
      }
      70.58824% {
         clip: rect(100px, 450px, 100px, 0px);
      }
      76.47059% {
         clip: rect(0px, 450px, 0px, 0px);
      }
      82.35294% {
         clip: rect(0px, 450px, 0px, 0px);
      }
      88.23529% {
         clip: rect(0px, 450px, 0px, 0px);
      }
      94.11765% {
         clip: rect(0px, 450px, 0px, 0px);
      }
      100% {
         clip: rect(0px, 450px, 0px, 0px);
      }
   }

   @media screen {
      @media (max-width: 1600px) {
         padding: 1rem 2rem;
         font-size: 1.4rem;
      }
   }
`;

const Button = ({ url, title, className, bgColor, _blank }: IButtonProps) => {
   return (
      <>
         <ButtonStyle
            href={url}
            style={{ backgroundColor: `${bgColor}` }}
            target={_blank ? '_blank' : ''}
            className={`${className}`}
         >
            {title}
         </ButtonStyle>
      </>
   );
};

export default Button;
