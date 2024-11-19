<script setup>

defineProps({
    color: {
        type: String,
        default: 'to-transparent'
    },
    name: {
        type: String
    },
    text: {
        type: String
    }
})
</script>

<template>
    <div class="mb-8  p-5 bg-primary">
        <h3 class="text-secondary">{{ name }}</h3>
        <p class="text-secondary  text-xl">{{ text }}</p>
    </div>
</template>
