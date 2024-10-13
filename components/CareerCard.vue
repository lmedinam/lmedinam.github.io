<template>
  <div class="flex space-x-6">
    <div class="p-8 w-1/3 relative z-10">
      <p :class="reverse ? '' : 'text-right'" class="text-secondary text-4xl font-bold">
        {{ props.from }} <br> {{ props.to }}
      </p>
    </div>
    <div class="relative w-1/2" :class="reverse ? 'order-first' : ''">
      <BackLight />
      <Acrylic class="p-8 min-h-[250px]" :class="reverse ? 'text-right' : ''">
        <h3 class="text-3xl">{{ props.position }}</h3>
        <h4 class="text-2xl text-primary">{{ props.company }}</h4>
        <div class="mt-4 text-[0.925rem]">
          <slot></slot>
        </div>
        <div class="mt-4 flex flex-wrap -mb-2" :class="reverse ? 'justify-end' : ''">
          <span class="bg-secondary rounded-lg px-3 py-0.5 text-[0.925rem] mb-2" v-for="technology in props.technologies" :class="reverse ? 'ml-2' : 'mr-2'">
            {{ technology }}
          </span>
        </div>
      </Acrylic>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  from: string
  to: string
  company: string
  position: string
  reverse?: boolean
  technologies: string[]
}>(), { reverse: false });
</script>