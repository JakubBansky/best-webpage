<script setup>
import { RouterLink } from 'vue-router';
import Dropdown from '.././components/Dropdown.vue';

</script>

<template>

    <nav class="bg-white shadow dark:bg-gray-800 flex items-center h-28">
        <div class="">
            <img class="w-36 mx-5 hidden sm:block" src="../assets/bratislava_logo.png" alt="">
        </div>
        <div class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
            <router-link to="/" class="border-b-2 mx-3.5 sm:mx-6" :class="{
                'text-gray-800 dark:text-gray-200 border-blue-500': $route.path === '/',
                'border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500': $route.path !== '/',
            }">
                Home
            </router-link>

            <dropdown></dropdown>

            <router-link to="/events" class="border-b-2 mx-3.5 sm:mx-6" :class="{
                'text-gray-800 dark:text-gray-200 border-blue-500': $route.path === '/events',
                'border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500': $route.path !== '/events',
            }">
                Events
            </router-link>

            <router-link to="/partners" class="border-b-2 mx-3.5 sm:mx-6" :class="{
                'text-gray-800 dark:text-gray-200 border-blue-500': $route.path === '/partners',
                'border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500': $route.path !== '/partners',
            }">
                Partners
            </router-link>

        </div>
    </nav>

</template>
