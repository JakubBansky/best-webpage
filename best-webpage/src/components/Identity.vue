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
        required: false,
    },
    dark: {
        type: Boolean,
        required: false,
        default: false
    }
});
</script>

<template>
    <div v-if="text"
        :class="`w-5/12 max-sm:w-11/12 flex items-center justify-start m-5 max-sm:flex-col max-sm:m-1 `">
        <i
            :class="`pi ${icon} text-2xl p-5 m-3 rounded-full ${dark ? 'text-secondary bg-primary' : 'text-primary bg-secondary'}`"></i>

        <div class="max-sm:text-center m-3">
            <h3 :class="`font-bold text-lg mb-1 ${dark ? 'text-primary' : 'text-secondary'}`">{{ header }}</h3>
            <p :class="`${dark ? 'text-primary' : 'text-secondary'}`" >{{ text }}</p>
        </div>
    </div>
    <div v-else class="w-5/12 max-sm:w-11/12 flex items-center justify-start flex-col m-5 max-sm:m-1">
        <i
            :class="`pi ${icon} text-[2.5rem]-important p-5 m-2 mt-3 rounded-full ${dark ? 'text-secondary bg-primary' : 'text-secondary bg-primary'}`"></i>

        <div>
            <h3 :class="`font-bold text-lg mb-1 ${dark ? 'text-primary' : 'text-secondary'}`">{{ header }}</h3>
            <p>{{ text }}</p>
        </div>
    </div>
</template>