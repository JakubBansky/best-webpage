<script setup>
defineProps({
    icon: {
        type: String,
        required: true
    },
    header: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true
    }
});
</script>

<template>
    <div class="w-5/12 max-sm:w-8/12 flex items-center justify-start m-5 max-sm:flex-col max-sm:m-1">
        <i :class="`pi ${icon} text-2xl text-yellow-500 bg-gray-800 p-5 mr-3 rounded-full`"></i>

        <div>
            <h1 class="font-bold text-lg mb-1">{{ header }}</h1>
            <p>{{ text }}</p>
        </div>
    </div>
</template>