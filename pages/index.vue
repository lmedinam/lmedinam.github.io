<template>
  <div class="space-y-20">
    <section>
      <h3 class="text-primary-base font-normal text-5xl mb-4">
        Este soy <span class="font-bold">Yo</span>
      </h3>
      <div class="grid grid-cols-12 gap-6 ml-8 mt-8">
        <div class="col-span-12 md:col-span-7">
          <p class="mb-4">
            As Full-Stack Developer I manage a bunch of frameworks and librarios to create and deploy applications, following good practices and the best security standards.
          </p>
          <div class="grid grid-cols-2 gap-12 md:gap-6">
            <div>
              <span class="block font-bold text-3xl">5+</span>
              <span class="block">Años de experiencia</span>
            </div>
            <div>
              <span class="block font-bold text-3xl">15+</span>
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
            <li>Nuxt.js</li>
          </ul>
        </div>
      </div>
    </section>

    <section>
      <h3 class="text-primary-base font-normal text-5xl mb-4">
        Últimos <span class="font-bold">Proyectos</span>
      </h3>
      <div class="ml-8 mt-8">
        <p class="mb-8">
          As Full-Stack Developer I manage a bunch of frameworks and librarios to create and deploy applications, following good practices and the best security standards.
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      oddClass: 'bg-primary-base transform md:mt-12',
      evenClass: 'bg-secondary-base text-white',
      latestProjects: [
        { title: 'Duracell Summit 2022', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.' },
        { title: 'Workscape Store', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.' },
        { title: 'Dior Expertise', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.' },
        { title: 'Larasapien', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.' },
        { title: 'Bulgari Latam PR', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.' },
        { title: 'Dior Expertise', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.' }
      ]
    }
  }
}
</script>
