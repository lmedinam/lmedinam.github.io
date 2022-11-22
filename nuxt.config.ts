// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    app: {
        head: {
            title: 'Luis Medina | Desarrollador Full-Stack',
            meta: [
                { name: 'title', content: 'Luis Medina | Desarrollador Full-Stack' },
                { name: 'description', content: 'Con más de 5 años de experiencia, construyo sistemas sólidos y escalables con una excelente experiencia de usuario.' }
            ],
            link: [
                { rel: 'icon', href: '/favicon.png' }
            ]
        }
    }
})
