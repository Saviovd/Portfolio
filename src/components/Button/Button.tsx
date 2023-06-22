import { ButtonStyle } from './buttonStyles';

interface IButtonProps {
   url: string;
   title: string;
   className?: string;
   bgColor?: string;
   _blank: boolean;
   download?: boolean
}

const Button = ({ url, title, className, bgColor, _blank, download }: IButtonProps) => {
   return (
      <>
         <ButtonStyle
            href={url}
            style={{ backgroundColor: `${bgColor}` }}
            target={_blank ? '_blank' : ''}
            className={`${className}`}
            download={download}
         >
            {title}
         </ButtonStyle>
      </>
   );
};

export default Button;
