<template>
  <div class="relative">
    <BackLight />
    <Acrylic>
      <img :src="props.img" class="w-full rounded-lg -translate-y-4 translate-x-4">
      <div class="px-4 pb-4">
        <h3>{{ props.title }}</h3>
      </div>
    </Acrylic>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string
  img: string
}>()
</script>