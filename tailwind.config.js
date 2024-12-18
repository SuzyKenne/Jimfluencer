/** @type {import('tailwindcss').Config} */

export default {
  darkMode: ['class'],

  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',

        md: 'calc(var(--radius) - 2px)',

        sm: 'calc(var(--radius) - 4px)',
      },

      colors: {
        background: 'hsl(var(--background))',

        foreground: 'hsl(var(--foreground))',

        card: {
          DEFAULT: 'hsl(var(--card))',

          foreground: 'hsl(var(--card-foreground))',
        },

        popover: {
          DEFAULT: 'hsl(var(--popover))',

          foreground: 'hsl(var(--popover-foreground))',
        },

        primary: {
          DEFAULT: 'hsl(var(--primary))',

          foreground: 'hsl(var(--primary-foreground))',
        },

        secondary: {
          DEFAULT: 'hsl(var(--secondary))',

          foreground: 'hsl(var(--secondary-foreground))',
        },

        muted: {
          DEFAULT: 'hsl(var(--muted))',

          foreground: 'hsl(var(--muted-foreground))',
        },

        accent: {
          DEFAULT: 'hsl(var(--accent))',

          foreground: 'hsl(var(--accent-foreground))',
        },

        destructive: {
          DEFAULT: 'hsl(var(--destructive))',

          foreground: 'hsl(var(--destructive-foreground))',
        },

        border: 'hsl(var(--border))',

        input: 'hsl(var(--input))',

        ring: 'hsl(var(--ring))',

        chart: {
          1: 'hsl(var(--chart-1))',

          2: 'hsl(var(--chart-2))',

          3: 'hsl(var(--chart-3))',

          4: 'hsl(var(--chart-4))',

          5: 'hsl(var(--chart-5))',
        },
      },

      keyframes: {
        stripe: {
          '0%': { transform: 'translateX(0) rotate(35deg)' },

          '100%': { transform: 'translateX(450%) rotate(35deg)' },
        },

        'accordion-down': {
          from: {
            height: '0',
          },

          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },

        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },

          to: {
            height: '0',
          },
        },
      },

      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',

        'accordion-up': 'accordion-up 0.2s ease-out',

        '.animate-ping': {
          animation: 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite',
        },

        '.animate-pulse': {
          animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        },

        stripe: 'stripe 0.75s ease-in-out',
      },

      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
      },
    },
  },

  plugins: [require('tailwindcss-animate')],
};
