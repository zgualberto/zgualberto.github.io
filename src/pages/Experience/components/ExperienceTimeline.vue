<template>
  <div class="row justify-center">
    <q-timeline :layout="$q.screen.lt.sm ? 'dense' : 'loose'" color="primary" class="col-12 col-md-10">
      <ExperienceTimelineItem
        v-for="(job, index) in jobs"
        :key="job.company"
        :job="job"
        :side="index % 2 === 0 ? 'left' : 'right'"
      />
      <q-timeline-entry
        title="B.S. Applied Mathematics with IT"
        subtitle="2007 – 2012"
        :side="jobs.length % 2 === 0 ? 'left' : 'right'"
        color="secondary"
        icon="fa-solid fa-graduation-cap"
      >
        <div class="text-subtitle2">Far Eastern University</div>
      </q-timeline-entry>
    </q-timeline>
  </div>
</template>

<script setup lang="ts">
import type { ExperienceJob } from 'src/data/experience/types';
import ExperienceTimelineItem from './ExperienceTimelineItem.vue';

defineProps<{ jobs: ExperienceJob[] }>();
</script>
