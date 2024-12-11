import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Title from '../Title';
import PaginationControls from '../PaginationControls';
import GraduationCard from '../GraduationCard';
import CourseCard from '../CourseCard';
import { CertificationsStyle } from './styles';
import { Course, Graduation } from '@/types/personaldata';
import i18next from 'i18next';
import { Locale } from '@/types/types';
import { Icon } from '../Icon';

interface ICertificationsProps {
   graduations: Graduation[];
   courses: Course[];
}

const Certifications = ({ graduations, courses }: ICertificationsProps) => {
   const locale = i18next.language as Locale;
   const [currentPage, setCurrentPage] = useState(1);
   const itemsPerPage = 6;

   const totalPages = Math.ceil(courses.length / itemsPerPage);

   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const getPaginatedItems = (items: any[], currentPage: number) => {
      const startIndex = (currentPage - 1) * itemsPerPage;
      return items.slice(startIndex, startIndex + itemsPerPage);
   };

   const handleNextPage = () =>
      setCurrentPage((prev) => Math.min(prev + 1, totalPages));
   const handlePreviousPage = () =>
      setCurrentPage((prev) => Math.max(prev - 1, 1));

   const categories = [
      {
         label: { pt: 'Graduação', en: 'Graduation', es: 'Graduación' },
         value: 'graduation',
         icon: 'LuGraduationCap'
      },
      {
         label: { pt: 'Cursos', en: 'Courses', es: 'Cursos' },
         value: 'courses',
         icon: 'TbCertificate'
      },
   ];

   return (
      <CertificationsStyle>
         {categories.map((category) => (
            <>
               <Title
                  text={category.label[locale]}
                  key={category.value}
                  className='sub-title'
                  icon={<Icon nameIcon={category.icon} propsIcon={{size: 30}} />}
               />
               <div className='list-box'>
                  <AnimatePresence mode='wait'>
                     {category.value === 'graduation' && (
                        <motion.ul
                           className='list'
                           initial={{ opacity: 0 }}
                           animate={{ opacity: 1 }}
                           exit={{ opacity: 0 }}
                           transition={{ duration: 0.5 }}
                        >
                           {graduations.map((graduation, i) => (
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
                           ))}
                        </motion.ul>
                     )}
                     {category.value === 'courses' && (
                        <>
                           <motion.ul
                              className='list courses'
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
                           <PaginationControls
                              currentPage={currentPage}
                              totalPages={totalPages}
                              onNextPage={handleNextPage}
                              onPreviousPage={handlePreviousPage}
                           />
                        </>
                     )}
                  </AnimatePresence>
               </div>
            </>
         ))}
      </CertificationsStyle>
   );
};

export default Certifications;
