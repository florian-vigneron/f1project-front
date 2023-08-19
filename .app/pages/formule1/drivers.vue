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
    icon: 'material-symbols:groups',
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
  <div>
    <div class="flex flex-col gap-4">
      <BaseBreadcrumb :items="breadcrumb">
        <Icon name="lucide:chevron-right" class="block h-4 w-4" />
      </BaseBreadcrumb>
    </div>
    <TairoContentWrapper>
      <div
        class="ltablet:grid-cols-4 grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        <TransitionGroup
          enter-active-class="transform-gpu"
          enter-from-class="opacity-0 -translate-x-full"
          enter-to-class="opacity-100 translate-x-0"
          leave-active-class="absolute transform-gpu"
          leave-from-class="opacity-100 translate-x-0"
          leave-to-class="opacity-0 -translate-x-full"
        >
        </TransitionGroup>
        <div :key="0" group p-4>
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
    </TairoContentWrapper>
  </div>
</template>

<style></style>
