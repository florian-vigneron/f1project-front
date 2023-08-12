<script setup lang="ts">
// set compile time meta information
definePageMeta({
  // static meta information can be added to vue-router, we use it
  // to generate the search index in the demo
  title: 'My first page',
})

// meta information can also be added to the head
useHead({
  meta: [{ name: 'description', content: 'My amazing site.' }],
  bodyAttrs: {
    class: 'test',
  },
  script: [{ innerHTML: "console.log('Hello world')" }],
})

// Here you can define your page logic
const accordion = ref([
  {
    title: 'Accordion Item 1',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quo tandem modo? Inde igitur, inquit, ordiendum est. Primum quid tu dicis breve? Duo Reges: constructio interrete.',
  },
  {
    title: 'Accordion Item 2',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quo tandem modo? Inde igitur, inquit, ordiendum est. Primum quid tu dicis breve? Duo Reges: constructio interrete.',
  },
  {
    title: 'Accordion Item 3',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quo tandem modo? Inde igitur, inquit, ordiendum est. Primum quid tu dicis breve? Duo Reges: constructio interrete.',
  },
])
</script>

<template>
  <div>
    <!-- The page content goes here -->
    <div>
      <BaseAccordion :items="accordion" />
    </div>
  </div>
</template>
