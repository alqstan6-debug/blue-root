module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        border: 'var(--color-border)',
        input: 'var(--color-input)',
        ring: 'var(--color-ring)',
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        primary: {
          DEFAULT: 'var(--color-primary)', /* blue-600 */
          foreground: 'var(--color-primary-foreground)' /* white */
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)', /* emerald-600 */
          foreground: 'var(--color-secondary-foreground)' /* white */
        },
        accent: {
          DEFAULT: 'var(--color-accent)', /* red-600 */
          foreground: 'var(--color-accent-foreground)' /* white */
        },
        destructive: {
          DEFAULT: 'var(--color-destructive)', /* red-500 */
          foreground: 'var(--color-destructive-foreground)' /* white */
        },
        success: {
          DEFAULT: 'var(--color-success)', /* emerald-500 */
          foreground: 'var(--color-success-foreground)' /* white */
        },
        warning: {
          DEFAULT: 'var(--color-warning)', /* amber-500 */
          foreground: 'var(--color-warning-foreground)' /* gray-800 */
        },
        error: {
          DEFAULT: 'var(--color-error)', /* red-500 */
          foreground: 'var(--color-error-foreground)' /* white */
        },
        muted: {
          DEFAULT: 'var(--color-muted)', /* slate-100 */
          foreground: 'var(--color-muted-foreground)' /* gray-500 */
        },
        card: {
          DEFAULT: 'var(--color-card)', /* slate-50 */
          foreground: 'var(--color-card-foreground)' /* gray-700 */
        },
        popover: {
          DEFAULT: 'var(--color-popover)', /* white */
          foreground: 'var(--color-popover-foreground)' /* gray-800 */
        }
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        '2xl': '1.5rem',
        '3xl': '2rem'
      },
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        body: ['Source Sans 3', 'sans-serif'],
        caption: ['Nunito Sans', 'sans-serif'],
        data: ['JetBrains Mono', 'monospace']
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '112': '28rem',
        '128': '32rem'
      },
      transitionDuration: {
        '250': '250ms',
        '400': '400ms',
        '600': '600ms'
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'spring': 'cubic-bezier(0.34, 1.26, 0.64, 1)',
        'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
      },
      boxShadow: {
        'elevation-sm': 'var(--shadow-sm)',
        'elevation-md': 'var(--shadow-md)',
        'elevation-lg': 'var(--shadow-lg)',
        'elevation-xl': 'var(--shadow-xl)',
        'elevation-2xl': '0 25px 50px -12px rgba(15, 23, 42, 0.25)',
        'glow-sm': '0 0 10px rgba(37, 99, 235, 0.3)',
        'glow-md': '0 0 20px rgba(37, 99, 235, 0.4)',
        'glow-lg': '0 0 30px rgba(37, 99, 235, 0.5)',
        'inner-lg': 'inset 0 2px 8px rgba(15, 23, 42, 0.1)'
      },
      zIndex: {
        'base': '0',
        'card': '1',
        'dropdown': '50',
        'navigation': '100',
        'modal': '200',
        'alert': '300',
        'tooltip': '400'
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'shimmer-gradient': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-animate')
  ]
}