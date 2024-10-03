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
        content: 'https://github.com/gigapipe',
      },
      {
        icon: 'linkedin',
        mode: 'link',
        content: 'https://www.linkedin.com/company/gigapipe',
      },
      {
        icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" width="85" height="75" viewBox="0 0 85 75" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.569857 37.0069L10.0622 27.6926L46.5189 64.4542L37.0266 73.7685L0.569857 37.0069Z" fill="#FFCC01"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M52.3334 40.1129L61.6978 49.5558L37.0175 73.7729L27.6531 64.33L52.3334 40.1129Z" fill="#FFCC01"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M29.0764 9.03491L38.4408 18.4777L9.93465 46.4489L0.570216 37.0063L29.0764 9.03491Z" fill="#FFCC01"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M28.0293 10.0624L37.5216 0.748086L83.9656 47.5805L74.4733 56.8948L28.0293 10.0624Z" fill="#FF9900"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M37.522 25.3408L49.3103 37.2278L37.7009 48.6193L25.9125 36.7323L37.522 25.3408Z" fill="#FF9900"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M67.5241 25.8655L78.5522 24.0313L76.558 34.9751L67.5241 25.8655Z" fill="#FFCC01"></path></svg>' },
        mode: 'link',
        content: 'https://blog.qryn.dev',
      },
    ],
  },
});
