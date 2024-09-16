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
    <div class="pb-8 m-5">
        
        <h2>{{ name }}</h2>
        <hr class="border-t-2 border-gray-300 z-10 w-1/6" />
        <p>{{ text }}</p>
    </div>
</template>
