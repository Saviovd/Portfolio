import React, { useState, useEffect, useRef, FC } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { Arrow, Option, Options, SelectContainer, Selector } from './styles';
import { AnimatePresence } from 'framer-motion';

interface SelectOption {
   label: string;
   value: string | number;
}

interface CustomSelectProps {
   name: string;
   value: string | number | null;
   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
   options: SelectOption[];
   placeholder: string;
   error?: boolean;
   className?: string;
}

const CustomSelect: FC<CustomSelectProps> = ({
   name,
   value,
   onChange,
   options,
   placeholder,
   error = false,
   className,
}) => {
   const [isOpen, setIsOpen] = useState(false);
   const selectRef = useRef<HTMLDivElement>(null);

   const toggleDropdown = () => setIsOpen(!isOpen);

   const handleOptionClick = (optionValue: string | number) => {
      const event = {
         target: {
            name,
            value: optionValue,
         },
      } as React.ChangeEvent<HTMLInputElement>;

      onChange(event);
      setIsOpen(false);
   };

   const handleClickOutside = (event: MouseEvent) => {
      if (
         selectRef.current &&
         !selectRef.current.contains(event.target as Node)
      ) {
         setIsOpen(false);
      }
   };

   useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
         document.removeEventListener('mousedown', handleClickOutside);
      };
   }, []);

   return (
      <SelectContainer ref={selectRef} className={className}>
         <Selector
            className={error ? 'error' : ''}
            onClick={toggleDropdown}
            isOpen={isOpen}
         >
            {value
               ? options.find((option) => option.value === value)?.label ||
                 placeholder
               : placeholder}
            <Arrow isOpen={isOpen} className={`arrow`}>
               <FaAngleDown />
            </Arrow>
         </Selector>
         <AnimatePresence>
            {isOpen && (
               <Options
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
               >
                  {options.map((option) => (
                     <Option
                        key={option.value}
                        onClick={() => handleOptionClick(option.value)}
                     >
                        {option.label}
                     </Option>
                  ))}
               </Options>
            )}
         </AnimatePresence>
      </SelectContainer>
   );
};

export default CustomSelect;
