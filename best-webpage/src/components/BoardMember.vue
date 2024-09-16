<script setup>

defineProps({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false,
        default: ''
    },
    position: {
        type: String,
        required: true
    },
    mail: {
        type: String,
        required: true
    }
});
</script>

<template>
    <div class="text-center m-2">
        <img :src="image" alt="Profile Image" class="blur-md w-60 h-60 object-cover mx-auto mb-4 shadow-md"
            v-if="image" />
        <h2 class="text-2xl font-semibold text-gray-700">{{ name }}</h2>
        <p class="text-gray-600 font-mono">{{ position }}</p>
        <a :href="`mailto:${mail}`" class="text-gray-600 hover:underline">{{ mail }}</a>
    </div>
</template>
