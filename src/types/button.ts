import { MouseEventHandler } from 'react';
import { IconType } from 'react-icons';

export interface IButtonProps {
   url?: string;
   content: string;
   fontSize: number;
   cursor?: string;
   icon?: IconType | any;
   className?: string;
   bgColor?: string;
   strColor?: string;
   _blank: boolean;
   download?: boolean | undefined;
   textTransform?: string | React.CSSProperties['textTransform'];
   border?: string
   onClick?: MouseEventHandler<HTMLAnchorElement> | undefined | any;
}
