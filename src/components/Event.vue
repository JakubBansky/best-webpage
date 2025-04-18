<script setup>
import { computed } from "vue";
import Carousel from "primevue/carousel";
import { t } from "@/i18n";

const { title, description, photos, position } = defineProps({
  title: String,
  description: String,
  photos: {
    type: Array,
    default: () => [],
  },
  position: {
    type: String,
    default: "left", 
  },
});

const layoutDirection = computed(() =>
  position === "left" ? "flex-row" : "flex-row-reverse"
);

const containerClass = computed(() =>
  position === "right"
    ? "bg-secondary text-primary"
    : "bg-primary text-white"
);

const responsiveOptions = [
  {
    breakpoint: "1400px",
    numVisible: 1,
    numScroll: 1,
  },
];
</script>

<template>
  <div class="mb-24 flex flex-col items-center" :class="containerClass">
    <div class="w-11/12 flex items-center justify-center" :class="layoutDirection">
      <!-- Text Section -->
      <div class="w-1/2 p-6">
        <h2 class="text-3xl font-semibold mb-4">{{ title }}</h2>
        <p class="leading-7 text-lg">{{ description }}</p>
      </div>

      <!-- Carousel Section -->
      <div class="w-1/2 ">
        <Carousel
          v-if="photos.length"
          :value="photos"
          :numVisible="1"
          :numScroll="1"
          orientation="horizontal"
          circular
          :autoplayInterval="4000"
          :responsiveOptions="responsiveOptions"
        >
          <template #item="slotProps">
            <img
              :src="slotProps.data"
              alt="Gallery Image"
              class="object-cover w-full h-96 rounded-xl shadow-lg border-primaryLight border-8"
            />
          </template>
        </Carousel>
      </div>
    </div>
  </div>
</template>
