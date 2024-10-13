<template>
  <div class="relative">
    <BackLight />
    <Acrylic 
      class="group hover:-translate-y-2 hover:translate-x-2 transition-all hover:cursor-pointer duration-500"
      @click="isModalOpen = true"
    >
      <img :src="props.thumb" class="w-full rounded-lg -translate-y-4 translate-x-4 group-hover:-translate-y-6 group-hover:translate-x-6 transition-all duration-300">
      <div class="px-4 pb-4">
        <h3>{{ props.title }}</h3>
      </div>
    </Acrylic>
    <Modal v-model:is-open="isModalOpen">
      <div class="grid grid-cols-12 w-full h-full">
        <div class="col-span-8 overflow-auto rounded-lg">
          <img :src="props.images[currentImage]" class="w-full">
        </div>
        <div class="col-span-4 p-8 overflow-auto">
          <button @click="isModalOpen = false" class="text-primary text-sm mb-2">Volver</button>
          <h3 class="text-3xl font-bold mb-4">{{ props.title }}</h3>
          <section>
            <slot />
          </section>
          <div class="grid grid-cols-5 gap-2">
            <button 
              v-for="(image, index) in props.images" 
              class="aspect-[1/1] overflow-hidden rounded-lg block"
              @click="currentImage = index"
            >
              <img :src="image" class="w-full h-full object-cover">
            </button>
          </div>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string
  images: string[]
  thumb: string
}>();

const isModalOpen = ref(false);
const currentImage = ref(0); 
</script>