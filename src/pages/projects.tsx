import Button from '@/components/Button/Button';
import { ProjectsStyle } from '@/styles/projectPageStyles';
import Head from 'next/head';
import Image from 'next/image';
import data from '../data/data.json';
import Footer from '@/components/Footer/Footer';

const { projects } = data;

const Projects = () => {
   return (
      <>
         <Head>
            <title>Sávio Almeida | Projetos</title>
         </Head>
         <ProjectsStyle>
            <div className='back'>
               <Button
                  className='button'
                  _blank={false}
                  title='Voltar'
                  url='/'
               />
            </div>

            {projects.map((project, i) => (
               <div key={`${i}_${project.name}`} className='project'>
                  <Image
                     src={project.image}
                     alt='project image'
                     width={450}
                     height={200}
                     className='project_picture'
                  />
                  <div className='stacks'>
                     <p className='dev_by'>DESENVOLVIDO COM</p>

                     {project.stacks.map((stack, i) => (
                        <>
                           <Image
                              key={`${i}_`}
                              src={stack}
                              alt='stack logo'
                              width={50}
                              height={50}
                              className='icon'
                           />
                        </>
                     ))}
                  </div>
                  <h2 className='project_name'>{project.name}</h2>
                  <p className='project_description'>{project.description}</p>

                  <div className='links_to_project'>
                     <Button title='Projeto' url={project.url} _blank={true} />
                     <Button
                        title='Repositório'
                        url={project.repository}
                        _blank={true}
                     />
                  </div>
               </div>
            ))}
         </ProjectsStyle>
         <Footer />
      </>
   );
};
export default Projects;
