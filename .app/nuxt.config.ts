export default defineNuxtConfig({
  extends: [
    /**
     * This extends the base Tairo layer.
     *
     * Alternatively you can use the following:
     * 'github:cssninjaStudio/tairo/layers/xxx#v1.0.0'
     *
     * And set GIGET_AUTH=<github_token> in your .env file
     *
     * This would allows you to create an empty git repository
     * with only your source code and no demo.
     */
    '../layers/tairo',

    /**
     * Uncomment the following line to add the Tairo Layout Sidebar layer
     */
    '../layers/tairo-layout-collapse',
  ],
  unfonts: {
    // This uses google fonts, but you can use
    // any other provider supported by unplugin-fonts
    google: {
      families: [
        'Roboto Flex',
        'Inter',
        'Karla',
        'Fira Code',
        'Racing Sans One',
        'Saira Stencil One',
      ],
    },
  },
})
