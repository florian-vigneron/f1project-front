<script setup lang="ts">
const breadcrumb = [
  {
    label: 'Accueil',
    hideLabel: false,
    icon: 'lucide:home',
    to: '/',
  },
  {
    label: 'Politique de confidentialité',
    hideLabel: false,
    icon: 'ph:mask-happy-duotone',
    to: '/privacy-policy',
  },
]

definePageMeta({
  title: 'Politique de confidentialité',
})

useHead({
  meta: [
    {
      name: 'description',
      content: 'F1 Project - Politique de confidentialité',
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
  <h2>Politique de confidentialité</h2>
</template>

<style></style>
