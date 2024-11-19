<script setup>
import WorkingGroup from '@/components/WorkingGroup.vue';
import { t } from "@/i18n";
</script>

<template>
    <div class="">
        <h1 class="text-center text-3xl text-gray-900 font-extrabold m-10">
            BEST Bratislava
        </h1>

        <p class="m-5 text-xl">
            {{ t("Home.textWhoWeAre") }}
        </p>

        <h2 class="text-center text-primary font-semibold mt-10">
            {{ t("Bratislava.workingGroups") }}
        </h2>
        <WorkingGroup :name="t('Bratislava.pr')" :text="t('Bratislava.textPr')"></WorkingGroup>
        <WorkingGroup :name="t('Bratislava.cr')" :text="t('Bratislava.textCr')"></WorkingGroup>
        <WorkingGroup :name="t('Bratislava.hr')" :text="t('Bratislava.textHr')" </WorkingGroup>

    </div>
</template>