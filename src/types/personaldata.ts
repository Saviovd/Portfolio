export interface PersonalData {
   name: string;
   'mid-name': string;
   'last-name': string;
   age: number | string;
   about: {
      en: string;
      pt: string;
      es: string;
   };
   trajectory: {
      en: string;
      pt: string;
      es: string;
   };
   office: {
      en: string;
      pt: string;
      es: string;
   };
   'experience-years': number;
   experiences: Experience[];
   graduation: Graduation[];
   courses: Course[];
}

export interface Experience {
   company: string;
   'company-logo': string;
   'company-linkedin': string;
   location: string;
   position: {
      en: string;
      pt: string;
      es: string;
   };
   regime: {
      en: string;
      pt: string;
      es: string;
   };
   methodology: string;
   description: {
      en: string;
      pt: string;
      es: string;
   };
   assignments: {
      en: string[];
      pt: string[];
      es: string[];
   };
   tools: string[];
   start: string;
   end: string;
   'still-works': boolean;
}

export interface Graduation {
   concluded: boolean;
   course: {
      en: string;
      pt: string;
      es: string;
   };
   institution: {
      en: string;
      pt: string;
      es: string;
   };
   category: {
      en: string;
      pt: string;
      es: string;
   };
   logo: string;
   start: string;
   end: string;
   certificate: string;
}

export interface Course {
   course: {
      en: string;
      pt: string;
      es: string;
   };
   institution: string;
   logo: string;
   category: string;
   hours: string;
   stacks: string[];
   certificate: string;
}
export interface Workshop {
   name: string;
}
export interface TechnicalCertification {
   name: string;
}
