import ButtonLink from '@/components/Buttons/ButtonLink';
import Title from '@/components/Title';
import i18next from 'i18next';
import styled from 'styled-components';
import { LuToyBrick } from 'react-icons/lu';
import { useTranslation } from 'react-i18next';
import { IoHomeOutline } from 'react-icons/io5';

const Container = styled.main`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   gap: 3rem;
   height: 100vh;
   .title {
      width: min-content;
      white-space: nowrap;
   }
   .button {
      width: min-content;
      margin: 0 auto;
   }
`;

const ProjectsPage = () => {
   const { t } = useTranslation();
   return (
      <Container>
         <Title text={t('ProjectsPage.coming')} icon={<LuToyBrick />} className='title' />
         <ButtonLink
            _blank={false}
            content='Back to Home'
            className='button'
            url={`/${i18next.language}`}
            icon={<IoHomeOutline size={15} />}
         />
      </Container>
   );
};

export default ProjectsPage;
