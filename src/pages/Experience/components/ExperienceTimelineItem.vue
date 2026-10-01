<template>
  <q-timeline-entry
    :title="job.role"
    :subtitle="durationLabel"
    :side="side"
    :color="isCurrent ? 'primary' : 'grey-6'"
    :icon="isCurrent ? 'fa-solid fa-circle-dot' : 'fa-solid fa-briefcase'"
  >
    <div class="text-h4">{{ job.company }} · {{ job.type }}</div>
    <div class="text-h5 q-mb-sm">{{ job.summary }}</div>
    <ul class="q-pl-md q-mb-sm">
      <li v-for="point in job.achievements" :key="point" class="text-left text-subtitle1">{{ point }}</li>
    </ul>
    <div class="row q-gutter-xs">
      <q-chip v-for="tech in job.techStack" :key="tech" dense outline class="text-subtitle1">
        {{ tech }}
      </q-chip>
    </div>
  </q-timeline-entry>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { ExperienceJob } from 'src/data/experience/types';

const props = defineProps<{ job: ExperienceJob; side: 'left' | 'right' }>();

const isCurrent = computed(() => props.job.end === null);
const durationLabel = computed(() =>
  props.job.end ? `${props.job.start} – ${props.job.end}` : `${props.job.start} – Present`
);
</script>
