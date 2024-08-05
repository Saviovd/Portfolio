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
   return (
      <ButtonLinkStyle
         href={url as string}
         target={_blank ? '_blank' : ''}
         download={download ? true : undefined}
         className={className}
      >
         {icon}
         {content}
      </ButtonLinkStyle>
   );
};

export default ButtonLink;
