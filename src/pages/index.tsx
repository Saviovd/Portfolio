import Head from 'next/head';
import GlobalStyle from '@/styles/globals';
import Header from '@/components/Header';
import Home from '@/components/Home';
import About from '@/modules/About';
import Projects from '@/components/Projects';
import Contacts from '@/components/Contacts/Contacts';
import Testimonials from '@/components/Testimonials/Testimonials';
import Footer from '@/components/Footer/Footer';
import { motion, useScroll, useSpring } from 'framer-motion';
import ParticlesComponent from '@/components/Particles/indes';
import { ToastContainer } from 'react-toastify';
import Services from '@/components/Services';

export default function Index() {
   const { scrollYProgress } = useScroll();
   const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001,
   });
   return (
      <>
         <GlobalStyle />
         <Head>
            <title>Sávio Almeida | Portfólio</title>
            <meta
               name='description'
               content='Portfólio de Sávio Almeida, desenvolvedor full-stack com expertise em front-end, back-end e tecnologias como React, Vue.js e Next.js. Soluções inovadoras e eficientes em desenvolvimento web.'
            />

            <meta
               name='viewport'
               content='width=device-width, initial-scale=1'
            />
            <link rel='icon' href='/favicon.ico' />
         </Head>
         <Header />
         <main>
            <Home />
            <About />
            <Services />
            <Projects />
            <Testimonials />
            <Contacts />
         </main>
         <Footer />
         <motion.div className='progress-bar' style={{ scaleX }} />
         <ParticlesComponent id='particles' />
         <ToastContainer
            position='top-right'
            autoClose={3000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme='dark'
         />
      </>
   );
}
