import Particles, { initParticlesEngine } from '@tsparticles/react';
import { useEffect, useMemo, useState } from 'react';
import { loadSlim } from '@tsparticles/slim';

const ParticlesComponent = (props: { id: string | undefined; }) => {
   const [, setInit] = useState(false);
   useEffect(() => {
      initParticlesEngine(async (engine) => {

         await loadSlim(engine);
      }).then(() => {
         setInit(true);
      });
   }, []);

   const particlesLoaded = (container: unknown) => {
      // eslint-disable-next-line no-console
      console.log(container);
   };

   const options = useMemo(
      () => ({
         background: {
            color: {
               value: 'transparent',
            },
         },
         fpsLimit: 120,
         interactivity: {
            events: {
               onClick: {
                  enable: true,
                  mode: 'repulse',
               },
               onHover: {
                  enable: true,
                  mode: 'grab',
               },
            },
            modes: {
               push: {
                  distance: 200,
                  duration: 15,
               },
               grab: {
                  distance: 150,
               },
            },
         },
         particles: {
            color: {
               value: '#18ff85',
            },
            links: {
               color: '#18ff85',
               distance: 150,
               enable: true,
               opacity: 0.3,
               width: 1,
            },
            move: {
               direction: 'none',
               enable: true,
               outModes: {
                  default: 'bounce',
               },
               random: true,
               speed: 1,
               straight: false,
            },
            number: {
               density: {
                  enable: true,
               },
               value: 150,
            },
            opacity: {
               value: 1.0,
            },
            shape: {
               type: 'circle',
            },
            size: {
               value: { min: 1, max: 3 },
            },
         },
         detectRetina: true,
      }),
      []
   );
   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
   // @ts-ignore
   return <Particles id={props.id} init={particlesLoaded} options={options} />;
};

export default ParticlesComponent;
