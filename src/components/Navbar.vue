<script setup>
	import { RouterLink } from "vue-router";
	import Dropdown from "../components/Dropdown.vue";
	import { changeLocale } from "../i18n";
	import { t } from "@/i18n";
	import Button from "primevue/button";
</script>

<template>
	<nav
		class="bg-primary flex items-center h-28 justify-between px-5 border-b-2 sticky top-0 z-50 opacity-90 hover:opacity-100">
		<!-- logo  -->
		<div class="flex items-center">
			<router-link to="/">
				<img
					class="w-36 mx-5 block"
					src="../assets/bratislava_logo.png"
					alt="BEST Bratislava Logo" />
			</router-link>
		</div>

		<!-- hidden on small devices -->
		<div class="hidden sm:block">
			<div class="flex items-center justify-center flex-grow">
				<router-link
					to="/"
					class="link"
					:class="{
						'link-active': $route.path === '/',
						'link-inactive': $route.path !== '/',
					}">
					{{ t("Navbar.home") }}
				</router-link>

				<dropdown
					name="Navbar.about-us"
					icon="pi-angle-down"
					:class="{
						'link-active': ['/BEST-Bratislava', '/BEST-international', '/join-us'].includes($route.path),
						'link-inactive': !['/BEST-Bratislava', '/BEST-international', '/join-us'].includes($route.path),
					}"
					:links="[
						{ to: '/BEST-Bratislava', translationKey: 'Navbar.baBest' },
						{ to: '/BEST-international', translationKey: 'Navbar.intBest' },
						// { to: '/join-us', translationKey: 'Navbar.joinUs' },
					]">
					</dropdown>

				<router-link
					to="/events"
					class="link"
					:class="{
						'link-active': $route.path === '/events',
						'link-inactive': $route.path !== '/events',
					}">
					{{ t("Navbar.events") }}
				</router-link>
			</div>
		</div>

		<!-- hidden on big devices -->
		<div class="block sm:hidden">
			<dropdown
				name=""
				icon="pi-align-justify"
				:links="[
					{ to: '/home', translationKey: 'Navbar.home' },
					{ to: '/events', translationKey: 'Navbar.events' },
					// { to: '/partners', translationKey: 'Navbar.partners' },
					{ to: '/BEST-Bratislava', translationKey: 'Navbar.baBest' },
					{ to: '/BEST-international', translationKey: 'Navbar.intBest' },
					// { to: '/board', translationKey: 'Navbar.board' },
					// { to: '/join-us', translationKey: 'Navbar.joinUs' },
				]"></dropdown>
			<Button
				icon="pi pi-globe text-secondary"
				outlined
				@click="changeLocale()" />
		</div>

		<div class="items-center hidden sm:flex">
			<Button
				icon="pi pi-globe text-secondary"
				outlined
				@click="changeLocale()" />
		</div>
	</nav>
</template>

<style>
	.link {
		@apply border-b-2 mx-3.5 sm:mx-6 text-secondary;
		/* Base Tailwind styles */
	}

	.link-active {
		@apply border-secondary;
		/* Active link styles */
	}

	.link-inactive {
		@apply border-transparent hover:text-secondary hover:border-secondary;
		/* Inactive link styles */
	}
</style>
