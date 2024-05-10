import { MouseEventHandler } from 'react';
import { ButtonStyle } from './buttonStyles';

interface IButtonProps {
   url?: string;
   title: string;
   className?: string;
   bgColor?: string;
   strColor?: string
   _blank: boolean;
   download?: boolean
   onClick?:  MouseEventHandler<HTMLAnchorElement> | undefined
}

const Button = ({ url, title, className, bgColor, _blank, download, strColor, onClick }: IButtonProps) => {
   return (
      <>
         <ButtonStyle
            href={url}
            style={{ backgroundColor: `${bgColor}`, color: `${strColor}` }}
            target={_blank ? '_blank' : ''}
            className={`${className}`}
            download={download}
            onClick={onClick}
         >
            {title}
         </ButtonStyle>
      </>
   );
};

export default Button;
