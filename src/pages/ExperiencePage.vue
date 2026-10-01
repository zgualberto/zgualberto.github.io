<template>
  <div class="q-px-sm q-pb-lg">
    <div class="text-h4 q-mb-sm text-center">
      Years of experience: <strong>{{ totalYears }} years</strong>
    </div>
    <div class="text-h5 q-mb-md text-center">Senior Backend / Full Stack · Node.js · Laravel · Cloud</div>
    <ExperienceTimeline :jobs="allJobs" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { recentJobs } from 'src/data/experience/recentJobs';
import { midJobs } from 'src/data/experience/midJobs';
import { earlierJobs } from 'src/data/experience/earlierJobs';
import ExperienceTimeline from './Experience/components/ExperienceTimeline.vue';

const allJobs = [...recentJobs, ...midJobs, ...earlierJobs];
const totalYears = computed(() => new Date().getFullYear() - 2012);
</script>
