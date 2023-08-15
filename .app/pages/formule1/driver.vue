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
  {
    label: '#1 Max Verstappen',
    hideLabel: false,
    icon: 'ph:mask-happy-duotone',
    to: '/formule1/driver',
  },
]

const activeTab = ref('tab-1')

definePageMeta({
  title: '#1 Max Verstappen',
})

useHead({
  meta: [
    {
      name: 'description',
      content: 'F1 Project - Formule 1 / #1 Max Verstappen',
    },
  ],
})
</script>

<template>
  <div>
    <div
      class="ltablet:h-[470px] dark:bg-muted-800 absolute start-0 top-0 h-590px] w-full bg-white lg:h-[480px]"
    ></div>

    <div class="ltablet:h-64 relative flex h-[460px] w-full flex-col lg:h-64">
      <div class="flex flex-col gap-4 z-10">
        <BaseBreadcrumb :items="breadcrumb">
          <Icon name="lucide:chevron-right" class="block h-4 w-4" />
        </BaseBreadcrumb>
      </div>
      <div class="grid grid-cols-12 gap-6">
        <div class="ltablet:col-span-6 col-span-12 lg:col-span-6">
          <TairoContentWrapper>
            <div class="space-y-5 px-6 py-4">
              <div class="flex items-center justify-between">
                <BaseHeading
                  as="h5"
                  size="sm"
                  weight="medium"
                  lead="tight"
                  class="text-muted-800 dark:text-white"
                >
                </BaseHeading>
                <div class="flex items-center gap-1">
                  <p class="text-muted-400 font-sans text-md">
                    Max Verstappen (VER)
                  </p>
                </div>
              </div>
              <div class="flex items-center justify-between">
                <BaseHeading
                  as="h5"
                  size="sm"
                  weight="medium"
                  lead="tight"
                  class="text-muted-800 dark:text-white"
                >
                  <span>Date de naissance</span>
                </BaseHeading>
                <div class="flex items-center gap-1">
                  <p class="text-muted-400 font-sans text-md">11/02/1993</p>
                </div>
              </div>
              <div class="flex items-center justify-between">
                <BaseHeading
                  as="h5"
                  size="sm"
                  weight="medium"
                  lead="tight"
                  class="text-muted-800 dark:text-white"
                >
                  <span>Lieu de naissance</span>
                </BaseHeading>
                <div class="flex items-center gap-1">
                  <p class="text-muted-400 font-sans text-md">
                    Hasselt, Flandre (Belgique)
                  </p>
                </div>
              </div>
              <div class="flex items-center justify-between">
                <BaseHeading
                  as="h5"
                  size="sm"
                  weight="medium"
                  lead="tight"
                  class="text-muted-800 dark:text-white"
                >
                  <span>Nationalité</span>
                </BaseHeading>
                <div class="flex items-center gap-1">
                  <p class="text-muted-400 font-sans text-md">Néerlandais</p>
                  <BaseAvatar
                    src="/img/icons/flags/netherland.svg"
                    class="bg-primary-500/20 text-primary-500 ml-4"
                    size="xs"
                  />
                </div>
              </div></div
          ></TairoContentWrapper>
        </div>
        <div class="ltablet:col-span-6 col-span-12 lg:col-span-6">
          <TairoContentWrapper>
            <div class="rounded-lg">
              <img
                src="/img/illustrations/project.jpg"
                class="rounded-lg object-cover w-full h-72"
              />
            </div>
          </TairoContentWrapper>
        </div>
      </div>
      <div
        class="ltablet:bottom-[-135px] absolute bottom-[-250px] start-0 flex items-end gap-2 lg:bottom-[-135px]"
      >
        <button
          type="button"
          class="inline-flex items-center justify-center border-b-2 px-4 py-3 font-sans text-sm"
          :class="
            activeTab === 'tab-1'
              ? 'border-primary-500 text-muted-800 dark:text-muted-100'
              : 'border-transparent text-muted-400'
          "
          @click="activeTab = 'tab-1'"
        >
          <span>Saison en cours</span>
        </button>
        <!-- <button
          type="button"
          class="inline-flex items-center justify-center border-b-2 px-4 py-3 font-sans text-sm"
          :class="
            activeTab === 'tab-2'
              ? 'border-primary-500 text-muted-800 dark:text-muted-100'
              : 'border-transparent text-muted-400'
          "
          @click="activeTab = 'tab-2'"
        >
          <span>Anciennes saisons</span>
        </button> -->
      </div>
    </div>
    <div class="w-full">
      <div
        v-if="activeTab === 'tab-1'"
        class="xs:mt-72 sm:mt-72 md:mt-40 lg:mt-40"
      >
        <div class="space-y-2">
          <div class="mb-6 flex w-full items-center justify-between">
            <BaseHeading as="h3" size="lg" weight="medium" lead="tight">
            </BaseHeading>
          </div>
          <div>
            <!-- <ArrivalPositionChartLine /> -->
          </div>
          <div>
            <!-- <TotalPointsChartLine /> -->
          </div>
        </div>
      </div>
      <div
        v-else-if="activeTab === 'tab-2'"
        class="xs:mt-72 sm:mt-72 md:mt-40 lg:mt-40"
      >
        <div class="space-y-16">
          <div class="mb-6 flex w-full items-center justify-between">
            <BaseHeading
              as="h3"
              size="lg"
              weight="medium"
              lead="tight"
              class="mb-2"
            >
              <span class="text-muted-800 dark:text-muted-100">
                Anciennes saisons
              </span>
            </BaseHeading>
          </div>
          <div class="max-w-xs space-y-4"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
