<script setup lang="ts">
const breadcrumb = [
  {
    label: 'Accueil',
    hideLabel: false,
    icon: 'lucide:home',
    to: '/',
  },
  {
    label: 'F2 - Classement constructeurs',
    hideLabel: false,
    icon: 'game-icons:f1-car',
    to: '/formule2/constructor-ranking',
  },
]

definePageMeta({
  title: 'F2 - Classement constructeurs',
})

useHead({
  meta: [
    {
      name: 'description',
      content: 'F1 Project - Formule 2 / Classement constructeurs',
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
                label="Écurie"
                title="Red-Bull"
                position="1"
                avatar="/img/icons/constructors/redbull.svg"
                :hide-label="false"
              >
              </TableStart>
            </template>
            <template #end>
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
                label="Écurie"
                title="Aston-Martin"
                position="2"
                avatar="/img/icons/constructors/aston-martin.svg"
                :hide-label="true"
              >
              </TableStart>
            </template>
            <template #end>
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
        </TransitionGroup>
      </div>
    </TairoContentWrapper>
  </div>
</template>

<style></style>
