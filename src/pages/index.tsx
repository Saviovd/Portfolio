import Head from 'next/head';
import GlobalStyle from '@/styles/globals';
import Header from '@/components/Header/Header';
import Intro from '@/components/Home/Home';
import About from '@/components/About/About';
import Habilities from '@/components/Habilities/Habilities';
import Projects from '@/components/Projects/Projects';
import Testimonials from '@/components/Testimonials/Testimonials';
import Contacts from '@/components/Contacts/Contacts';
import Footer from '@/components/Footer/Footer';

export default function Home() {
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
            <Intro />
            <About />
            <Habilities />
            <Projects />
            <Testimonials />
            <Contacts />
         </main>
         <Footer />
      </>
   );
}
