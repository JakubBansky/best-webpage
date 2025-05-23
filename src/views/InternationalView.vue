<script setup>
import Identity from '@/components/Identity.vue';
import Carousel from 'primevue/carousel';
import { ref, computed } from 'vue';
import { t } from "@/i18n";

const carouselData = computed(() => [
    { title: "84", subtitle: t('International.localGroups') },
    { title: "30", subtitle: t('International.countries') },
    { prefix: t('International.moreThan'), title: "3300", subtitle: t('International.volunteers') }
]);
</script>

<template>
    <div class="">
        <h1 class="text-3xl text-center text-primary font-bold m-5">
            <b>B</b>oard of <b>E</b>uropean <b>S</b>tudents of <b>T</b>echnology
        </h1>

        <section
            class="flex justify-center max-md:flex-col max-md:items-center px-6 py-10  rounded-xl">
            <!-- Text Content -->
            <div class="w-full max-w-2xl text-center mb-8 max-md:mb-6">
                <p class="text-lg leading-relaxed text-gray-800 pt-8">
                    {{ t("International.intro") }}
                </p>
                <a href="https://www.best.eu.org/index.jsp"
                    class="inline-block text-xl font-semibold text-primary underline hover:text-blue-800 transition-colors">
                    {{ t("International.learnMore") }}
                </a>
            </div>

            <!-- Logo -->
            <div class="w-full max-w-80 flex justify-center items-center">
                <img src="/favicon.png" alt="logo of best" class="w-1/2 max-w-xs max-sm:w-24">
            </div>
        </section>


        <!-- best in numbers -->
        <section class="h-96 bg-primary bg  flex flex-col items-stretch justify-center">
            <h2 class="text-center">{{ t("International.inNumbers") }}</h2>

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
            <div class="card hidden md:flex justify-around items-end text-center">
                <div>
                    <h2 class="bigger-aligned">84</h2>
                    <h2>{{ t("International.localGroups") }}</h2>
                </div>
                <div>
                    <h2 class="bigger-aligned">30</h2>
                    <h2>{{ t("International.countries") }}</h2>
                </div>
                <div>
                    <h2>{{ t("International.moreThan") }}</h2>
                    <h2 class="bigger-aligned">3300</h2>
                    <h2>{{ t("International.volunteers") }}</h2>
                </div>
            </div>
        </section>


        <!-- Identity of best -->
        <section class="bg-secondary">
            <h1 class="text-center text-2xl font-semibold m-5 text-primary ">{{ t("Identity.identity") }}</h1>
            <div class="flex max-sm:flex-col items-center justify-center">
                <Identity class="" icon="pi-bullseye" :header="t('Identity.vision')" :text="t('Identity.visionText')"
                    dark=true </Identity>
                    <Identity class="" icon="pi-check" :header="t('Identity.mision')" :text="t('Identity.misionText')"
                        dark="true">
                    </Identity>
            </div>

        </section>

        <!-- Best spirit -->
        <section class="bg-primary p-2">
            <h1 class="text-center text-2xl font-semibold m-5 ">BEST spirit</h1>
            <div class="flex max-md:flex-col items-center">
                <Identity class="" icon="pi-face-smile" :header="t('Values.fun')" text="">
                </Identity>
                <Identity class="" icon="pi-arrows-alt" :header="t('Values.openMindness')" text="">
                </Identity>
                <Identity class="" icon="pi-user-plus" :header="t('Values.friendship')" text="">
                </Identity>
                <Identity class="" icon="pi-check-circle" :header="t('Values.improvement')" text="">
                </Identity>
                <Identity class="" icon="pi-comments" :header="t('Values.flexibility')" text="">
                </Identity>
            </div>
        </section>
        <!-- LBG's -->

        <section class="flex justify-center items-center max-md:flex-col max-md:items-center">
            <div class="w-8/12 max-md:w-11/12">
                <h1 class="text-primary"> {{ t("International.localGroups") }}</h1>
                <p>

                    {{ t("International.localGroupsText") }}
                </p>
            </div>
            <div class="w-3/12 flex justify-center items-center ">
                <img src="../assets/lbgs.png" alt="logo of best"
                    class="w-96 min-w-60 max-w-96 max-sm:w-20  rounded-sm m-2">
            </div>
        </section>

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