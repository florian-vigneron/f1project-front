<script setup lang="ts">
const breadcrumb = [
  {
    label: 'Accueil',
    hideLabel: false,
    icon: 'lucide:home',
    to: '/',
  },
  {
    label: 'Formulaire de contact',
    hideLabel: false,
    icon: 'ph:question-duotone',
    to: '/contact',
  },
]

definePageMeta({
  title: 'Formulaire de contact',
})

useHead({
  meta: [
    {
      name: 'description',
      content: 'F1 Project - Formulaire de contact',
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
  <h2>Formulaire de contact</h2>
</template>

<style></style>
