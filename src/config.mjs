import defaultImage from './assets/images/default.png';

const env = import.meta.env;

const CONFIG = {
  name: 'artem stelzer',

  origin: 'https://stelzer.dev',
  basePathname: '/',
  trailingSlash: false,

  title: 'artem stelzer',
  description: 'Artem Stelzer, FullStack developer',
  defaultImage: defaultImage,

  defaultTheme: 'system', // Values: "system" | "light" | "dark" | "light:only" | "dark:only"

  language: 'en',
  textDirection: 'ltr',

  dateFormatter: new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }),

  googleAnalyticsId: env.GOOGLE_ANALYTICS_ID || false, // "G-XXXXXXXXXX",
  googleSiteVerificationId: env.GOOGLE_SITE_VERIFICAION_ID || false,

  blog: {
    disabled: false,
  },
};

export const SITE = { ...CONFIG, blog: undefined };
export const BLOG = CONFIG.blog;
export const DATE_FORMATTER = CONFIG.dateFormatter;
