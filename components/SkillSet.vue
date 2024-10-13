<template>
  <Acrylic class="grid grid-cols-5 overflow-hidden">
    <div class="text-3xl font-bold text-right text-secondary px-4 py-2">
      Skill-Set
    </div>
    <div class="grid grid-cols-3 col-span-4 -m-px border-l border-secondary/25">
      <div class="border border-secondary/25 px-4 py-2" v-for="tecnology in props.tecnologies">
        {{ tecnology }}
      </div>
    </div>
  </Acrylic>
</template>

<script setup lang="ts">
const props = defineProps<{
  tecnologies: string[]
}>();
</script>