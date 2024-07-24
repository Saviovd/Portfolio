declare module 'baffle';

export type Locale = 'en' | 'pt' | 'es';

declare module '*.json' {
   const value: unknown;
   export default value;
}
