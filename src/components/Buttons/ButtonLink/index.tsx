import { IButtonProps } from '@/types/button';
import { ButtonLinkStyle } from './styles';
import React from 'react';

const ButtonLink = ({
   url,
   content,
   icon,
   className,
   _blank,
   download,
}: IButtonProps) => {
   const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.stopPropagation();
   };

   return (
      <ButtonLinkStyle
         href={url as string}
         target={_blank ? '_blank' : ''}
         download={download ? true : undefined}
         className={className}
         onClick={handleClick}
      >
         {icon}
         {content}
      </ButtonLinkStyle>
   );
};

export default ButtonLink;
