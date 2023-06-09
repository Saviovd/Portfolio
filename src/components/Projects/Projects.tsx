import Image from 'next/image';
import Title from '../Title/Title';
import { ProjectsStyle } from './projectStyles';
import data from '@/data/data.json';
import React from 'react';
import Button from '../Button/Button';

const { projects } = data

const Projects = () => {

   // eslint-disable-next-line @typescript-eslint/no-unused-vars
   const [active, setActive] = React.useState(0)

   return (<>
      <ProjectsStyle id='projetos'>
         <Title
            firstColor='rgb(var(--white))'
            secondColor='rgb(var(--second-primary-color))'
            firstWord='Projetos'
            secondWord='Recentes'
         />

         <div className='project_container'>
            <div className='pagination'>
               <span className={`one ${active === 0 ? 'isActive' : ''}`} onClick={() => setActive(0)}>1</span>
               <span className={`two ${active === 1 ? 'isActive' : ''}`} onClick={() => setActive(1)}>2</span>
               <span className={`three ${active === 2 ? 'isActive' : ''}`} onClick={() => setActive(2)}>3</span>
            </div>
            <Image className='project_photo' src={projects[active].image} alt='ok' width={900} height={442} />

            <div className='about_project'>
               <h3 className='project_name'>{projects[active].name}</h3>
               <p className='project_description'>
                  {projects[active].description}
               </p>
               <div className='links_to_project'>
                  <Button
                     title='Projeto'
                     url={projects[active].url}
                     _blank={true}
                  />
                  <Button
                     title='Repositório'
                     url={'#'}
                     _blank={true}
                  />
               </div>
               <span className='dev_by'>Desenvolvido com:</span>
               <ul className='stack_list'>
                  {projects[active].stacks.map((stack: string, i: number) => (
                     <li className='stack' key={i}>
                        {stack}
                     </li>
                  ))}
               </ul>

            </div>

         </div>
         <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
            <Button
               title='Veja Mais!'
               url='/projects'
               bgColor='rgb(var(--second-primary-color))'
               _blank={false}
            />
         </div>
      </ProjectsStyle>
   </>)
}

export default Projects;
