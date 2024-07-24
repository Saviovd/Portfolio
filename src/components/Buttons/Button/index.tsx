import { IButtonProps } from '@/types/button';
import { ButtonStyle } from './buttonStyles';
import React from 'react';

const ButtonLink = ({
   content,
   icon,
   className,
   bgColor,
   strColor,
   cursor,
   textTransform,
   border,
   fontSize,
   onClick,
}: IButtonProps) => {
   return (
      <ButtonStyle
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
         onClick={onClick}
         className={className}
      >
         {icon}
         {content}
      </ButtonStyle>
   );
};

export default ButtonLink;
