<script setup lang="ts">
const breadcrumb = [
  {
    label: 'Accueil',
    hideLabel: false,
    icon: 'lucide:home',
    to: '/',
  },
  {
    label: 'F2 - Classement pilotes',
    hideLabel: false,
    icon: 'game-icons:full-motorcycle-helmet',
    to: '/formule2/driver-ranking',
  },
]

definePageMeta({
  title: 'F2 - Classement pilotes',
})

useHead({
  meta: [
    {
      name: 'description',
      content: 'F1 Project - Formule 2 / Classement pilotes',
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
      <div class="space-y-2 pt-6">
        <TransitionGroup
          enter-active-class="transform-gpu"
          enter-from-class="opacity-0 -translate-x-full"
          enter-to-class="opacity-100 translate-x-0"
          leave-active-class="absolute transform-gpu"
          leave-from-class="opacity-100 translate-x-0"
          leave-to-class="opacity-0 -translate-x-full"
        >
          <TableRow key="0" shape="rounded">
            <template #start>
              <TableStart
                label="Pilote"
                title="Max Verstappen"
                position="1"
                avatar="/img/icons/flags/netherland.svg"
                :hide-label="false"
              >
              </TableStart>
            </template>
            <template #end>
              <TableCell label="Écurie" class="w-full sm:w-40">
                <div class="h-10 px-2 mt-2">
                  <BaseAvatar
                    src="/img/icons/constructors/redbull.svg"
                    text="RB"
                    class="bg-primary-500/20 text-primary-500"
                    size="xs"
                  />
                </div>
                <span
                  class="text-muted-500 dark:text-muted-400 font-sans text-sm ml-2"
                >
                  Red-Bull
                </span></TableCell
              >
              <TableCell label="Points" class="w-full sm:w-40"
                ><span
                  class="text-muted-500 dark:text-muted-400 font-sans text-sm"
                >
                  314
                </span></TableCell
              >
              <TableCell label="Victoires" class="w-full sm:w-40"
                ><span
                  class="text-muted-500 dark:text-muted-400 font-sans text-sm"
                >
                  10
                </span></TableCell
              >
            </template>
          </TableRow>
          <TableRow key="1" shape="rounded">
            <template #start>
              <TableStart
                label="Pilote"
                title="Checo Perez"
                position="2"
                avatar="/img/icons/flags/mexico.svg"
                :hide-label="true"
              >
              </TableStart>
            </template>
            <template #end>
              <TableCell
                label="Écurie"
                class="w-full sm:w-40"
                :hide-label="true"
              >
                <div class="h-10 px-2 mt-2">
                  <BaseAvatar
                    src="/img/icons/constructors/redbull.svg"
                    text="RB"
                    class="bg-primary-500/20 text-primary-500"
                    size="xs"
                  />
                </div>
                <span
                  class="text-muted-500 dark:text-muted-400 font-sans text-sm ml-2"
                >
                  Red-Bull
                </span></TableCell
              >
              <TableCell
                label="Points"
                class="w-full sm:w-40"
                :hide-label="true"
                ><span
                  class="text-muted-500 dark:text-muted-400 font-sans text-sm"
                >
                  146
                </span></TableCell
              >
              <TableCell
                label="Victoires"
                class="w-full sm:w-40"
                :hide-label="true"
                ><span
                  class="text-muted-500 dark:text-muted-400 font-sans text-sm"
                >
                  2
                </span></TableCell
              >
            </template>
          </TableRow>
          <TableRow key="2" shape="rounded">
            <template #start>
              <TableStart
                label="Pilote"
                title="Fernando Alonso"
                position="3"
                avatar="/img/icons/flags/spain.svg"
                :hide-label="true"
              >
              </TableStart>
            </template>
            <template #end>
              <TableCell
                label="Écurie"
                class="w-full sm:w-40"
                :hide-label="true"
              >
                <div class="h-10 px-2 mt-2">
                  <BaseAvatar
                    src="/img/icons/constructors/aston-martin.svg"
                    text="RB"
                    class="bg-primary-500/20 text-primary-500"
                    size="xs"
                  />
                </div>
                <span
                  class="text-muted-500 dark:text-muted-400 font-sans text-sm ml-2"
                >
                  Aston-Martin
                </span></TableCell
              >
              <TableCell
                label="Points"
                class="w-full sm:w-40"
                :hide-label="true"
                ><span
                  class="text-muted-500 dark:text-muted-400 font-sans text-sm"
                >
                  121
                </span></TableCell
              >
              <TableCell
                label="Victoires"
                class="w-full sm:w-40"
                :hide-label="true"
                ><span
                  class="text-muted-500 dark:text-muted-400 font-sans text-sm"
                >
                  0
                </span></TableCell
              >
            </template>
          </TableRow>
        </TransitionGroup>
      </div>
    </TairoContentWrapper>
  </div>
</template>

<style></style>
