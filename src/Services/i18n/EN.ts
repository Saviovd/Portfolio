const translations = {
   Header: {
      logoAlt: 'Logo by Sávio Almeida',
      home: 'home',
      aboutme: 'about me',
      habilities: 'skills',
      projects: 'projects',
      testimonials: 'testimonials',
   },
   Home: {
      call: '_hi, my name is',
      github: 'My GitHub',
      toAboutMe: 'about me',
      devfrontend: 'Front-End Developer',
      devmobile: 'Mobile Developer',
      designer: 'UX/UI Designer',
      devfullstack: 'Fullstack Developer',
   },
   AboutMe: {
      about: 'about',
      me: 'me',
      apresentation:
         'Hi! I am Sávio Almeida, a developer passionate about creating intuitive and visually appealing web interfaces and applications. With 3 years of experience, I have a solid knowledge of HTML, CSS and JavaScript, as well as popular libraries and frameworks like React, Vue.js and Next.Js.',
      obs: 'My work stands out for:',
      emphasis1: 'Responsive and user-friendly design',
      emphasis2: 'Clean and efficient code',
      emphasis3: 'User focus',
      text1: 'I create interfaces that adapt to any device, providing an impeccable user experience.',
      text2: 'I care about the quality of the code, using good practices and optimization techniques to ensure the best performance.',
      text3: 'I believe that the best interface is the one that is easy to use and understand, always putting the user at the center of the development process.',
      experienceTitle: 'Experiences',
      jobs: [
         {
            id: 0,
            office: 'Front-End Developer',
            currently: ' ',
            assignments: [
               {
                  id: 0,
                  assignment:
                     'Development of websites, apps, and systems with Vue.js, Quasar.',
               },
               {
                  id: 1,
                  assignment: 'Maintenance and refactoring of old code.',
               },
               {
                  id: 2,
                  assignment:
                     'Integration of systems with Node.js and PHP (Laravel).',
               },
            ],
         },
         {
            id: 1,
            office: 'Business Intelligence - Intern',
            currently: ' ',
            assignments: [
               {
                  id: 0,
                  assignment: 'Development of automations.',
               },
               {
                  id: 1,
                  assignment:
                     'Data analysis with Power Automate and Power BI tools.',
               },
               {
                  id: 2,
                  assignment: 'Automations using API with Node.js and Python.',
               },
            ],
         },
         {
            id: 2,
            office: 'FullStack Developer',
            currently: 'Currently',
            assignments: [
               {
                  id: 0,
                  assignment:
                     'Development of websites and apps with React.js, React Native, Next.js, and Flutter.',
               },
               {
                  id: 1,
                  assignment:
                     'Software development with Python, Ruby, and Kotlin.',
               },
            ],
         },
      ],
      graduationTitle: 'graduation',
      graduations: [
         {
            id: 0,
            course: 'Systems Analysis and Development',
            institution: 'Anhembi Morumbi University',
            category: 'technologist',
         },
      ],
      coursesTitle: 'courses',
      courses: [
         { id: 0, course: 'JavaScript with focus on back-end' },
         { id: 1, course: 'How to create CRUDs with Quality' },
         { id: 6, course: 'APIs with Node.js and Express' },
         { id: 3, course: 'Complete Front-End WebMaster' },
         { id: 4, course: 'JavaScript: types, variables, and functions' },
         { id: 5, course: 'Python with Object Orientation' },
         { id: 6, course: 'COMPLETE FRONT-END COURSE 2.0' },
         { id: 7, course: 'Manage React applications with Typescript' },
         { id: 8, course: 'Essential Programming Logic' },
      ],
      moreCourses: 'more courses',
   },
   Habilities: {
      my: 'My',
      habilities: 'skills',
      viewmore: 'View more',
      viewless: 'View less',
   },
   Projects: {
      projects: 'projects',
      recent: 'recent',
      projectButton: 'project',
      repositoryButton: 'repository',
      devBy: 'Developed with:',
      more: 'more projects',
      dsfBank: {
         name: 'DSF Bank',
         description:
            'A modern bank interface with 3D elements using the ThreeJs library and animations with Framer Motion.',
      },
      spaceTourism: {
         name: 'Space Tourism',
         description:
            'A website presenting a space tourism agency, with some destinations and team members.',
      },
      SneakersECommerce: {
         name: 'Sneakers e-commerce',
         description:
            'A simple product selection page with image expansion and a functional and interactive cart.',
      },
      apiCountries: {
         name: 'API Countries',
         description:
            'An interface that presents countries and their information, taken from the Rest Countries API, with the functionality of navigating between borders.',
      },
      strangerThings: {
         name: 'Stranger Things 4°',
         description:
            'Landing Page based on the 4th season of the Netflix series Stranger Things.',
      },
      toDoList: {
         name: 'ToDo List',
         description:
            'A simple and functional to-do list interface, with database checks.',
      },
   },
   Testimonials: {
      testimonialTitle: 'testimonials',
      1: {
         id: '1',
         office: 'Quality Assurance | Banco BMG',
         testimony: '',
      },
      2: {
         id: '2',
         office: 'Coordinator | Votorantim',
         testimony:
            'Sávio is an outstanding professional with whom I had the privilege of working. Interested, nonconformist, and studious, these are just a few of the adjectives that can describe him. Passionate about technology, he supported and developed automations in the area where he worked at the Votorantim COE, assisting the team in the pursuit of excellence, aware that well-established processes combined with automation/digitization are essential for the present and the very near future.',
      },
      3: {
         id: '3',
         office: 'Administrator | BigBang Digital',
         testimony: 'I had the pleasure of working with Sávio during his time at Big Bang Digital. Even in a relatively short period, he demonstrated dedication, a willingness to learn, and notable technical skills. Sávio has a strong sense of teamwork and a collaborative attitude, always ready to help and share knowledge. Although he was not an experienced developer at the time, he showed considerable potential. I recommend Sávio for future opportunities, confident that he will be a valuable asset to any team.',
      },
   },
   Courses: {
      back: 'Return',
      certificate: 'certificate',
      courses: 'Courses',
      inProgress: 'In Progress'
   }
};
export default translations;
