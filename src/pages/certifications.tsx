import Button from '@/components/Button/Button';
import Title from '@/components/Title/Title';
import { CertificationsStyle } from '@/styles/certificationsPageStyles';
import Image from 'next/image';
import data from '../data/data.json';
import Head from 'next/head';

const { courses } = data;

const Certifications = () => {
   return (
      <>
         <Head>
            <title>Sávio Almeida | Certificados</title>
         </Head>
         <CertificationsStyle>
            <div className='back'>
               <Button
                  className='button'
                  _blank={false}
                  title='Voltar'
                  url='/'
               />
            </div>
            <Title
               firstColor='rgb(var(--primary-pink))'
               firstWord='Em'
               secondWord='Andamento'
            />

            <div className='graduate_box'>
               <div className='graduate'>
                  <Image
                     className='icon'
                     src={'/assets/icons/education/graduate.svg'}
                     alt='graduate icon'
                     width={110}
                     height={110}
                  />
                  <h3 className='course'>
                     Análise e desenvolvimento de sistemas
                  </h3>
                  <h5 className='university'>Universidade Anhembi Morumbi</h5>
                  <p className='date'>06/2021 - 12/2023</p>
               </div>
               <div className='graduate'>
                  <Image
                     className='icon'
                     src={'/assets/icons/education/certificate.svg'}
                     alt='graduate icon'
                     width={110}
                     height={110}
                  />
                  <h3 className='course'>
                     CS50: Introduction to Computer Science
                  </h3>
                  <h5 className='university'>Havard University</h5>
                  <ul className='stack_list'>
                     <li className='stack'>
                        <Image
                           src={'/assets/icons/front-end/html5.svg'}
                           alt='stack'
                           width={30}
                           height={30}
                        />
                     </li>
                     <li className='stack'>
                        <Image
                           src={'/assets/icons/front-end/css3.svg'}
                           alt='stack'
                           width={30}
                           height={30}
                        />
                     </li>
                     <li className='stack'>
                        <Image
                           src={'/assets/icons/front-end/js.svg'}
                           alt='stack'
                           width={30}
                           height={30}
                        />
                     </li>
                     <li className='stack'>
                        <Image
                           src={'/assets/icons/back-end/python.svg'}
                           alt='stack'
                           width={30}
                           height={30}
                        />
                     </li>
                     <li className='stack'>
                        <Image
                           src={'/assets/icons/back-end/c.svg'}
                           alt='stack'
                           width={30}
                           height={30}
                        />
                     </li>
                  </ul>
               </div>
            </div>

            <Title firstColor='rgb(var(--primary-pink))' firstWord='Cursos' />

            <div className='courses_box'>{
               courses.map((course, i: number) => (
                  <div key={`${i}_${course.course}`} className='course'>
                     <div className='about_course'>
                        <p className='course_category'>{course.category}</p>
                        <p className='course_time'>{course.hours}</p>
                     </div>
                     <Image
                        className='icon'
                        src={course.icon}
                        alt='course icon'
                        width={90}
                        height={90}
                     />
                     <h3 className='course_name'>{course.course}</h3>
                     <h5 className='school'>{course.instituition}</h5>
                     <Button
                        _blank={true}
                        title='Certificado'
                        url={course.certificate}
                        className='button'
                     />
                  </div>
               ))
            }</div>
         </CertificationsStyle>
      </>
   );
};
export default Certifications;
