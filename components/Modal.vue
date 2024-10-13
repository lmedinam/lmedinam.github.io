<template>
  <Teleport to="#modals">
    <Transition enter-active-class="transition ease-out duration-500 "
      enter-from-class="opacity-0 transform scale-95 translate-y-8"
      enter-to-class="opacity-100 transform scale-100 translate-y-0"
      leave-active-class="transition ease-in duration-500" leave-from-class="opacity-100 transform scale-100"
      leave-to-class="opacity-0 transform scale-95">
      <div class="fixed top-0 left-0 w-screen h-screen z-50 px-8 pt-28 pb-8" v-if="props.isOpen">
        <Acrylic class="h-full w-full flex items-center justify-center">
          <slot />
        </Acrylic>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  isOpen: boolean
}>(), { isOpen: false });

const isModalOpen = useState('isModalOpen');

watch(() => props.isOpen, (value) => {
  isModalOpen.value = value;
});
</script>