import React, { ChangeEvent } from 'react';
import { InputStyle } from './styles';

interface InputProps {
   label: string;
   type?: string;
   name: string;
   value: string | number;
   onChange: (e: ChangeEvent<HTMLInputElement>) => void;
   placeholder?: string;
   required?: boolean;
   className?: string;
   error?: string;
}

const Input: React.FC<InputProps> = ({
   label,
   type = 'text',
   name,
   value,
   onChange,
   placeholder = '',
   required = false,
   className,
   error,
}) => {
   return (
      <InputStyle className={className}>
         {label}
         <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            className={error && 'input-error'}
         />
         {error && <span className='error'>{error}</span>}
      </InputStyle>
   );
};

export default Input;
