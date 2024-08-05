import { Locale } from './types';

export interface Stack {
   name: string;
}

export interface Formation {
   UniversityEducation: boolean;
   concluded: Record<Locale, string>;
   situation: Record<Locale, string>;
   course: Record<Locale, string>;
   institution: Record<Locale, string>;
   category: Record<Locale, string>;
   logo: string;
   start: string;
   end: string;
   certificate: string;
   stacks?: { name: string }[];
}

export interface Course {
   course: string;
   institution: string;
   logo: string;
   category: string;
   hours: string;
   stacks: Stack[];
   certificate: string;
}

export interface Experiences {
   formation: Formation[];
   courses: Course[];
}
