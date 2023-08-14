<script setup lang="ts">
definePageMeta({
  title: 'Formule 1 / Les actualités',
})

useHead({
  meta: [
    { name: 'description', content: 'F1 Project - Formule 1 / Les actualités' },
  ],
})
</script>

<template>
  <div>
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
        <BaseCard key="0" shape="curved" class="group p-2">
          <div class="relative overflow-hidden rounded-lg">
            <img
              src="/img/illustrations/max.jpg"
              class="h-40 w-full rounded-lg object-cover transition duration-300 ease-in-out hover:scale-110"
            />
          </div>
          <div>
            <div class="mb-3 mt-3">
              <BaseHeading
                tag="h3"
                size="md"
                weight="bold"
                lead="snug"
                class="line-clamp-2 text-gray-800 dark:text-gray-100"
              >
                F1 : Pour Massa, Verstappen va tout gagner jusqu’en 2026
              </BaseHeading>
            </div>
            <div class="flex flex-col mt-auto gap-2">
              <div class="grow">
                <h4
                  class="text-muted-800 dark:text-muted-100 font-sans text-sm font-medium leading-tight"
                >
                  Pour l’ancien pilote de F1, Felipe Massa, le double champion
                  du monde Max Verstappen va très certainement remporter tous
                  les titres mondiaux jusqu’en 2026 ...
                </h4>
              </div>
              <div class="flex-none">
                <p class="text-muted-400 font-sans text-xs">
                  26/02/2024 - F1Only.fr
                </p>
              </div>
            </div>
          </div>
        </BaseCard>
        <BaseCard key="1" shape="curved" class="group p-2">
          <div class="relative overflow-hidden rounded-lg">
            <img
              src="/img/illustrations/andretti.jpg"
              class="h-40 w-full rounded-lg object-cover transition duration-300 ease-in-out hover:scale-110"
            />
          </div>
          <div>
            <div class="mb-3 mt-3">
              <BaseHeading
                tag="h3"
                size="md"
                weight="bold"
                lead="snug"
                class="line-clamp-2 text-gray-800 dark:text-gray-100"
              >
                F1 : Andretti-Cadillac attend une réponse de la FIA en septembre
              </BaseHeading>
            </div>
            <div class="flex flex-col mt-auto gap-2">
              <div class="grow">
                <h4
                  class="text-muted-800 dark:text-muted-100 font-sans text-sm font-medium leading-tight"
                >
                  Mario Andretti admet qu’il n’y a rien d’autre à faire que
                  d’attendre une potentielle réponse positive de la part ...
                </h4>
              </div>
              <div class="flex-none">
                <p class="text-muted-400 font-sans text-xs">
                  02/03/2024 - F1Only.fr
                </p>
              </div>
            </div>
          </div>
        </BaseCard>
      </div>
    </TairoContentWrapper>
  </div>
</template>

<style></style>
