<script setup>
import Carousel from 'primevue/carousel';
import { ref } from 'vue';

const carouselData = ref([
  { title: "84", subtitle: "local groups" },
  { title: "30", subtitle: "countries" },
  { prefix: "more than", title: "3300", subtitle: "volunteers" }
]);
</script>

<template>
  partners
</template>

<style scoped>
.bigger-aligned {
  font-weight: 700;
  text-align: center;
  font-size: 4vw;
}

.card {
  background-color: red;
  /* Matches your desired background */
  padding: 2rem;
}
</style>
