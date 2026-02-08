export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
  app: {
    head: {
      title: 'Fadillah Nur Istiqomah — Front-End Web Developer',
      meta: [
        {
          name: 'description',
          content:
            'Portfolio of Fadillah Nur Istiqomah — a front-end web developer crafting polished, accessible digital experiences.',
        },
        { name: 'theme-color', content: '#FFFBF9' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap',
        },
      ],
      htmlAttrs: { lang: 'en' },
    },
  },
  colorMode: {
    classSuffix: '',
    preference: 'light',
    fallback: 'light',
  },
})
