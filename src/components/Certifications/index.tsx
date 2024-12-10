import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Title from '../Title';
import PaginationControls from '../PaginationControls';
import GraduationCard from '../GraduationCard';
import CourseCard from '../CourseCard';
import { CertificationsStyle, Menu } from './styles';
import { SlGraduation } from 'react-icons/sl';
import { Course, Graduation } from '@/types/personaldata';
import i18next from 'i18next';
import { Locale } from '@/types/types';
import { useTranslation } from 'react-i18next';

type ListType = 'graduation' | 'courses';

interface ICertificationsProps {
   graduations: Graduation[];
   courses: Course[];
}

const Certifications = ({ graduations, courses }: ICertificationsProps) => {
   const { t } = useTranslation();
   const locale = i18next.language as Locale;
   const [activatedList, setActivatedList] = useState<ListType>('graduation');
   const [currentPage, setCurrentPage] = useState(1);
   const itemsPerPage = 6;

   const totalPages = Math.ceil(
      (activatedList === 'graduation' ? graduations.length : courses.length) /
         itemsPerPage
   );

   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const getPaginatedItems = (items: any[], currentPage: number) => {
      const startIndex = (currentPage - 1) * itemsPerPage;
      return items.slice(startIndex, startIndex + itemsPerPage);
   };

   const handleListChange = (listType: ListType) => {
      setActivatedList(listType);
      setCurrentPage(1);
   };

   const handleNextPage = () =>
      setCurrentPage((prev) => Math.min(prev + 1, totalPages));
   const handlePreviousPage = () =>
      setCurrentPage((prev) => Math.max(prev - 1, 1));

   const categories = [
      {
         label: { pt: 'Graduação', en: 'Graduation', es: 'Graduación' },
         value: 'graduation',
      },
      {
         label: { pt: 'Cursos', en: 'Courses', es: 'Cursos' },
         value: 'courses',
      },
   ];

   return (
      <CertificationsStyle>
         <Title
            text={t('Courses.title')}
            icon={<SlGraduation className='icon' />}
            className='title'
         />

         <Menu>
            {categories.map((category) => (
               <li
                  key={category.value}
                  className={`menu-item ${
                     activatedList === category.value ? 'active' : ''
                  }`}
                  onClick={() => handleListChange(category.value as ListType)}
               >
                  {category.label[locale]}
               </li>
            ))}
         </Menu>

         <div className='list-box'>
            <AnimatePresence mode='wait'>
               {activatedList === 'graduation' && (
                  <motion.ul
                     className='list'
                     key={`graduation-${currentPage}`}
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     exit={{ opacity: 0 }}
                     transition={{ duration: 0.5 }}
                  >
                     {getPaginatedItems(graduations, currentPage).map(
                        (graduation, i) => (
                           <motion.li
                              className='graduation'
                              key={i}
                              custom={i}
                              initial='hidden'
                              animate='visible'
                              exit='exit'
                              variants={{
                                 hidden: { opacity: 0, y: 20 },
                                 visible: { opacity: 1, y: 0 },
                                 exit: { opacity: 0, y: 20 },
                              }}
                           >
                              <GraduationCard graduation={graduation} />
                           </motion.li>
                        )
                     )}
                  </motion.ul>
               )}

               {activatedList === 'courses' && (
                  <motion.ul
                     className='list'
                     key={`courses-${currentPage}`}
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     exit={{ opacity: 0 }}
                     transition={{ duration: 0.5 }}
                  >
                     {getPaginatedItems(courses, currentPage).map(
                        (course, i) => (
                           <motion.li
                              className='course'
                              key={i}
                              custom={i}
                              initial='hidden'
                              animate='visible'
                              exit='exit'
                              variants={{
                                 hidden: { opacity: 0, y: 20 },
                                 visible: { opacity: 1, y: 0 },
                                 exit: { opacity: 0, y: 20 },
                              }}
                           >
                              <CourseCard course={course} />
                           </motion.li>
                        )
                     )}
                  </motion.ul>
               )}
            </AnimatePresence>

            <PaginationControls
               currentPage={currentPage}
               totalPages={totalPages}
               onNextPage={handleNextPage}
               onPreviousPage={handlePreviousPage}
            />
         </div>
      </CertificationsStyle>
   );
};

export default Certifications;
