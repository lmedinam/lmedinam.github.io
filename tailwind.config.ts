import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        primary: '#FF4949',
        secondary: '#5B2E2E', 
        base: '#151414',
        acrylic: '#0F0E0E'
      }
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif']
    },
  }
}