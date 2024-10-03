import { defineConfig } from 'rspress/config';


export default defineConfig({
  root: 'docs',
  base: '/homepage/',
    title: 'Gigapipe',
  icon: "/logo.svg",
  logo: {
    light: "/gigapipe-logo-color.svg",
    dark: "/Gigapipe-logo-outline@3x.svg",
  },
  description: 'Gigapipe: Polyglot Observability',
  darkMode: true,
  sidebar: false, 
  themeConfig: {  
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/gigapipehq',
      },
      {
        icon: 'linkedin',
        mode: 'link',
        content: 'https://www.linkedin.com/company/gigapipe',
      },
      {
        icon: { svg: `<image src="/qryn.png"/>`},
        mode: 'link',
        content: 'https://www.linkedin.com/company/gigapipe',
      },
    ],
  },
});
