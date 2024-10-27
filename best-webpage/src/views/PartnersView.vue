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
  <div class="card">
    <Carousel :value="carouselData" :numVisible="1" :numScroll="1" orientation="horizontal">
      <template #item="slotProps">
        <div class="text-center p-4">
          <h2 v-if="slotProps.data.prefix">{{ slotProps.data.prefix }}</h2>
          <h2 class="bigger-aligned">{{ slotProps.data.title }}</h2>
          <h2>{{ slotProps.data.subtitle }}</h2>
        </div>
      </template>
    </Carousel>
  </div>
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
