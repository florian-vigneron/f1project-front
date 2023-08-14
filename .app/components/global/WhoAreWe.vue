<script setup lang="ts">
const { open } = usePanels()
</script>

<template>
  <button
    type="button"
    class="bg-primary-700 flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300"
    @click="open('activity')"
  >
    <Icon name="ph:question-duotone" class="h-6 w-6 text-white" />
  </button>
</template>
