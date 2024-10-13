<template>
  <div class="space-y-16">
    <section class="grid grid-cols-2 min-h-[80vh] mt-[15vh]">
      <div class="relative overflow-visible flex flex-col justify-center">
        <BackLight />
        <h1 class="text-primary-base font-normal text-5xl relative">
          Luis Medina
          <p class="text-primary">Desarrollador Web</p>
        </h1>
        <p class="relative mt-4">He estado desarrollando para la web desde 2019, enfocándome principalmente en PHP,
          Laravel y Livewire. Además, tengo experiencia en Vue.js y utilizo otros lenguajes como Go para mis proyectos
          personales.</p>
        <div class="grid grid-cols-2 gap-4 mt-12 relative">
          <div class="text-3xl">
            <span class="font-bold">5+</span> <br>
            Años de <br> experiencia
            <div class="w-1/5 h-1 bg-primary rounded-full mt-4"></div>
          </div>
          <div class="text-3xl">
            <span class="font-bold">15+</span> <br>
            Proyectos <br>
            finalizados
            <div class="w-1/5 h-1 bg-primary rounded-full mt-4"></div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <SkillSet :tecnologies="['PHP', 'Laravel', 'Livewire', 'MySQL', 'Tailwind', 'Alpine.js', 'Vue.js', 'Nuxt', 'HTML5', 'CSS3', 'JavaScript', 'PHPUnit', 'Redis', 'Git', 'Go']" />
    </section>
    <section class="grid grid-cols-2 min-h-[80vh] gap-24 items-center">
      <div class="relative">
        <BackLight />
        <div class="aspect-[16/14]">
          <img src="/img/code.png" alt="Codigo de Handmail"
            class="mix-blend-luminosity cover h-full w-full rounded-lg object-cover translate-y-4 translate-x-4">
        </div>
      </div>
      <div class="space-y-6 flex flex-col justify-center">
        <h3 class="text-5xl font-bold text-primary">Acerca de mi</h3>
        <p class="text-3xl">Mi nombre es <b>Luis Medina</b> y soy desarrollador desde el 2019.</p>
        <p>Mi experiencia se centra en el desarrollo web con Laravel, potenciando mis proyectos con Livewire, Tailwind y
          Alpine.js. Además, soy capaz de desarrollar front-ends completos utilizando Vue.js, adaptándome a las
          necesidades específicas de cada proyecto.</p>
        <p>
          Mi trabajo no se limita a la creación de nuevas aplicaciones. También me he enfrentado a desafíos como la
          modernización de proyectos legacy, la resolución de problemas en código existente y la integración de nuevas
          tecnologías en proyectos en marcha.
        </p>
        <p>
          He trabajado con diversas API y SDK para integrar servicios de terceros en proyectos de distinta complejidad.
        </p>
      </div>
    </section>
    <section class="max-w-screen-lg mx-auto w-full relative space-y-10">
      <CareerCard from="Nov 2019" to="Oct 2024" position="Desarollador Full-Stack" company="Elliptic Marketing" :technologies="['PHP', 'Laravel', 'Livewire', 'MySQL', 'Tailwind', 'Alpine.js', 'Vue.js', 'HTML5', 'CSS3', 'JavaScript', 'PHPUnit', 'Redis', 'Git']">
        <section class="space-y-4">
          <p>
            Diseño e implementación de módulos que mejoran la eficiencia y la funcionalidad de los sistemas de intranet.
          </p>
          <p>Desarrollo de páginas de check-in personalizadas para eventos de alto perfil organizados por Duracell, Dior
            Latam y Bvlgari, garantizando una experiencia fluida y profesional para los asistentes.</p>
          <p>Integración con servicios de terceros como Akeneo y Ariba PunchOut en e-commerce o intranet.</p>
        </section>
      </CareerCard>
      <CareerCard from="Nov 2019" to="Oct 2024" position="Desarrollador Full-Stack" company="DC Urbina Solutions"
        :reverse="true" :technologies="['PHP', 'Laravel', 'Node.js', 'MySQL', 'Vue.js', 'HTML5', 'CSS3', 'JavaScript', 'PHPUnit', 'Git']">
        <section class="space-y-4">
          <p>Diseño y creación de soluciones tecnológicas a medida, adaptadas a las necesidades específicas de cada
            cliente. </p>

          <p>Implementación y prueba de sistemas para asegurar su funcionalidad y rendimiento óptimo antes de la
            entrega.
          </p>
        </section>
      </CareerCard>
    </section>
    <section>
      <ProjectsGallery class="mt-24">
        <ProjectCard title="Duracel Summit 2022" img="/img/duracell-summit-2022.png" v-for="i in 5">

        </ProjectCard>
      </ProjectsGallery>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
