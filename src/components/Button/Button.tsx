import { ButtonStyle } from './buttonStyles';

interface IButtonProps {
   url: string;
   title: string;
   className?: string;
   bgColor?: string;
   _blank: boolean;
}

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
