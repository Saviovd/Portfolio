/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   compiler: {
      styledComponents: true,
   },
   eslint: {
      ignoreDuringBuilds: true,
   },
   images: {
      domains: [
         'media.licdn.com',
         'www.google.com',
         'github.com',
         'abrudz.github.io',
         'cdn.icon-icons.com',
         'static-00.iconduck.com',
         'raw.githubusercontent.com',
         'w7.pngwing.com',
         'seeklogo.com',
         'landing.anhembi.br',
         'yt3.googleusercontent.com',
         'crudcomqualidade.io',
         'hotmart.s3.amazonaws.com',
         'cdn6.aptoide.com',
      ],
   },
   i18n: {
      locales: ['en', 'pt', 'es'],
      defaultLocale: 'pt',
   },
};

module.exports = nextConfig;
