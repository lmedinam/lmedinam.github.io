<template>
  <div class="bg-base text-white min-h-screen overflow-y-hidden" id="home">
    <div class="max-w-screen-xl mx-auto px-2">
      <AppNav class="z-10 max-w-screen-xl mx-auto w-full" />
      <main>
        <NuxtPage />
      </main>
      <footer class="relative py-16 text-center opacity-75">
        © 2024 Luis Medina
      </footer>
      <div id="modals"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const isModalOpen = useState('isModalOpen', () => false);

watch(isModalOpen, (value) => {
  if (value) {
    document.body.classList.add('overflow-hidden');
  } else {
    document.body.classList.remove('overflow-hidden');
  }
})
</script>