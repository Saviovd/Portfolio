export interface ProjectProps {
   image: string;
   mobileImage: string;
   screens: string;
   url: string;
   repository: string;
   name: string;
   code: string;
   description: {
      en: string;
      pt: string;
      es: string;
   };
   features: {
      en: string[];
      pt: string[];
      es: string[];
   };
   stacks: Stack[];
   year: number;
   services: ProjectServices[];
}

interface Stack {
   name: string;
   src: string;
   width: number;
   height: number;
   background?: boolean;
   rounded?: boolean;
   padding?: boolean;
}

export interface ProjectServices {
   name: string;
   repository: string;
   description: string;
}
