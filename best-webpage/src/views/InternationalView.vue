<script setup>
import Identity from '@/components/Identity.vue';
import Carousel from 'primevue/carousel';
import { ref } from 'vue';

const carouselData = ref([
    { title: "84", subtitle: "local groups" },
    { title: "30", subtitle: "countries" },
    { prefix: "more than", title: "3300", subtitle: "volunteers" }
]);
</script>

<template>
    <div class="">
        <h1 class="text-3xl text-center text-primary font-bold m-5">
            International BEST
        </h1>
        <!-- About best -->
        <section class="flex max-md:flex-col max-md:items-center">
            <div class="w-8/12 max-md:w-11/12">
                <h1>O BEST-e</h1>
                <p>
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Cras fusce dolor sed erat aliquet nunc erat. Ut
                    conubia
                    senectus pretium consequat ad felis neque. Finibus taciti imperdiet consectetur at arcu senectus.
                    Quam
                    faucibus proin magna dignissim penatibus, laoreet augue. Aliquet molestie odio tortor lorem, justo
                    montes
                    tortor sociosqu? Risus elit bibendum; tempus risus nec aliquam mauris porta.
                </p>
            </div>
            <div class="w-3/12 flex justify-center items-center ">
                <img src="/favicon.png" alt="logo of best" class="max-w-60 w-11/12 max-sm:w-20 ">
            </div>
        </section>

        <!-- best in numbers -->
        <section class="h-96 bg-primary bg  flex flex-col items-stretch justify-center">
            <h2 class="text-center">BEST in numbers</h2>

            <!-- Carousel: visible on screens smaller than md, hidden on md and larger -->
            <div class="block md:hidden">
                <Carousel :value="carouselData" :numVisible="1" :numScroll="1" orientation="horizontal" circular
                    :autoplayInterval="4000">
                    <template #item="slotProps">
                        <div class="text-center p-4">
                            <h2 v-if="slotProps.data.prefix">{{ slotProps.data.prefix }}</h2>
                            <h2 class="bigger-aligned">{{ slotProps.data.title }}</h2>
                            <h2>{{ slotProps.data.subtitle }}</h2>
                        </div>
                    </template>
                </Carousel>
            </div>

            <!-- Static content: hidden on screens smaller than md, visible on md and larger -->
            <div class="card hidden md:flex justify-around items-end">
                <div>
                    <h2 class="bigger-aligned">84</h2>
                    <h2>local groups</h2>
                </div>
                <div>
                    <h2 class="bigger-aligned">30</h2>
                    <h2>countries</h2>
                </div>
                <div>
                    <h2>more than</h2>
                    <h2 class="bigger-aligned">3300</h2>
                    <h2>volunteers</h2>
                </div>
            </div>
        </section>


        <!-- Identity of best -->
        <section class="bg-primary">
            <h1 class="text-center text-2xl font-semibold m-5 ">Identitita BEST-u</h1>
            <div class="flex max-sm:flex-col items-center">
                <Identity class="" icon="pi-bullseye" header="Vision - Empowered Diversity"
                    text="People understand and respect different cultures and societies. The environment of empowered diversity supports people in applying their full potential and acting responsibly.">
                </Identity>
                <Identity class="" icon="pi-check" header="Mission - Developing Students"
                    text="BEST helps students to achieve an international mindset, to reach a better understanding of cultures and societies and to develop the capacity to work in culturally diverse environments.">
                </Identity>
            </div>

        </section>

        <!-- Best spirit -->
        <section>
            <h1 class="text-center text-2xl font-semibold m-5">BEST spirit</h1>
            <div class="flex max-md:flex-col items-center">
                <Identity class="" icon="pi-face-smile" header="fun" text="">
                </Identity>
                <Identity class="" icon="pi-arrows-alt" header="flexibility" text="">
                </Identity>
                <Identity class="" icon="pi-user-plus" header="friendship" text="">
                </Identity>
                <Identity class="" icon="pi-check-circle" header="improvement" text="">
                </Identity>
                <Identity class="" icon="pi-comments" header="open-mindness" text="">
                </Identity>
            </div>
        </section>
        <!-- LBG's -->

        <section class="flex justify-center items-center max-md:flex-col max-md:items-center">
            <div class="w-5/12 max-md:w-11/12">
                <h1>Local BEST group - LBG</h1>
                <p>
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Cras fusce dolor sed erat aliquet nunc
                    erat. Ut
                    conubia
                    senectus pretium consequat ad felis neque. Finibus taciti imperdiet consectetur at arcu
                    senectus.
                    Quam
                    faucibus proin magna dignissim penatibus, laoreet augue. Aliquet molestie odio tortor lorem,
                    justo
                    montes
                    tortor sociosqu? Risus elit bibendum; tempus risus nec aliquam mauris porta.
                </p>
            </div>
            <div class="w-6/12 flex justify-center items-center ">
                <img src="../assets/lbgs.png" alt="logo of best"
                    class="min-w-60 max-w-80 max-sm:w-20 bg-primary rounded-sm m-2">
            </div>
        </section>
        <a href="https://www.best.eu.org/index.jsp">
            <h1 class="underline text-red-700">Learn more about BEST</h1>
        </a>
    </div>

</template>

<style scoped>
section {
    margin-bottom: 5rem;
}

h2 {
    color: #d0d7d6;
    font-weight: 500;
}

.bg {
    background-image: url('../assets/europeDark.png');
    background-repeat: no-repeat;
    background-position: right;
    background-size: 70%;
}

@media (max-width: 1024px) {
    .bg {
        background-size: cover;
    }
}

@media (max-width: 425px) {
    .bg {
        background-size: cover

    }
}


.bigger-aligned {
    font-weight: 700;
    text-align: center;
    font-size: 4vw;
}
</style>