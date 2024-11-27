<script setup>
	import { defineProps, computed } from "vue";
	import Carousel from "primevue/carousel";
	import { t } from "@/i18n";

	defineProps({
		title: {
			type: String,
			required: true,
		},
		date: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		mainPhoto: {
			type: String,
			default: "",
		},
		photos: {
			type: Array,
			default: () => [], // Default to an empty array
		},
	});
</script>

<template>
	<div class="bg-secondary mb-24 flex items-center flex-col">
		<!-- Image with fallback handling -->

		<div class="w-11/12 block">
			<div class="flex justify-between items-start m-2">
				<h2 class="text-primary font-semibold m-0">{{ title }}</h2>
				<p>{{ date }}</p>
			</div>
			<p class="m-2 leading-7">{{ description }}</p>
		</div>

		<!-- Show carousel only if photos are provided -->
		<Carousel
			v-if="photos.length"
			:value="photos"
			:numVisible="2"
			:numScroll="1"
			orientation="horizontal"
			circular
			:autoplayInterval="4000"
			:responsiveOptions="responsiveOptions"
			class="w-9/12">
			
			<template #item="slotProps">
				<img
					:src="slotProps.data"
					alt="Gallery Image"
					class="object-cover w-11/12 h-full"
					@click="displayCarousel()"/>
			</template>
		</Carousel>

		<img
			v-if="!photos.length && mainPhoto"
			:src="mainPhoto"
			alt="Event Image"
			class="object-cover w-6/12" />
	</div>
</template>
