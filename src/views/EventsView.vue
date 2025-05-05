<script setup>
import Event from "@/components/Event.vue";
import { t } from "@/i18n";
</script>

<template>
  <div class="flex flex-col items-center justify-center">
  
    <div class="flex flex-col items-center justify-center gap-4">
      <Event
        class="p-4"
        title="BEST Course"
        :description="t('Event.course')"
        :photos="[
          '/images/sRM_2024.jpg',
          '/images/course.jpg',
          '/images/course2.jpg',
          '/images/group2.JPG',
        ]"
        position="left"
      />
      <Event
        class="p-4"
        title="Skill it all"
        :description="t('Event.skillItAll')"
        :photos="[
          '/images/skillItAll.jpg',
          '/images/skillItAll2.jpg',
          '/images/skillItAll3.jpg',
        ]"
        position="right"
      />

      <Event
        class="p-4"
        title="Recruitment"
        :description="t('Event.recruitment')"
        :photos="['/images/goodZone.jpg', '/images/lga2.jpg']"
        position="left"
      />
      <Event
        class="p-4"
        title="Motivation weekend"
        :description="t('Event.motivationWeekend')"
        :photos="[
          '/images/group3.jpg',
          '/images/bfc1.JPG',
          '/images/bfc2.JPG',
          '/images/rm3.jpg',
        ]"
        position="right"
      />
    </div>
  </div>
</template>
