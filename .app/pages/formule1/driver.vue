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
    label: 'Pilote',
    hideLabel: false,
    icon: 'ph:mask-happy-duotone',
    to: '/formule1/driver',
  },
]

definePageMeta({
  title: 'Pilote',
})

useHead({
  meta: [
    {
      name: 'description',
      content: 'F1 Project - Formule 1 / Pilote',
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
  <h2>Pilote</h2>
</template>

<style></style>
