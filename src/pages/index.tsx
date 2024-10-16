import Head from 'next/head';
import GlobalStyle from '@/styles/globals';
import Header from '@/components/Header';
import Home from '@/components/Home';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contacts from '@/components/Contacts/Contacts';
import Testimonials from '@/components/Testimonials/Testimonials';
import Footer from '@/components/Footer/Footer';
import { motion, useScroll, useSpring } from 'framer-motion';
import ParticlesComponent from '@/components/Particles/indes';

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
            <meta name='description' content='Generated by create next app' />
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
            {/* <Skills />
            <Projects />
            <Testimonials />
            <Contacts /> */}
         </main>
         <Footer />
         <motion.div className='progress-bar' style={{ scaleX }} />
         <ParticlesComponent id='particles' />
      </>
   );
}
