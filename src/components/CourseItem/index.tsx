import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { Course } from './styles';

interface Stack {
   name: string;
}

interface Course {
   course: string;
   logo: string;
   category: string;
   hours: string;
   institution: string;
   stacks: Stack[];
}

interface CourseItemProps {
   course: Course;
   index: number;
}

const CourseItem: React.FC<CourseItemProps> = ({ course, index }) => {
   const { t } = useTranslation();
   const { logo, category, hours, institution } = course;

   return (
      <Course>
         <Image
            src={logo}
            key={index}
            alt={`${institution} logo`}
            width={60}
            height={60}
            className='logo'
            quality={100}
         />
         <div className='about-course'>
            <p className='course-name'>
               {t(`AboutMe.courses.${index}.course`)}
            </p>
            <p className='institution'>{institution}</p>
            <p className='hours'>{hours}</p>
         </div>
         <span className='category'>{category}</span>
      </Course>
   );
};

export default CourseItem;
