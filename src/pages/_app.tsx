import GlobalStyle from '@/styles/globals';
import type { AppProps } from 'next/app';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import i18n from 'i18next';

import en from '@/Services/i18n/EN';
import pt from '@/Services/i18n/PT';
import es from '@/Services/i18n/ES';
import i18next from 'i18next';

i18n.use(initReactI18next).init({
   resources: {
      en: {
         translation: en,
      },
      pt: {
         translation: pt,
      },
      es: {
         translation: es,
      },
   },
   lng: i18next.language,
   interpolation: {
      escapeValue: false,
   },
});

export default function App({ Component, pageProps, router }: AppProps) {
   i18n.changeLanguage(router.locale);
   return (
      <I18nextProvider i18n={i18n}>
         <GlobalStyle />
         <Component {...pageProps} />
      </I18nextProvider>
   );
}
