<script>
export default {
    name: 'NewsItem',
    props: {
        title: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        mainPhoto: {
            type: String
        },
        photos: {
            type: Array,
            default: () => [],
        },
        link: {
            type: String,
            default: null,
        },
    },
    computed: {
        formattedDate() {
            // Format the date here if needed
            return new Date(this.date).toLocaleDateString();
        },
    },
};
</script>

<template>
    <hr class="p-1 bg-red-500 w-8/12">
    <div class="w-8/12 ">
        
        <h2 class="text-primary font-semibold">{{ title }}</h2>
        <p class="mb-3">{{ formattedDate }}</p>
        <p class="">{{ description }}</p>
        <a v-if="link" :href="link" class="">Read more</a>
    </div>
</template>
