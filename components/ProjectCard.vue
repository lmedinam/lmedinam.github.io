<template>
  <div class="relative">
    <BackLight />
    <Acrylic 
      class="group hover:-translate-y-2 hover:translate-x-2 transition-all hover:cursor-pointer duration-500"
      @click="isModalOpen = true"
    >
      <img :src="props.img" class="w-full rounded-lg -translate-y-4 translate-x-4 group-hover:-translate-y-6 group-hover:translate-x-6 transition-all duration-300">
      <div class="px-4 pb-4">
        <h3>{{ props.title }}</h3>
      </div>
    </Acrylic>
    <Modal v-model:is-open="isModalOpen">
      <div class="grid grid-cols-12 w-full h-full">
        <div class="col-span-8 overflow-auto rounded-lg">
          <img :src="props.img" class="w-full">
        </div>
        <div class="col-span-4 p-8 overflow-auto">
          <button @click="isModalOpen = false" class="text-primary text-sm mb-2">Volver</button>
          <h3 class="text-3xl font-bold mb-4">{{ props.title }}</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          <p class="mt-4 text-sm">
            <a href="http://" class="text-primary">Ver en nueva ventana</a>
          </p>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string
  img: string
}>()

const isModalOpen = ref(false); 
</script>