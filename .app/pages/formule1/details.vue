<script setup lang="ts">
definePageMeta({
  title: 'F1 : Le projet du Grand Prix des Caraïbes tombé à l’eau ?',
})

useHead({
  meta: [
    {
      name: 'description',
      content: 'F1 Project - Formule 1 / Détail article',
    },
  ],
})
</script>

<template>
  <div>
    <img
      src="/img/illustrations/project.jpg"
      class="h-96 w-full rounded-xl object-cover"
    />
  </div>
  <div class="mx-auto w-full max-w-5xl text-center">
    <BaseHeading tag="h1" size="2xl" weight="medium" class="mt-4">
      F1 : Le projet du Grand Prix des Caraïbes tombé à l’eau?
    </BaseHeading>
    <div
      class="divide-muted-200 dark:divide-muted-800 flex items-center justify-center divide-x mt-2"
    >
      <div class="text-muted-400 flex h-8 items-center gap-1 px-4">
        <Icon name="material-symbols:calendar-today-outline" class="h-5 w-5" />
        <BaseText size="sm">10/02/2024</BaseText>
      </div>
      <div class="text-muted-400 hidden h-8 items-center gap-1 px-4 sm:flex">
        <Icon name="material-symbols:account-circle-full" class="h-5 w-5" />
        <BaseText size="sm"> Florian Vigneron</BaseText>
      </div>
      <div class="flex h-8 items-center gap-2 px-4">
        <NuxtLink
          :key="0"
          to="/"
          target="_blank"
          rel="noopener noreferrer"
          class="border-muted-200 hover:border-primary-500 dark:border-muted-700 dark:hover:border-primary-500 dark:bg-muted-800 text-muted-400 hover:text-primary-500 flex h-8 w-8 items-center justify-center rounded-full border bg-white transition-colors duration-300"
        >
          <Icon name="ic:twotone-facebook" class="h-3 w-3" />
          <span class="sr-only">Facebook</span>
        </NuxtLink>
        <NuxtLink
          :key="1"
          to="/"
          target="_blank"
          rel="noopener noreferrer"
          class="border-muted-200 hover:border-primary-500 dark:border-muted-700 dark:hover:border-primary-500 dark:bg-muted-800 text-muted-400 hover:text-primary-500 flex h-8 w-8 items-center justify-center rounded-full border bg-white transition-colors duration-300"
        >
          <Icon name="ri:twitter-x-line" class="h-3 w-3" />
          <span class="sr-only">X</span>
        </NuxtLink>
        <NuxtLink
          :key="1"
          to="/"
          target="_blank"
          rel="noopener noreferrer"
          class="border-muted-200 hover:border-primary-500 dark:border-muted-700 dark:hover:border-primary-500 dark:bg-muted-800 text-muted-400 hover:text-primary-500 flex h-8 w-8 items-center justify-center rounded-full border bg-white transition-colors duration-300"
        >
          <Icon name="ph:instagram-logo-duotone" class="h-3 w-3" />
          <span class="sr-only">Instagram</span>
        </NuxtLink>
      </div>
    </div>
  </div>
  <div class="mt-4">
    <BaseCard shape="curved" class="p-6">
      <BaseParagraph size="md" lead="tight" class="text-muted-400">
        <p>
          L’ancien pilote de F1, Juan Pablo Montoya, a révélé que le projet
          d’organiser un Grand Prix de Formule 1 en Colombie était sur le point
          d’être conclu, avant que la candidature de Madrid ne vienne
          contrecarrer tous les plans.
        </p>
        <p class="mt-4">
          En octobre 2022, le PDG de la Formule 1, Stefano Domenicali, s’est
          rendu en Colombie dans la ville de Baranquilla, dont le maire assurait
          que la Formule 1 serait prête à s’engager sur dix ans pour venir dans
          sa ville y disputer un Grand Prix des Caraïbes à partir de 2024 ou
          2025 sur un circuit semi-urbain.
        </p>
        <p class="mt-4">
          La ville de Barranquilla est située au nord de la Colombie sur la rive
          occidentale du Rio Magdalena, le fleuve le plus important de Colombie,
          à 7,5 km de son embouchure sur la mer des Caraïbes. Ainsi, l’éventuel
          futur Grand Prix de F1 s’appellerait le « Grand Prix des Caraïbes ».
        </p>
      </BaseParagraph>
    </BaseCard>
  </div>
</template>

<style></style>
