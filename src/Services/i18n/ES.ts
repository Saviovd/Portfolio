const translations = {
   Header: {
      logoAlt: 'El logotipo de Sávio Almeida',
      home: 'inicio',
      aboutme: 'sobre mí',
      habilities: 'habilidades',
      projects: 'proyectos',
      testimonials: 'testimonios',
   },
   Home: {
      call: '_hola, mi nombre es',
      github: 'Mi GitHub',
      toAboutMe: 'sobre mí',
      devfrontend: 'Desarrollador front-end',
      devmobile: 'Desarrollador móvil',
      designer: 'Diseñador UX/UI',
      devfullstack: 'Desarrollador Fullstack',
   },
   AboutMe: {
      about: 'sobre',
      me: 'mí',
      apresentation:
         '¡Hola! Soy Sávio Almeida, un desarrollador apasionado por crear interfaces intuitivas y visualmente atractivas. Con 3 años de experiencia, tengo un sólido conocimiento en JavaScript y sus principales frameworks, como React, Vue.js y Next.js, además de un amplio dominio de lenguajes back-end como Python y Ruby.',
      obs: 'Mi trabajo se destaca por:',
      emphasis1: 'Diseño receptivo y fácil de usar',
      emphasis2: 'Código limpio y eficiente',
      emphasis3: 'Enfoque en el usuario',
      text1: 'Creo interfaces que se adaptan a cualquier dispositivo, brindando una experiencia de usuario impecable.',
      text2: 'Me preocupo por la calidad del código, utilizando buenas prácticas y técnicas de optimización para garantizar el mejor rendimiento.',
      text3: 'Creo que la mejor interfaz es la que es fácil de usar y entender, siempre poniendo al usuario en el centro del proceso de desarrollo.',
      experienceTitle: 'Experiencias',
      jobs: [
         {
            id: 0,
            office: 'Desarrollador Front-End',
            currently: ' ',
            assignments: [
               {
                  id: 0,
                  assignment:
                     'Desarrollo de sitios web, aplicaciones y sistemas con Vue.js, Quasar.',
               },
               {
                  id: 1,
                  assignment:
                     'Mantenimiento y refactorización de código antiguo.',
               },
               {
                  id: 2,
                  assignment:
                     'Integración de sistemas con Node.js y PHP (Laravel).',
               },
            ],
         },
         {
            id: 1,
            office: 'Inteligencia de Negocios - Interno',
            currently: ' ',
            assignments: [
               {
                  id: 0,
                  assignment: 'Desarrollo de automatizaciones.',
               },
               {
                  id: 1,
                  assignment:
                     'Análisis de datos con las herramientas Power Automate y Power BI.',
               },
               {
                  id: 2,
                  assignment:
                     'Automatizaciones utilizando API con Node.js y Python.',
               },
            ],
         },
         {
            id: 2,
            office: 'Desarrollador FullStack',
            currently: 'Actualmente',
            assignments: [
               {
                  id: 0,
                  assignment:
                     'Desarrollo de sitios web y aplicaciones con React.js, React Native, Next.js y Flutter.',
               },
               {
                  id: 1,
                  assignment:
                     'Desarrollo de software con Python, Ruby y Kotlin.',
               },
            ],
         },
      ],
      graduationTitle: 'graduación',
      graduations: [
         {
            id: 0,
            course: 'Análisis y desarrollo de sistemas',
            institution: 'Universidad Anhembi Morumbi',
            category: 'tecnólogo',
         },
      ],
      coursesTitle: 'cursos',
      courses: [
         { id: 0, course: 'JavaScript con enfoque en el back-end' },
         { id: 1, course: 'Cómo crear CRUDs con Calidad' },
         { id: 6, course: 'APIs con Node.js y Express' },
         { id: 3, course: 'WebMaster Front-End Completo' },
         { id: 4, course: 'JavaScript: tipos, variables y funciones' },
         { id: 5, course: 'Python con Orientación a Objetos' },
         { id: 6, course: 'CURSO FRONT-END COMPLETO 2.0' },
         { id: 7, course: 'Gestione aplicaciones React con Typescript' },
         { id: 8, course: 'Lógica de Programación Esencial' },
      ],
      moreCourses: 'más cursos',
   },
   Habilities: {
      my: 'mis',
      habilities: 'habilidades',
      viewmore: 'Ver más',
      viewless: 'Ver menos',
   },
   Projects: {
      projects: 'proyectos',
      recent: 'recientes',
      projectButton: 'proyecto',
      repositoryButton: 'repositorio',
      devBy: 'Desarrollado con:',
      more: 'más proyectos',
      dsfBank: {
         name: 'DSF Bank',
         description:
            'Una interfaz bancaria moderna con elementos 3D utilizando la biblioteca ThreeJs y animaciones con Framer Motion.',
      },
      spaceTourism: {
         name: 'Space Tourism',
         description:
            'Un sitio web que presenta una agencia de turismo espacial, con algunos destinos y miembros del equipo.',
      },
      SneakersECommerce: {
         name: 'Sneakers e-commerce',
         description:
            'Una página de selección de productos simple con expansión de imágenes y un carrito funcional e interactivo.',
      },
      apiCountries: {
         name: 'API Countries',
         description:
            'Una interfaz que presenta países y su información, tomada de la API Rest Countries, con la funcionalidad de navegar entre fronteras.',
      },
      strangerThings: {
         name: 'Stranger Things 4°',
         description:
            'Página de inicio basada en la cuarta temporada de la serie de Netflix Stranger Things.',
      },
      toDoList: {
         name: 'ToDo List',
         description:
            'Una interfaz de lista de tareas simple y funcional, con verificaciones de base de datos.',
      },
   },
   Testimonials: {
      testimonialTitle: 'Testimonios',
      1: {
         id: '1',
         office: 'Quality Assurance | Banco BMG',
         testimony: '',
      },
      2: {
         id: '2',
         office: 'Coordinadora | Votorantim',
         testimony:
            'Sávio es un profesional excepcional con el que tuve el privilegio de trabajar. Interesado, inconformista y estudioso, son algunos de los adjetivos que puedo describirlo. Apasionado por la tecnología, apoyó y desarrolló automatizaciones en el área en la que trabajó en el COE de Votorantim, asistiendo al equipo en la búsqueda de la excelencia, consciente de que los procesos bien establecidos unidos a la automatización/digitalización son imprescindibles para el presente y el futuro muy próximo.',
      },
      3: {
         id: '3',
         office: 'Administradora | BigBang Digital',
         testimony:
            'Tuve el placer de trabajar con Sávio durante su tiempo en Big Bang Digital. Incluso en un período relativamente corto, demostró dedicación, ganas de aprender y habilidades técnicas notables. Sávio tiene un fuerte sentido del trabajo en equipo y una actitud colaborativa, siempre dispuesto a ayudar y compartir conocimientos. Aunque no era un desarrollador experimentado en ese momento, mostró un potencial considerable. Recomiendo a Sávio para futuras oportunidades, seguro de que será un activo valioso para cualquier equipo.',
      },
   },
   Contacts: {
      my: 'mis',
      contacts: 'contactos',
      copied: 'Correo copiado',
      visit: 'Visitar',
      copy: 'Copiar',
   },
   Courses: {
      back: 'volver',
      certificate: 'certificado',
      courses: 'Cursos',
      inProgress: 'En Proceso',
   },
};
export default translations;
