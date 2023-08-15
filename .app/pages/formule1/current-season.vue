<script setup lang="ts">
const breadcrumb = [
  {
    label: 'Accueil',
    hideLabel: false,
    icon: 'lucide:home',
    to: '/',
  },
  {
    label: 'Saison 2023',
    hideLabel: false,
    icon: 'mdi:go-kart-track',
    to: '/formule1/current-season',
  },
]

definePageMeta({
  title: 'F1 - Saison 2023',
})

useHead({
  meta: [
    {
      name: 'description',
      content: 'F1 Project - Formule 1 / Saison 2023',
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
        class="ltablet:grid-cols-3 grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3"
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
        <BaseCard key="0" shape="curved" class="group p-4">
          <NuxtLink to="/formule1/circuit">
            <div class="relative overflow-hidden rounded-lg">
              <img
                src="/img/illustrations/bahrein.avif"
                class="h-40 w-full rounded-lg object-cover"
              />
              <div
                class="absolute bottom-0 px-4 py-3 bg-primary-500/90 dark:bg-primary-500/20 w-full"
              >
                <h1 class="text-white font-semibold text-2xl uppercase">
                  <span
                    class="text-white font-semibold text-5xl w-48 text-center"
                    >#1</span
                  >
                  BAHRAIN
                </h1>
              </div>
            </div>
            <div>
              <div class="mt-3 ml-1">
                <BaseHeading
                  tag="h3"
                  size="md"
                  weight="bold"
                  lead="snug"
                  class="line-clamp-2 text-gray-800 uppercase dark:text-gray-100"
                >
                  FORMULA 1 GULF AIR BAHRAIN GRAND PRIX 2023
                </BaseHeading>
              </div>
              <div class="flex flex-col mt-auto gap-2 ml-1 mb-2">
                <div class="grow">
                  <p class="text-muted-400 font-sans uppercase text-sm">
                    03 - 05 MARS
                  </p>
                </div>
              </div>
              <div
                class="border-muted-200 dark:border-muted-700 mt-auto border-t pt-3 text-center"
              >
                <div
                  class="divide-muted-200 dark:divide-muted-700 flex w-full items-center divide-x"
                >
                  <div class="flex-1">
                    <div class="flex flex-col px-4 text-center">
                      <h4
                        class="text-muted-400 font-sans text-xl font-semibold"
                      >
                        #1
                      </h4>
                      <h4
                        class="text-muted-800 dark:text-muted-100 uppercase font-sans text-xl font-semibold"
                      >
                        VER
                      </h4>
                    </div>
                  </div>
                  <div class="flex-1">
                    <div class="flex flex-col px-4 text-center">
                      <h4
                        class="text-muted-400 font-sans text-xl font-semibold"
                      >
                        #2
                      </h4>
                      <h4
                        class="text-muted-800 dark:text-muted-100 uppercase font-sans text-xl font-semibold"
                      >
                        PER
                      </h4>
                    </div>
                  </div>
                  <div class="flex-1">
                    <div class="flex flex-col px-4 text-center">
                      <h4
                        class="text-muted-400 font-sans text-xl font-semibold"
                      >
                        #3
                      </h4>
                      <h4
                        class="text-muted-800 dark:text-muted-100 uppercase font-sans text-xl font-semibold"
                      >
                        ALO
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </NuxtLink>
        </BaseCard>
      </div>
    </TairoContentWrapper>
  </div>
</template>

<style></style>
