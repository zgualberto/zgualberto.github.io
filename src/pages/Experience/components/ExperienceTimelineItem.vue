<template>
  <q-timeline-entry
    :title="job.role"
    :subtitle="durationLabel"
    :side="side"
    :color="isCurrent ? 'primary' : 'grey-6'"
    :icon="isCurrent ? 'fa-solid fa-circle-dot' : 'fa-solid fa-briefcase'"
    class="exp-entry"
  >
    <div class="text-subtitle1 text-weight-bold">{{ job.company }} · {{ job.type }}</div>
    <div class="text-body2 q-mb-sm" style="color: #c9d1e3">{{ job.summary }}</div>
    <ul class="q-pl-md q-mb-sm">
      <li v-for="point in job.achievements" :key="point" class="text-left text-body2">{{ point }}</li>
    </ul>
    <div class="row q-gutter-xs">
      <q-badge
        v-for="tech in job.techStack"
        :key="tech"
        class="font-mono"
        style="background: #44475a; color: #f8f8f2"
      >
        {{ tech }}
      </q-badge>
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

<style lang="scss" scoped>
.exp-entry :deep(.q-timeline__title) {
  font-family: ui-monospace, 'Cascadia Code', 'JetBrains Mono', Menlo, Consolas, monospace;
  font-size: 1rem;
}

.exp-entry :deep(.q-timeline__subtitle) {
  font-family: ui-monospace, 'Cascadia Code', 'JetBrains Mono', Menlo, Consolas, monospace;
  font-size: 0.75rem;
  opacity: 0.7;
}
</style>
