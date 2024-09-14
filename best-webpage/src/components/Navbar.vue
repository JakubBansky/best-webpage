<script setup>
import { RouterLink } from 'vue-router';




</script>

<template>

    <nav class="bg-white shadow dark:bg-gray-800">

        <div class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
            <router-link to="/" class="border-b-2 mx-1.5 sm:mx-6" :class="{
                'text-gray-800 dark:text-gray-200 border-blue-500': $route.path === '/',
                'border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500': $route.path !== '/',
            }">
                Home
            </router-link>
            <router-link to="/contact" class="border-b-2 mx-1.5 sm:mx-6" :class="{
                'text-gray-800 dark:text-gray-200 border-blue-500': $route.path === '/contact',
                'border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500': $route.path !== '/contact',
            }">
                About BEST
            </router-link>

            <router-link to="/reservations" class="border-b-2 mx-1.5 sm:mx-6" :class="{
                'text-gray-800 dark:text-gray-200 border-blue-500': $route.path === '/reservations',
                'border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500': $route.path !== '/reservations',
            }">
                Events
            </router-link>

            <router-link to="/prices" class="border-b-2 mx-1.5 sm:mx-6" :class="{
                'text-gray-800 dark:text-gray-200 border-blue-500': $route.path === '/prices',
                'border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500': $route.path !== '/prices',
            }">
                Partners
            </router-link>
            
        </div>
    </nav>

</template>
