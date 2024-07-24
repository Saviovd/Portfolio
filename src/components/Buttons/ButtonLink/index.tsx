import { IButtonProps } from '@/types/button';
import { ButtonLinkStyle } from './buttonLink';
import React from 'react';

const ButtonLink = ({
   url,
   content,
   icon,
   className,
   bgColor,
   _blank,
   download,
   strColor,
   cursor,
   textTransform,
   border,
   fontSize
}: IButtonProps) => {

   return (
      <ButtonLinkStyle
         href={url as string}
         target={_blank ? '_blank' : ''}
         download={download ? true : undefined}
         style={{
            backgroundColor: bgColor || 'transparent',
            color: strColor || 'white',
            textTransform:
               (textTransform as React.CSSProperties['textTransform']) ||
               'none',
            border: border || '1px solid transparent',
            cursor: cursor || '',
            fontSize: `${fontSize}rem` || '',
         }}
         className={className}
      >
         {icon}
         {content}
      </ButtonLinkStyle>
   );
};

export default ButtonLink;
