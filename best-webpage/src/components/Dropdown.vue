<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
const isOpen = ref(false);
</script>

<template>
    <div class="relative inline-block text-left mx-1.5 sm:mx-6 border-b-2 border-transparent hover:border-blue-500">
        <p @click="isOpen = !isOpen" class="bg-gray-800 text-white rounded cursor-pointer flex items-center">
            About us
            <i class="pi pi-angle-down ml-2"></i>
        </p>
        <div v-if="isOpen" class="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg">
            <router-link to="/BEST-Bratislava" @click="isOpen = !isOpen" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                BEST Bratislava
            </router-link>
            <router-link to="/BEST-international" @click="isOpen = !isOpen" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                BEST International
            </router-link>

            <router-link to="/board" @click="isOpen = !isOpen" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Our Board
            </router-link>
        </div>
    </div>
</template>
