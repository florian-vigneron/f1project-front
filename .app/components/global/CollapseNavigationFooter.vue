<script setup lang="ts">
const { isOpen } = useCollapse()
</script>

<template>
  <div
    class="flex h-16 w-full items-center gap-4 transition-all duration-150"
    :class="!isOpen ? 'px-2 justify-center' : 'px-6'"
  >
    <span
      class="text-muted-500 dark:text-muted-400/80 font-sans text-sm"
      :class="!isOpen ? 'hidden' : 'block'"
    >
      © 2023
      <a
        style="text-decoration: underline"
        href="https://www.florianvigneron.com/"
        target="”_blank”"
        >Florian Vigneron Webmaster</a
      >. Tous droits réservés.
    </span>
  </div>
</template>
