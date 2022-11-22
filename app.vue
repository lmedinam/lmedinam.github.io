<template>
  <div class="grid grid-cols-12 font-light dark:bg-secondary-darkest">
    <aside class="col-span-12 md:col-span-4">
      <div class="md:min-h-screen text-white bg-secondary-base sticky top-0">
        <div class="max-w-md ml-auto px-4 py-16 md:py-8 space-y-8">
          <div class="space-y-2">
            <h1>
              <span class="block text-5xl">Luis Medina</span>
              <span class="block text-3xl text-primary-base">Desarrollador Full-Stack</span>
            </h1>
            <p>Construyo sistemas sólidos y escalables con una excelente experiencia de usuario.</p>
            <p>Trabajo con múltiples Frameworks y tecnologías para crear sistemas eficientes y seguros.</p>
          </div>
          <div>
            <h3 class="text-3xl text-primary-base mb-2">Esto es lo que hago</h3>
            <ul class="text-xl">
              <li>Aplicaciones Web</li>
              <li>Intranet</li>
              <li>Front-End</li>
              <li>E-Commerce</li>
              <li>API</li>
              <li>Extranet</li>
            </ul>
          </div>
          <div>
            <h3 class="text-3xl text-primary-base mb-2">RRSS y contacto</h3>
            <ul class="flex text-xl flex-wrap">
              <li class="mr-4">
                <a href="https://www.linkedin.com/in/luismedina-git/" target="_blank">LinkedIn</a>
              </li>
              <li class="mr-4">
                <a href="https://github.com/lmedinam" target="_blank">GitHub</a>
              </li>
              <li>
                <a href="mailto:contacto@lmedinam.es">contacto@lmedinam.es</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </aside>
    <main class="col-span-12 md:col-span-8 px-4 md:px-10 py-8 text-secondary-darkest dark:text-white">
      <div class="max-w-screen-md">
        <NuxtPage />
      </div>
    </main>
  </div>
</template>
