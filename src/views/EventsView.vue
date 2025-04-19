<script setup>
import Event from "@/components/Event.vue";
import { t } from "@/i18n";
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <p class="w-10/12 text-xl p-4">
      {{ t("Event.info") }}
    </p>
    <div class="flex flex-col items-center justify-center gap-4">
      <Event
        class="p-4"
        title="BEST Course"
        :description="t('Event.course')"
        :photos="[
          '/best-webpage/images/sRM_2024.jpg',
          '/best-webpage/images/course.jpg',
          '/best-webpage/images/course2.jpg',
          '/best-webpage/images/group2.JPG',
        ]"
        position="left"
      />
      <Event
        class="p-4"
        title="Skill it all"
        :description="t('Event.skillItAll')"
        :photos="[
          '/best-webpage/images/skillItAll.jpg',
          '/best-webpage/images/skillItAll2.jpg',
          '/best-webpage/images/skillItAll3.jpg',
        ]"
        position="right"
      />

      <Event
        class="p-4"
        title="Recruitment"
        :description="t('Event.recruitment')"
        :photos="[
          '/best-webpage/images/goodZone.jpg',
          '/best-webpage/images/lga2.jpg',
        ]"
        position="left"
      />
      <Event
        class="p-4"
        title="Motivation weekend"
        :description="t('Event.motivationWeekend')"
        :photos="[
          '/best-webpage/images/group3.jpg',
          '/best-webpage/images/bfc1.JPG',
          '/best-webpage/images/bfc2.JPG',
          '/best-webpage/images/rm3.jpg',
        ]"
        position="right"
      />
    </div>
  </div>
</template>
