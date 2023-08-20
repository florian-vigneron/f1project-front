<script setup lang="ts">
const { close } = usePanels()
const activeTab = ref('tab-1')
</script>

<template>
  <div
    class="border-muted-200 dark:border-muted-700 dark:bg-muted-800 border bg-white"
  >
    <div class="flex h-16 w-full items-center justify-between px-10">
      <h2
        class="font-heading text-muted-700 text-lg font-semibold dark:text-white"
      >
        Qui sommes-nous ?
      </h2>
      <button
        type="button"
        class="text-muted-400 hover:bg-muted-100 hover:text-muted-600 dark:hover:bg-muted-700 flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300 dark:hover:text-white"
        @click="close"
      >
        <Icon name="feather:chevron-right" class="h-6 w-6" />
      </button>
    </div>
    <div
      class="slimscroll relative h-[calc(100%_-_128px)] w-full overflow-y-auto px-10"
    >
      <div class="space-y-4">
        <div
          class="border-muted-200 dark:border-muted-600 dark:bg-muted-700 flex items-center rounded-lg border bg-white p-4"
        >
          <div
            class="relative inline-flex h-9 w-9 items-center justify-center rounded-full"
          >
            <Icon
              name="ph:question-duotone"
              class="h-10 w-10 text-primary-400"
            />
          </div>
          <div class="ms-3">
            <h6
              class="font-heading text-muted-800 text-sm font-semibold dark:text-white"
            >
              Nous contacter
            </h6>
            <p class="text-muted-400 font-sans text-xs">
              Une erreur sur le site ?
            </p>
          </div>
          <NuxtLink
            to="/contact"
            class="border-muted-200 text-muted-400 hover:border-primary-500 hover:text-primary-500 dark:border-muted-500 dark:hover:border-primary-500 ms-auto flex h-9 w-9 items-center justify-center rounded-full border transition-colors duration-300"
            @click="close"
          >
            <Icon name="feather:arrow-right" class="h-4 w-4" />
          </NuxtLink>
        </div>
        <div
          class="border-muted-200 dark:border-muted-600 dark:bg-muted-700 flex items-center rounded-lg border bg-white p-4"
        >
          <div
            class="relative inline-flex h-9 w-9 items-center justify-center rounded-full"
          >
            <Icon
              name="ph:mask-happy-duotone"
              class="h-10 w-10 text-primary-400"
            />
          </div>
          <div class="ms-3">
            <h6
              class="font-heading text-muted-800 text-sm font-semibold dark:text-white"
            >
              Politique de confidentialité
            </h6>
            <p class="text-muted-400 font-sans text-xs">
              https://www.f1project.com
            </p>
          </div>
          <NuxtLink
            to="/privacy-policy"
            class="border-muted-200 text-muted-400 hover:border-primary-500 hover:text-primary-500 dark:border-muted-500 dark:hover:border-primary-500 ms-auto flex h-9 w-9 items-center justify-center rounded-full border transition-colors duration-300"
            @click="close"
          >
            <Icon name="feather:arrow-right" class="h-4 w-4" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
