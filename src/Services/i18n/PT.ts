const translations = {
   Header: {
      logoAlt: 'Logo de Sávio Almeida',
      home: 'inicio',
      aboutme: 'sobre mim',
      habilities: 'habilidades',
      projects: 'projetos',
      testimonials: 'depoimentos',
   },
   Home: {
      call: '_olá, me chamo',
      github: 'Meu GitHub',
      toAboutMe: 'sobre mim',
      devfrontend: 'Desenvolvedor Front-End',
      devmobile: 'Desenvolvedor Mobile',
      designer: 'UX/UI Designer',
      devfullstack: 'Desenvolvedor Fullstack',
   },
   AboutMe: {
      about: 'sobre',
      me: 'mim',
      apresentation:
         'Olá! eu sou Sávio Almeida, um desenvolvedor apaixonado por criar interfaces web e aplicações intuitivas e visualmente atraentes. Com 3 anos de experiência, possuo um sólido conhecimento em HTML, CSS e JavaScript, além de bibliotecas e frameworks populares como React, Vue.js e Next.Js.',
      obs: 'Meu trabalho se destaca por:',
      emphasis1: 'Design responsivo e amigável',
      emphasis2: 'Código limpo e eficiente',
      emphasis3: 'Foco no usuário',
      text1: 'Crio interfaces que se adaptam a qualquer dispositivo, proporcionando uma experiência de usuário impecável.',
      text2: 'Me preocupo com a qualidade do código, utilizando boas práticas e técnicas de otimização para garantir o melhor desempenho.',
      text3: 'Acredito que a melhor interface é aquela que é fácil de usar e entender, sempre colocando o usuário no centro do processo de desenvolvimento.',
      experienceTitle: 'Experiências',
      jobs: [
         {
            id: 0,
            office: 'Desenvolvedor Front-End',
            currently: ' ',
            assignments: [
               {
                  id: 0,
                  assignment:
                     'Desenvolvimento de sites, apps e sistemas com VueJs, Quasar.',
               },
               {
                  id: 1,
                  assignment: 'Manutenção e refatoração de códigos antigos.',
               },
               {
                  id: 2,
                  assignment:
                     'Integração de sistemas com NodeJs e PHP(Laravel).',
               },
            ],
         },
         {
            id: 1,
            office: 'Business Intelligence - intern',
            currently: ' ',
            assignments: [
               {
                  id: 0,
                  assignment: 'Desenvolvimento de automações.',
               },
               {
                  id: 1,
                  assignment:
                     'Análise de dados com as ferramentas Power Automate e Power BI.',
               },
               {
                  id: 2,
                  assignment: 'Automações utilizando API com NodeJS e Python.',
               },
            ],
         },
         {
            id: 2,
            office: 'Desenvolvedor FullStack',
            currently: 'Atualmente',
            assignments: [
               {
                  id: 0,
                  assignment:
                     'Desenvolvimento de sites e apps com ReactJs, React Native, NextJs e Flutter.',
               },
               {
                  id: 1,
                  assignment:
                     'Desenvolvimento de software com Python, Ruby e Kotlin.',
               },
            ],
         },
      ],
      graduationTitle: 'graduação',
      graduations: [
         {
            id: 0,
            course: 'Análise e desenvolvimento de sistemas',
            institution: 'Universidade Anhembi Morumbi',
            category: 'tecnólogo',
         },
      ],
      coursesTitle: 'cursos',
      courses: [
         {
            id: 0,
            course: 'JavaScript com foco no back-end',
         },
         {
            id: 1,
            course: 'Como criar CRUDs com Qualidade',
         },
         {
            id: 6,
            course: 'APIs com Node.js e Express',
         },
         {
            id: 3,
            course: 'WebMaster Front-End Completo',
         },
         {
            id: 4,
            course: 'JavaScript: tipos, variáveis e funções',
         },
         {
            id: 5,
            course: 'Python com Orientação a Objetos',
         },
         {
            id: 6,
            course: 'CURSO FRONT-END COMPLETO 2.0',
         },
         {
            id: 7,
            course: 'Gerencie aplicações React com Typescript',
         },
         {
            id: 8,
            course: 'Lógica de Programação Essencial',
         },
      ],
      moreCourses: 'mais cursos',
   },
   Habilities: {
      my: 'Minhas',
      habilities: 'habilidades',
      viewmore: 'Ver mais',
      viewless: 'Ver menos',
   },
   Projects: {
      projects: 'projetos',
      recent: 'recentes',
      projectButton: 'projeto',
      repositoryButton: 'repositório',
      devBy: 'Desenvolvido com:',
      more: 'mais projetos',
      dsfBank: {
         name: 'DSF Bank',
         description:
            'Uma interface de banco moderna com elementos de 3D utilizando a biblioteca ThreeJs, e animações com Framer Motion.',
      },
      spaceTourism: {
         name: 'Space Tourism',
         description:
            'Um website de apresentação de uma agência de turismo espacial, com apresentação de alguns destinos e equipe.',
      },
      SneakersECommerce: {
         name: 'Sneakers e-commerce',
         description:
            'Página de selação de produtos simples com expansão de imagem e carrinho funcional e interativo.',
      },
      apiCountries: {
         name: 'API Countries',
         description:
            'Interface que apresenta países e suas informações, tiradas da API Rest Countries, com funcionalidade de navegação entre fronteiras.',
      },
      strangerThings: {
         name: 'Stranger Things 4°',
         description:
            'Landing Page baseada na 4° temporada da série Stranger Things da Netflix.',
      },
      toDoList: {
         name: 'ToDo List',
         description:
            'Interface de tarefas a fazer simples e funcional, conta com verificações para banco de dados.',
      },
   },
   Testimonials: {
      testimonialTitle: 'depoimentos',
      1: {
         id: '1',
         office: 'Quality Assurance | Banco BMG',
         testimony: '',
      },
      2: {
         id: '2',
         office: 'Coordenadora | Votorantim',
         testimony:
            'Sávio é um excelente profissional que tive o privilégio de trabalhar. Interessado, inconformado, estudioso, arrojado, esses são alguns dos adjetivos que posso descreve-lo. Ávido por tecnologia, apoiou e desenvolveu automatizações na área em que atuou no COE Votorantim, auxiliando a equipe na busca da excelência, consciente de que processos bem estabelecidos unidos de automatização/digitalização, são imprescindíveis para o presente e o futuro muito próximo.',
      },
      3: {
         id: '3',
         office: 'Administradora | BigBang Digital',
         testimony: 'Tive o prazer de acompanhar o Sávio durante seu tempo na Big Bang Digital. Mesmo em um período relativamente curto, ele demonstrou dedicação, vontade de aprender e habilidades técnicas notáveis. Sávio possui um forte senso de trabalho em equipe e uma atitude colaborativa, sempre disposto a ajudar e compartilhar conhecimentos. Embora não fosse um desenvolvedor experiente na época, mostrou considerável potencial. Recomendo Sávio para futuras oportunidades, certo de que será um ativo valioso para qualquer equipe.',
      },
   },
   Courses: {
      back: 'Voltar',
      certificate: 'Certificado'
   }
};
export default translations;
