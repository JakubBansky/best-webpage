<script setup>
	import BoardMember from "../components/BoardMember.vue";
	import kikoImage from "@/assets/kiko.png";
	import favicon from "@/assets/bratislava_logo.png";
	import { t } from "@/i18n";
</script>

<template>
	<div class="">
		<h1 class="text-center text-3xl text-gray-900 font-extrabold m-10">BEST Bratislava</h1>

		<section>
			<div class="flex items-center justify-center flex-col py-10 bg-primary">
				<p class="m-5 text-xl w-10/12 text-center text-secondary">
					{{ t("Home.textWhoWeAre") }}
				</p>
				<h1 class="text-5xl font-bold m-4 text-secondary">Board 2025</h1>
				<img
					src="../assets/groupPhoto.jpg"
					class="w-8/12 max-md:w-11/12 mb-10 rounded-sm shadow-lg h-[25rem]"
					alt="Picture of our board" />

				<div class="text-center w-11/12 my-8 relative">
					<h1 class="font-extrabold inline-block relative px-4 z-20 text-secondary bg-primary p-2 rounded-md">
						Power Rangers
					</h1>
					<hr class="absolute inset-x-0 top-1/2 border-t-2 border-gray-300 z-10" />
				</div>

				<div class="grid grid-cols-1 md:grid-cols-2 gap-10">
					<BoardMember
						:image="kikoImage"
						name="Kristián Kapec"
						position="President"
						mail="kristian.kapec@best-bratislava.sk" />
					<BoardMember
						:image="favicon"
						name="Marek Holub"
						position="Secretary"
						mail="marek.holub.ml@gmail.com" />
				</div>
				<div class="grid grid-cols-1 md:grid-cols-3 gap-10">
					<BoardMember
						:image="favicon"
						name="Andrej Bitarovec"
						position="VP4CR"
						mail="andrej.bitarovec@best-bratislava.sk" />
					<BoardMember
						:image="favicon"
						name="Valeria Levchuk"
						position="VP4PR"
						mail="valeriia.levchuk@best-bratislava.sk" />
					<BoardMember
						:image="favicon"
						name="Dominik Hrdina"
						position="VP4PR"
						mail="hrdina.dominik@gmail.com" />
				</div>
			</div>
		</section>
	</div>
</template>
