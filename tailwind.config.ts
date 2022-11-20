import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        primary: {
          base: '#FF5252',
        },
        secondary: {
          base: '#1A1D24'
        }
      }
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif']
    },
  }
}