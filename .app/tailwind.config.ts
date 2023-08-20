import { withShurikenUI } from '@shuriken-ui/tailwind'
import colors from 'tailwindcss/colors'

/**
 * This is the Tailwind config file for the demo.
 * It extends the default config from @shuriken-ui/tailwind
 *
 * You can add/override your own customizations here.
 */
export default withShurikenUI({
  content: [],
  theme: {
    // Custom fonts (defaults values are commented out)
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      heading: ['Saira Stencil One', 'sans-serif'],
      alt: ['Inter', 'sans-serif'],
      mono: [
        'ui-monospace',
        'Syne',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },
    extend: {
      // Custom colors
      colors: {
        primary: colors.sky,
        muted: colors.gray,
        // info: colors.sky,
        // success: colors.teal,
        // warning: colors.amber,
        // danger: colors.rose,
      },
    },
  },
})
