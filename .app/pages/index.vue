<script setup lang="ts">
definePageMeta({
  title: '',
})

useHead({
  meta: [{ name: 'description', content: 'Accueil' }],
})
</script>

<template>
  <div>
    <div
      class="bg-primary-600 flex flex-col items-center xs:h-48 sm:h-32 rounded-2xl sm:flex-row"
    >
      <div class="mt-6 grow pe-6 ps-6 sm:mt-0 sm:pe-0 sm:ps-10">
        <div class="pb-2 text-center sm:pb-0 sm:text-left">
          <BaseHeading
            tag="h1"
            size="3xl"
            class="text-white opacity-90 uppercase"
          >
            <span>Bienvenue sur F1 Project</span>
          </BaseHeading>
          <BaseParagraph size="md" class="text-white opacity-70">
            <span>
              La plateforme qui regroupe toute les dernières informations des
              sports automobiles ...
            </span>
          </BaseParagraph>
        </div>
      </div>
      <div class="relative h-[250px] w-[270px] shrink-0 sm:h-[240px]">
        <img
          class="pointer-events-none absolute bottom-0 end-6 xs:hidden"
          src="/img/illustrations/formule4.svg"
          alt="Formule 1"
        />
      </div>
    </div>
    <div class="relative mt-4">
      <div class="grid grid-cols-12 gap-6">
        <div class="ltablet:col-span-9 col-span-12 lg:col-span-9">
          <TairoContentWrapper>
            <div class="grid w-full gap-4">
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
                <NuxtLink to="/formule1/details">
                  <div class="relative overflow-hidden rounded-lg">
                    <div class="absolute top-3 px-3 flex gap-2">
                      <BaseTag shape="rounded" color="primary"
                        >Actualités</BaseTag
                      >
                    </div>
                    <img
                      src="/img/illustrations/project.jpg"
                      class="h-96 w-full rounded-lg object-cover transition duration-300 ease-in-out hover:scale-110"
                    />
                  </div>
                  <div>
                    <div class="mb-3 mt-3 ml-1">
                      <BaseHeading
                        tag="h3"
                        size="md"
                        weight="bold"
                        lead="snug"
                        class="line-clamp-2 text-gray-800 dark:text-gray-100"
                      >
                        F1 : Le projet du Grand Prix des Caraïbes tombé à l’eau
                        ?
                      </BaseHeading>
                    </div>
                    <div class="flex flex-col mt-auto gap-2 ml-1">
                      <div class="grow">
                        <h4
                          class="text-muted-800 dark:text-muted-100 font-sans text-sm font-medium leading-tight"
                        >
                          L’ancien pilote de F1, Juan Pablo Montoya, a révélé
                          que le projet d’organiser un Grand Prix de Formule 1
                          en Colombie était sur le point d’être conclu, avant
                          que la candidature de Madrid ne vienne contrecarrer
                          tous les plans ...
                        </h4>
                      </div>
                      <div class="flex-none">
                        <p class="text-muted-400 font-sans text-xs">
                          26/02/2024 - F1Only.fr
                        </p>
                      </div>
                    </div>
                  </div>
                </NuxtLink>
              </BaseCard>
            </div>
          </TairoContentWrapper>
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
                <NuxtLink to="/formule1/details">
                  <div class="relative overflow-hidden rounded-lg">
                    <div class="absolute top-3 px-3 flex gap-2">
                      <BaseTag shape="rounded" color="primary"
                        >Actualités</BaseTag
                      >
                    </div>
                    <img
                      src="/img/illustrations/max.jpg"
                      class="h-40 w-full rounded-lg object-cover transition duration-300 ease-in-out hover:scale-110"
                    />
                  </div>
                  <div>
                    <div class="mb-3 mt-3 ml-1">
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
                    <div class="flex flex-col mt-auto gap-2 ml-1">
                      <div class="grow">
                        <h4
                          class="text-muted-800 dark:text-muted-100 font-sans text-sm font-medium leading-tight"
                        >
                          Pour l’ancien pilote de F1, Felipe Massa, le double
                          champion du monde Max Verstappen va très certainement
                          remporter tous les titres mondiaux jusqu’en 2026 ...
                        </h4>
                      </div>
                      <div class="flex-none">
                        <p class="text-muted-400 font-sans text-xs">
                          26/02/2024 - F1Only.fr
                        </p>
                      </div>
                    </div>
                  </div>
                </NuxtLink>
              </BaseCard>
              <BaseCard key="1" shape="curved" class="group p-4">
                <NuxtLink to="/formule1/details">
                  <div class="relative overflow-hidden rounded-lg">
                    <div class="absolute top-3 px-3 flex gap-2">
                      <BaseTag shape="rounded" color="primary"
                        >Actualités</BaseTag
                      >
                    </div>
                    <img
                      src="/img/illustrations/andretti.jpg"
                      class="h-40 w-full rounded-lg object-cover transition duration-300 ease-in-out hover:scale-110"
                    />
                  </div>
                  <div>
                    <div class="mb-3 mt-3 ml-1">
                      <BaseHeading
                        tag="h3"
                        size="md"
                        weight="bold"
                        lead="snug"
                        class="line-clamp-2 text-gray-800 dark:text-gray-100"
                      >
                        F1 : Andretti-Cadillac attend une réponse de la FIA en
                        septembre
                      </BaseHeading>
                    </div>
                    <div class="flex flex-col mt-auto gap-2 ml-1">
                      <div class="grow">
                        <h4
                          class="text-muted-800 dark:text-muted-100 font-sans text-sm font-medium leading-tight"
                        >
                          Mario Andretti admet qu’il n’y a rien d’autre à faire
                          que d’attendre une potentielle réponse positive de la
                          part ...
                        </h4>
                      </div>
                      <div class="flex-none">
                        <p class="text-muted-400 font-sans text-xs">
                          02/03/2024 - F1Only.fr
                        </p>
                      </div>
                    </div>
                  </div>
                </NuxtLink>
              </BaseCard>
            </div>
          </TairoContentWrapper>
        </div>
        <div class="ltablet:col-span-3 xs:hidden lg:col-span-3">
          <TairoContentWrapper>
            <BaseCard shape="curved" class="p-4">
              <div class="flex items-center justify-between">
                <BaseHeading
                  as="h3"
                  size="lg"
                  weight="semibold"
                  lead="tight"
                  class="text-muted-800 dark:text-white uppercase"
                >
                  <span>Classements</span>
                </BaseHeading>
                <BaseButtonIcon
                  small
                  condensed
                  muted
                  to="/formule1/driver-ranking"
                >
                  <Icon name="lucide:more-horizontal" class="h-4 w-4" />
                </BaseButtonIcon>
              </div>
              <BaseTabs
                selected="drivers"
                :tabs="[
                  { label: 'Pilotes', value: 'drivers' },
                  { label: 'Constructeurs', value: 'contructors' },
                ]"
              >
                <template #tab="{ activeValue }">
                  <div v-if="activeValue === 'drivers'">
                    <div class="mb-2 flex items-center justify-between">
                      <div class="text-3xl w-8 text-primary-500 text-center">
                        1
                      </div>
                      <div class="w-36">
                        <BaseHeading
                          as="h4"
                          size="sm"
                          weight="light"
                          lead="tight"
                          class="text-muted-800 mb-1 dark:text-white"
                        >
                          <span>Max Verstappen</span>
                        </BaseHeading>
                        <BaseParagraph size="xs">
                          <span class="text-muted-400">Red-Bull</span>
                        </BaseParagraph>
                      </div>
                      <div class="w-10 text-center">
                        <span>245</span>
                      </div>
                    </div>
                    <div class="mb-2 flex items-center justify-between">
                      <div class="text-3xl w-8 text-primary-500 text-center">
                        2
                      </div>
                      <div class="w-36">
                        <BaseHeading
                          as="h4"
                          size="sm"
                          weight="light"
                          lead="tight"
                          class="text-muted-800 mb-1 dark:text-white"
                        >
                          <span>Checo Perez</span>
                        </BaseHeading>
                        <BaseParagraph size="xs">
                          <span class="text-muted-400">Red-Bull</span>
                        </BaseParagraph>
                      </div>
                      <div class="w-10 text-center">
                        <span>142</span>
                      </div>
                    </div>
                  </div>

                  <div v-else-if="activeValue === 'contructors'">
                    <div class="mb-2 flex items-center justify-between">
                      <div class="text-3xl w-8 text-primary-500 text-center">
                        1
                      </div>
                      <div class="w-36">
                        <BaseHeading
                          as="h4"
                          size="sm"
                          weight="light"
                          lead="tight"
                          class="text-muted-800 mb-1 dark:text-white"
                        >
                          <span>Red-Bull</span>
                        </BaseHeading>
                      </div>
                      <div class="w-10 text-center">
                        <span>321</span>
                      </div>
                    </div>
                    <div class="mb-2 flex items-center justify-between">
                      <div class="text-3xl w-8 text-primary-500 text-center">
                        2
                      </div>
                      <div class="w-36">
                        <BaseHeading
                          as="h4"
                          size="sm"
                          weight="light"
                          lead="tight"
                          class="text-muted-800 mb-1 dark:text-white"
                        >
                          <span>Ferrari</span>
                        </BaseHeading>
                      </div>
                      <div class="w-10 text-center">
                        <span>159</span>
                      </div>
                    </div>
                  </div>
                </template>
              </BaseTabs>
            </BaseCard>
          </TairoContentWrapper>
        </div>
      </div>
    </div>
  </div>
</template>
