/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'arial'],
    },
    extend: {
      textColor: {
        button: '#ffffff', // White color for text in buttons
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    darkTheme: 'dark',
    themes: [
      {
        termsheet: {
          primary: '#f97316',
          secondary: '#0072ff',
          accent: '#00e200',
          neutral: '#1f2537',
          'base-100': '#ffffff',
          info: '#93c5fd',
          success: '#00db69',
          warning: '#facc15',
          error: '#f43f5e',
          '.btn-primary': {
            color: '#ffffff',
          },
        },
      },
    ],
  },
};
