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
        <img :src="image" alt="Profile Image" class="w-80 h-80 object-cover mx-auto mb-4 shadow-md"
            v-if="image" />
        <h2 class="text-2xl font-semibold text-secondary">{{ name }}</h2>
        <p class="text-secondary font-mono" v-tooltip.top="'Change language'">{{ position }}</p>
        <a :href="`mailto:${mail}`" class="text-secondary hover:underline">{{ mail }}</a>
    </div>
</template>
