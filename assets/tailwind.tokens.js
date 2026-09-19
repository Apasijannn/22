/**
 * Botanika — shared Tailwind token config.
 *
 * Replaces the ~4KB config that each of the 5 screens duplicated inline.
 * Colors resolve to the CSS variables in design-tokens.css, so a theme change
 * is one file edit instead of five.
 *
 * Usage — in <head>, AFTER the Tailwind CDN script:
 *   <link rel="stylesheet" href="../assets/design-tokens.css">
 *   <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
 *   <script src="../assets/tailwind.tokens.js"></script>
 *
 * Class names are unchanged from the current markup (bg-surface-container-high,
 * text-body-md, font-headline-lg, px-gutter-mobile, ...), plus the new roles that
 * replace hardcoded hex: foil / foil-bright / foil-deep, paper*, wax*, romantic.
 */
(function () {
  var v = function (name) { return 'var(--' + name + ')'; };

  var config = {
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          // --- surfaces ---
          background: v('color-background'),
          'on-background': v('color-on-background'),
          surface: v('color-surface'),
          'surface-dim': v('color-surface-dim'),
          'surface-bright': v('color-surface-bright'),
          'surface-container-lowest': v('color-surface-container-lowest'),
          'surface-container-low': v('color-surface-container-low'),
          'surface-container': v('color-surface-container'),
          'surface-container-high': v('color-surface-container-high'),
          'surface-container-highest': v('color-surface-container-highest'),
          'surface-variant': v('color-surface-variant'),
          'on-surface': v('color-on-surface'),
          'on-surface-variant': v('color-on-surface-variant'),
          'inverse-surface': v('color-inverse-surface'),
          'inverse-on-surface': v('color-inverse-on-surface'),
          'surface-tint': v('color-surface-tint'),

          // --- sage / primary ---
          primary: v('color-primary'),
          'on-primary': v('color-on-primary'),
          'primary-container': v('color-primary-container'),
          'on-primary-container': v('color-on-primary-container'),
          'primary-fixed': v('color-primary-fixed'),
          'primary-fixed-dim': v('color-primary-fixed-dim'),
          'on-primary-fixed': v('color-on-primary-fixed'),
          'inverse-primary': v('color-inverse-primary'),

          // --- neutral / secondary ---
          secondary: v('color-secondary'),
          'on-secondary': v('color-on-secondary'),
          'secondary-container': v('color-secondary-container'),
          'on-secondary-container': v('color-on-secondary-container'),
          'secondary-fixed': v('color-secondary-fixed'),
          'secondary-fixed-dim': v('color-secondary-fixed-dim'),
          'on-secondary-fixed': v('color-on-secondary-fixed'),

          // --- terracotta / tertiary ---
          tertiary: v('color-tertiary'),
          'on-tertiary': v('color-on-tertiary'),
          'tertiary-container': v('color-tertiary-container'),
          'on-tertiary-container': v('color-on-tertiary-container'),
          'tertiary-fixed': v('color-tertiary-fixed'),
          'tertiary-fixed-dim': v('color-tertiary-fixed-dim'),
          'on-tertiary-fixed': v('color-on-tertiary-fixed'),

          outline: v('color-outline'),
          'outline-variant': v('color-outline-variant'),

          error: v('color-error'),
          'on-error': v('color-on-error'),
          'error-container': v('color-error-container'),
          'on-error-container': v('color-on-error-container'),

          // --- stationery roles: these replace the loose hex literals ---
          foil: v('color-foil'),                 // was #c9a24b / #b89552 / #b08b4f / #bfa15f
          'foil-bright': v('color-foil-bright'), // was #dfbe6d / #e8c56b / #e1bd60
          'foil-deep': v('color-foil-deep'),     // was #a37e2c / #997034 / #a07621
          paper: v('color-paper'),               // was #faf6ef / #f8f3e6
          'paper-raised': v('color-paper-raised'),
          'paper-sunken': v('color-paper-sunken'),
          'paper-edge': v('color-paper-edge'),
          wax: v('color-wax'),                   // was #5e2612 / #6b2c16
          'wax-deep': v('color-wax-deep'),       // was #451606 / #501a08 / #511e0e
          romantic: v('color-romantic')          // dusty rose, per DESIGN.md
        },

        fontFamily: {
          'display-lg': ['Playfair Display', 'Georgia', 'serif'],
          'display-lg-mobile': ['Playfair Display', 'Georgia', 'serif'],
          'headline-lg': ['Playfair Display', 'Georgia', 'serif'],
          'headline-lg-mobile': ['Playfair Display', 'Georgia', 'serif'],
          'headline-md': ['Playfair Display', 'Georgia', 'serif'],
          'headline-sm': ['Playfair Display', 'Georgia', 'serif'],
          'body-lg': ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
          'body-md': ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
          'body-sm': ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
          'label-lg': ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
          'label-md': ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
          'label-sm': ['Plus Jakarta Sans', 'system-ui', 'sans-serif']
        },

        fontSize: {
          'display-lg': ['56px', { lineHeight: '64px', letterSpacing: '-0.02em', fontWeight: '400' }],
          'display-lg-mobile': ['38px', { lineHeight: '46px', letterSpacing: '-0.01em', fontWeight: '400' }],
          'headline-lg': ['36px', { lineHeight: '44px', letterSpacing: '-0.01em', fontWeight: '400' }],
          'headline-lg-mobile': ['28px', { lineHeight: '36px', fontWeight: '400' }],
          'headline-md': ['26px', { lineHeight: '34px', fontWeight: '400' }],
          'headline-sm': ['20px', { lineHeight: '28px', fontWeight: '600' }],
          'body-lg': ['18px', { lineHeight: '28px', fontWeight: '400' }],
          'body-md': ['15px', { lineHeight: '24px', fontWeight: '400' }],
          'body-sm': ['13px', { lineHeight: '20px', fontWeight: '400' }],
          'label-lg': ['14px', { lineHeight: '20px', letterSpacing: '0.06em', fontWeight: '600' }],
          'label-md': ['12px', { lineHeight: '16px', letterSpacing: '0.12em', fontWeight: '600' }],
          'label-sm': ['10px', { lineHeight: '14px', letterSpacing: '0.16em', fontWeight: '700' }]
        },

        spacing: {
          'space-xs': '0.375rem',
          'space-sm': '0.75rem',
          'space-md': '1.25rem',
          'space-lg': '2.25rem',
          'space-xl': '3.5rem',
          gutter: '1.5rem',
          'gutter-mobile': '1rem',
          margin: '3rem',
          'margin-mobile': '1.25rem'
        },

        borderRadius: {
          sm: '0.25rem',
          DEFAULT: '0.5rem',
          md: '0.75rem',
          lg: '1rem',
          xl: '1.5rem',
          full: '9999px'
        },

        boxShadow: {
          xs: 'var(--shadow-xs, 0 1px 2px rgba(36,51,31,0.05))',
          wax: 'var(--wax-seal-shadow)',
          folio: 'var(--card-shadow)',
          pressed: 'inset 0 1px 3px rgba(31, 38, 28, 0.08)'
        },

        transitionTimingFunction: {
          entrance: 'cubic-bezier(0.16, 1, 0.3, 1)'
        },

        transitionDuration: {
          entrance: '750ms',
          ambient: '4500ms'
        }
      }
    }
  };

  if (typeof tailwind !== 'undefined') {
    tailwind.config = config;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = config;
  }
})();
