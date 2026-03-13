/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: '#0C0C0C',
        surface: '#141414',
        surfaceHigh: '#1C1C1C',
        accent: '#E8FF00',
        accentRed: '#FF2D2D',
        accentOrange: '#FF7A00',
        muted: '#555555',
        text: '#F0F0F0',
        textSecondary: '#888888',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'cursive'],
        mono: ['"IBM Plex Mono"', 'monospace'],
        body: ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
