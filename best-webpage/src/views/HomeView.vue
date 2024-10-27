<script setup>
import { changeLocale } from "../i18n";
import { t } from "@/i18n";
import Identity from '@/components/Identity.vue';
import { data } from "autoprefixer";
</script>

<template>
    <!-- picture -->
    <section class="bg flex text-center items-center flex-col relative bg-cover bg-right h-[35rem]">
        <div class="bg-black bg-opacity-60 h-full w-full flex flex-col items-center justify-center">
            <div class="flex flex-col items-center justify-center w-10/12">
                <h1>BEST Bratislava</h1>
                <!-- <hr class="border-t border-white w-2/12 border-solid border-1px"> -->
                <h2>Board of European students of technology</h2>
            </div>
        </div>
    </section>
    <!-- who we are -->
    <section class="flex justify-center items-center flex-col p-8 bg-secondary">
        <div class="w-10/12">
            <h3>
                {{ t("Home.whoWeAre") }}
            </h3>
            {{ t("Home.textWhoWeAre") }}
        </div>

    </section>

    <!-- vision minion -->
    <section class="bg-primary p-8">
        <h1 class="text-center text-2xl text-secondary font-semibold m-0 p-5">{{ t("Identity.identity") }}</h1>
        <div class="flex max-sm:flex-col items-center">
            <Identity class="text-secondary" icon="pi-bullseye" :header="t('Identity.vision')"
                :text="t('Identity.visionText')" </Identity>
                <Identity class="text-secondary" icon="pi-check" :header="t('Identity.mision')"
                    :text="t('Identity.misionText')" </Identity>
        </div>
    </section>
    <!-- what we offer -->
    <section class="flex justify-center items-center flex-col p-8 bg-secondary text-primary">
        <div class="w-10/12">
            <h3 class="text-primary font-semibold">
                {{ t("Home.whatOffer") }}
            </h3>
            {{ t("Home.whatOfferText") }}
        </div>

    </section>
    <!-- values -->
    <section class="bg-primary flex flex-col p-5 items-center">
        <h3 class="bg-secondary text-center p-3 rounded shadow-md">BEST Spirit</h3>
        <div class="grid place-items-center grid-cols-1 md:grid-cols-2 md:gap-48 lg:grid-cols-5 gap-5  p-5 w-10/12">
            <Identity class="" icon="pi-face-smile" :header="t('Values.fun')"></Identity>
            <Identity class="" icon="pi-arrows-alt" :header="t('Values.flexibility')"></Identity>
            <Identity class="" icon="pi-user-plus" :header="t('Values.friendship')"></Identity>
            <Identity class="" icon="pi-check-circle" :header="t('Values.improvement')"></Identity>
            <Identity class="" icon="pi-comments" :header="t('Values.openMindness')"></Identity>
        </div>
    </section>


</template>

<style scoped>
.bg {
    background-image: url('../assets/hoodie.jpg');
}
</style>
