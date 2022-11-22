<template>
  <div class="space-y-16">
    <section>
      <h3 class="text-primary-base font-normal text-5xl mb-4">
        Este soy <span class="font-bold">Yo</span>
      </h3>
      <div class="grid grid-cols-12 gap-6 ml-8 mt-8">
        <div class="col-span-12 md:col-span-7">
          <p class="mb-4">
            Soy desarrollador desde el 2017 aproximadamente. Empecé en el desarrollo de sistemas 
            aprendiendo Java, con el tiempo fui moviéndome hacia PHP gracias a 
            la facilidad y velocidad de Laravel.
          </p>
          <div class="grid grid-cols-2 gap-12 md:gap-6">
            <div>
              <span class="block font-bold text-3xl">5+</span>
              <span class="block">Años de experiencia</span>
            </div>
            <div>
              <span class="block font-bold text-3xl">10+</span>
              <span class="block">Proyectos terminados</span>
            </div>
          </div>
        </div>
        <div class="col-span-12 md:col-span-5">
          <h4 class="text-primary-base">Skill-Set</h4>
          <ul class="grid grid-cols-1 md:grid-cols-2 gap-x-4 text-2xl font-bold">
            <li>Laravel</li>
            <li>.Net Core</li>
            <li>Livewire</li>
            <li>Blazor</li>
            <li>Alpine.js</li>
            <li>Vue</li>
            <li>Nuxt</li>
            <li>SQL</li>
          </ul>
        </div>
        <div class="col-span-12">
          <p class="mb-4">
            A lo largo de los años he ido aprendiendo y usando otros Frameworks, me gusta mucho
            el desarrollo en Vue.js con el uso de Nuxt para consumir una API.
          </p>
          <p class="mb-4">
            Mi última adición a los Frameworks y lenguajes que manejo fue C# con .NET Core, una experiencia
            totalmente nueva para mí que definitivamente se convirtió en una de mis opciones preferidas
            a la hora de desarrollar sistemas.
          </p>
        </div>
      </div>
    </section>

    <section>
      <h3 class="text-primary-base font-normal text-5xl mb-4">
        Últimos <span class="font-bold">Proyectos</span>
      </h3>
      <div class="ml-8 mt-8">
        <p class="mb-8">
          
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 md:gap-y-0">
          <div 
            class="rounded p-4 aspect-[16/9]"
            v-for="(project, i) in latestProjects" v-bind:key="i"
            v-bind:class="[i % 2 == 0 ? evenClass : oddClass]"
          >
            <span class="block font-bold mb-2 text-2xl" v-text="project.title"></span>
            <p v-text="project.text"></p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <h3 class="text-primary-base font-normal text-5xl mb-4">
        Mis <span class="font-bold">Proyectos Personales</span>
      </h3>
      <div class="grid grid-cols-12 gap-6 ml-8 mt-8">
        <div class="col-span-12 md:col-span-7">
          <p class="mb-4">
            Uno de mis hobbies es la programación, aprovecho mi tiempo libre para trabajar en proyectos que me apasionen, incluso desarrollando juegos.
          </p>
          <p>
            Puedes ver más en mi <a class="text-primary-base" href="https://github.com/lmedinam" target="_blank">GitHub</a>.
          </p>
        </div>
        <div class="col-span-12 md:col-span-5">
          <ul class="space-y-4">
            <li v-for="(project, i) in personalProjects" v-bind:key="i">
              <h4 v-text="project.title" class="text-2xl font-bold"></h4>
              <p v-text="project.text"></p>
              <a class="text-primary-base" v-bind:href="project.website" target="_blank">
                Website
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      oddClass: 'bg-primary-base transform md:mt-12',
      evenClass: 'bg-secondary-base text-white',
      latestProjects: [
        { title: 'Duracell Summit 2022', text: 'Registro de invitados para la convencion de Duracell.' },
        { title: 'Workscape Store', text: 'Tienda para Workscape de catalogo y pedidos conectados con SAP Ariba.' },
        { title: 'Dior Expertise', text: 'Pequeño sitio web que es mostrado en los sitios de los minoristas.' },
        { title: 'Larasapien', text: 'Un servicio para monitorear las versiones de Laravel y otros indicadores de salud para todas sus aplicaciones.' },
        { title: 'Bulgari Latam PR', text: 'Catálogo de productos que se muestra en sitios web de minoristas.' },
        { title: 'InterProducts Inc', text: 'Página web de catálogo de múltiples productos para importar.' }
      ],
      personalProjects: [
        { title: 'MockGopher', text: 'Mock API server in a ease.', website: 'https://github.com/lmedinam/mockgopher' },
        { title: 'Molag\'s Curse', text: 'Un juego de acción y aventura creado para la LOWREZJAM.', website: 'https://medinam.itch.io/molags-curse' },
      ]
    }
  }
}
</script>
