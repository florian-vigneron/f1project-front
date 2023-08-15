<script setup lang="ts">
const breadcrumb = [
  {
    label: 'Accueil',
    hideLabel: false,
    icon: 'lucide:home',
    to: '/',
  },
  {
    label: 'Les pilotes',
    hideLabel: false,
    icon: 'ph:question-duotone',
    to: '/formule1/drivers',
  },
]

definePageMeta({
  title: 'F1 - Les pilotes',
})

useHead({
  meta: [
    {
      name: 'description',
      content: 'F1 Project - Les pilotes',
    },
  ],
})
</script>

<template>
  <div class="flex flex-col gap-4">
    <BaseBreadcrumb :items="breadcrumb">
      <Icon name="lucide:chevron-right" class="block h-4 w-4" />
    </BaseBreadcrumb>
  </div>
  <div class="relative">
    <div class="ltablet:col-span-6 col-span-12 lg:col-span-6">
      <div class="flex h-full flex-col">
        <div class="grid h-full grid-cols-12 gap-6">
          <div :key="0" class="col-span-6 sm:col-span-3">
            <NuxtLink to="/formule1/driver">
              <div class="group flex h-full flex-col">
                <div
                  class="bg-muted-200 dark:bg-muted-800 relative h-full w-full overflow-hidden rounded-2xl"
                >
                  <img
                    src="/img/illustrations/project.jpg"
                    alt="video.title"
                    class="w-full object-cover object-center"
                  />
                  <div
                    class="absolute bottom-0 px-4 py-3 bg-primary-500/20 w-full"
                  >
                    <h1 class="text-white font-semibold text-2xl">
                      <span
                        class="text-white font-semibold text-5xl w-48 text-center"
                        >#1</span
                      >
                      Max Verstappen
                    </h1>
                  </div>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
