<script setup>
defineProps({
    icon: {
        type: String,
        required: true
    },
    header: {
        type: String,
        required: false,
    },
    text: {
        type: String,
        required: false
    }
});
</script>

<template>
    <div v-if="text !== ''" class="w-5/12 max-sm:w-11/12 flex items-center justify-start m-5 max-sm:flex-col max-sm:m-1">
        <i :class="`pi ${icon} text-2xl text-yellow-500 bg-gray-800 p-5 m-3 rounded-full`"></i>

        <div class="max-sm:text-center m-3">
            <h1 class="font-bold text-lg mb-1">{{ header }}</h1>
            <p>{{ text }}</p>
        </div>
    </div>
    <div v-else class="w-5/12 max-sm:w-11/12 flex items-center justify-start flex-col m-5 max-sm:m-1">
        <i :class="`pi ${icon} text-2xl text-yellow-500 bg-gray-800 p-5 m-2 mt-3 rounded-full`"></i>

        <div>
            <h1 class="font-bold text-lg mb-1">{{ header }}</h1>
            <p>{{ text }}</p>
        </div>
    </div>
</template>