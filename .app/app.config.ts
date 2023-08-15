/**
 * This file is used to configure the app
 *
 * If you have the "Cannot find name 'defineAppConfig'.ts(2304)" error
 * update the root tsconfig.json file to include the following:
 *
 *  "extends": "./.app/.nuxt/tsconfig.json"
 *
 */

export default defineAppConfig({
  tairo: {
    title: 'F1 Project',
    collapse: {
      circularMenu: {
        enabled: true,
        tools: [
          {
            component: 'ThemeToggle',
            props: {
              class: 'ms-auto',
              disableTransitions: false,
              inverted: true,
            },
          },
          {
            component: 'WhoAreWe',
          },
        ],
      },
      toolbar: {
        enabled: true,
        showTitle: true,
        showNavBurger: true,
        tools: [
          {
            component: 'ThemeToggle',
            props: {
              class: 'ms-auto',
              disableTransitions: false,
              inverted: false,
            },
          },
          {
            component: 'WhoAreWe',
          },
        ],
      },
      navigation: {
        enabled: true,
        startOpen: true,
        logo: {
          component: 'TairoLogo',
          resolve: true,
          props: { class: 'text-primary-600 h-10' },
        },
        header: {
          component: 'CollapseNavigationHeader',
        },
        footer: {
          component: 'CollapseNavigationFooter',
        },
        items: [
          {
            name: 'Accueil',
            icon: {
              name: 'lucide:home',
              class: 'w-5 h-5',
            },
            to: '/',
          },
          {
            name: 'Formule 1',
            icon: {
              name: 'simple-icons:f1',
              class: 'w-5 h-5',
            },
            to: '/formule1/',
            children: [
              {
                name: 'Les actualités',
                to: '/formule1/news',
                icon: { name: 'ph:newspaper-duotone', class: 'w-5 h-5' },
              },
              {
                name: 'Classement pilotes',
                to: '/formule1/driver-ranking',
                icon: {
                  name: 'game-icons:full-motorcycle-helmet',
                  class: 'w-5 h-5',
                },
              },
              {
                name: 'Classement constructeurs',
                to: '/formule1/constructor-ranking',
                icon: { name: 'game-icons:f1-car', class: 'w-5 h-5' },
              },
              {
                name: 'Les pilotes',
                to: '/formule1/drivers',
                icon: { name: 'material-symbols:groups', class: 'w-5 h-5' },
              },
              {
                name: 'La saison 2023',
                to: '/formule1/current-season',
                icon: { name: 'mdi:go-kart-track', class: 'w-5 h-5' },
              },
            ],
          },
          {
            name: 'Formule 2',
            icon: {
              name: 'solar:wheel-angle-line-duotone',
              class: 'w-5 h-5',
            },
            to: '/formule2/',
            children: [
              {
                name: 'Les actualités',
                to: '/formule2/news',
                icon: { name: 'ph:newspaper-duotone', class: 'w-5 h-5' },
              },
              {
                name: 'Classement pilotes',
                to: '/formule2/driver-ranking',
                icon: {
                  name: 'game-icons:full-motorcycle-helmet',
                  class: 'w-5 h-5',
                },
              },
              {
                name: 'Classement constructeurs',
                to: '/formule2/constructor-ranking',
                icon: { name: 'game-icons:f1-car', class: 'w-5 h-5' },
              },
            ],
          },
        ],
      },
    },
    panels: [
      {
        name: 'activity',
        position: 'right',
        component: 'WhoAreWeActivity',
      },
    ],
    error: {
      logo: {
        component: 'img',
        props: {
          src: '/img/illustrations/404-1.svg',
          class: 'relative z-20 w-full max-w-lg mx-auto',
        },
      },
    },
  },
})
