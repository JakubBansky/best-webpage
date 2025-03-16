<script setup>
	import { ref, defineProps } from "vue";
	import { RouterLink } from "vue-router";
	import { t } from "@/i18n";
	const isOpen = ref(false);

	defineProps({
		name: {
			type: String,
			required: false,
		},
		icon: {
			type: String,
			required: true,
		},
		links: {
			type: Object,
			required: true,
		},
	});
</script>

<template>
	<div
		class="relative inline-block text-center mx-1.5 sm:mx-6 border-b-2 border-transparent hover:border-secondary z-10">
		<div
			@click="isOpen = !isOpen"
			:class="{
				'border-secondary': isOpen && !name,
				'hover:border-none': !isOpen && !name,
			}"
			class="text-secondary rounded cursor-pointer flex items-center mx-4">
			{{ t(name) }}
			<i :class="`pi ${icon}`"></i>
		</div>
		<div
			v-if="isOpen"
			class="absolute right-0 mt-2 mr-2 w-48 bg-white border border-gray-300 rounded shadow-lg">
			<ul>
				<li
					v-for="(link, index) in links"
					:key="index">
					<router-link
						:to="link.to"
						@click="isOpen = !isOpen"
						class="block px-4 py-2 text-gray-800 hover:bg-gray-100">
						{{ t(link.translationKey || link.name) }}
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

