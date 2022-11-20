<template>
  <div class="grid grid-cols-12 font-light">
    <aside class="col-span-4">
      <div class="min-h-screen text-white bg-secondary-base sticky top-0">
        <div class="max-w-md ml-auto px-4 py-8 space-y-8">
          <div class="space-y-2">
            <h1>
              <span class="block text-5xl">Luis Medina</span>
              <span class="block text-3xl text-primary-base">Full-Stack Developer</span>
            </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            <p>Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
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
    <main class="col-span-8 px-10 py-8">
      <div class="max-w-screen-md">
        <NuxtPage />
      </div>
    </main>
  </div>
</template>
