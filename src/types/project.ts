export interface ProjectProps {
   images: {
      desktop: string;
      mobile: string;
      screens: string;
   };
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
   stack: Stack[];
   year: number;
   services: ProjectServices[] | undefined;
}

interface Stack {
   name: string;
   width: number;
   height: number;
}

export interface ProjectServices {
   name: string;
   repository: string;
   description?: string;
}
