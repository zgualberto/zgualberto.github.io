<template>
  <div class="q-pb-lg">
    <div class="font-mono text-drac-purple q-mb-xs">## experience/</div>
    <h1 class="font-mono text-h5 text-weight-bold q-mt-none q-mb-xs">
      {{ totalYears }} years shipping backends
    </h1>
    <p class="font-mono text-caption q-mt-none q-mb-md" style="color: #9aa3c7">
      Senior Backend / Full Stack · Node.js · Laravel · Cloud
    </p>
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
