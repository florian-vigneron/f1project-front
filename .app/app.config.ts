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
    collapse: {
      circularMenu: {
        enabled: true,
        tools: [
          {
            component: 'ThemeToggle',
            props: {
              class: 'ms-auto',
              disableTransitions: true,
              inverted: true,
            },
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
              disableTransitions: true,
              inverted: true,
            },
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
        items: [
          {
            name: 'Formule 1',
            icon: {
              name: 'ph:number-circle-one-duotone',
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
                icon: { name: 'ph:user-square-duotone', class: 'w-5 h-5' },
              },
              {
                name: 'Classement constructeurs',
                to: '/formule1/constructor-ranking',
                icon: { name: 'ph:car-profile-duotone', class: 'w-5 h-5' },
              },
            ],
          },
          {
            name: 'Formule 2',
            icon: {
              name: 'ph:number-circle-two-duotone',
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
                icon: { name: 'ph:user-square-duotone', class: 'w-5 h-5' },
              },
              {
                name: 'Classement constructeurs',
                to: '/formule2/constructor-ranking',
                icon: { name: 'ph:car-profile-duotone', class: 'w-5 h-5' },
              },
            ],
          },
        ],
      },
    },
  },
})
