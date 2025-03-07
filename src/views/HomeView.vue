<script setup>
	import { changeLocale } from "../i18n";
	import { t } from "@/i18n";
	import Identity from "@/components/Identity.vue";
	import Carousel from "primevue/carousel";
	import { ref } from "vue";

	// const photos = ref(["images/favicon.png", "images/hoodie.jpg", "images/sRM_2024.jpg"]);
	// console.log(photos.value);
	// const responsiveOptions = ref([
	// 	{
	// 		breakpoint: "1024px",
	// 		numVisible: 2,
	// 		numScroll: 1,
	// 	},
	// 	{
	// 		breakpoint: "600px",
	// 		numVisible: 1,
	// 		numScroll: 1,
	// 	},
	// ]);
</script>

<template>
<!-- working carousel  template-->
<!-- <section class="flex w-6/12 justify-center items-center flex-col p-4">
		<Carousel
			:value="photos"
			:numVisible="1"
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
					class="object-cover w-full h-full rounded-lg shadow-lg" />
			</template>
		</Carousel>
	</section> -->





	<!-- picture -->
	<section class="bg flex text-center items-center flex-col relative bg-cover bg-right h-[35rem]">
		<div class="bg-black bg-opacity-60 h-full w-full flex flex-col items-center justify-center">
			<div class="flex flex-col items-center justify-center w-10/12">
				<h1 class="text-shadow">BEST Bratislava</h1>
				<h2 class="text-shadow">Board of European students of technology</h2>
			</div>
		</div>
	</section>

	<!-- who we are -->
	<section class="flex justify-center items-center flex-col p-8 bg-secondary">
		<div class="w-10/12">
			<h3>
				{{ t("Home.whoWeAre") }}
			</h3>
			{{ t("Home.textWhoWeAre") }}
		</div>
	</section>

	

	<!-- values -->
	<section class="bg-primary flex flex-col p-5 items-center">
		<h3 class="text-secondary text-center">BEST Spirit</h3>
		<div class="grid place-items-center grid-cols-1 md:grid-cols-2 md:gap-48 lg:grid-cols-5 gap-5 p-5 w-10/12">
			<Identity
				class=""
				icon="pi-face-smile"
				:header="t('Values.fun')"></Identity>
			<Identity
				class=""
				icon="pi-arrows-alt"
				:header="t('Values.flexibility')"></Identity>
			<Identity
				class=""
				icon="pi-user-plus"
				:header="t('Values.friendship')"></Identity>
			<Identity
				class=""
				icon="pi-check-circle"
				:header="t('Values.improvement')"></Identity>
			<Identity
				class=""
				icon="pi-comments"
				:header="t('Values.openMindness')"></Identity>
		</div>
	</section>

	<section class="flex justify-center items-center flex-col p-8 bg-secondary text-primary">
		<div class="w-10/12">
			<h3 class="text-primary">
				{{ t("Home.whatOffer") }}
			</h3>
			{{ t("Home.whatOfferText") }}
		</div>
	</section>
</template>

<style scoped>
	.bg {
		background-image: url("../assets/hoodie.jpg");
	}
</style>
