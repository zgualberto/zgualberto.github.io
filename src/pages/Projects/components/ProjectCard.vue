<template>
  <div class="drac-surface project-card column">
    <div class="font-mono row items-center q-px-md q-pt-sm q-pb-xs" style="color: #6272a4">
      <span style="color: #ff5555">●</span>
      <span style="color: #ffb86c"> ●</span>
      <span style="color: #50fa7b"> ●</span>
      <span class="q-ml-sm ellipsis">./{{ project.name }}</span>
      <q-space />
      <q-badge color="dark" text-color="cyan" class="font-mono">{{ project.employer }}</q-badge>
    </div>
    <q-separator dark style="background: #44475a" />
    <div class="q-pa-md column col">
      <div class="text-subtitle1 text-weight-bold">{{ project.name }}</div>
      <div class="font-mono text-caption q-mb-xs" style="color: #9aa3c7">
        {{ project.duration }} · {{ project.role }} · team of {{ project.teamSize }}
      </div>
      <div class="text-body2 q-mb-md project-desc">{{ project.description }}</div>
      <q-space />
      <div class="row q-gutter-xs">
        <q-badge
          v-for="tech in project.stack"
          :key="tech"
          class="font-mono"
          style="background: #44475a; color: #f8f8f2"
        >
          {{ tech }}
        </q-badge>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Project } from 'src/data/projects/types';

defineProps<{ project: Project }>();
</script>

<style lang="scss" scoped>
.project-card {
  height: 100%;
  transition: border-color 0.2s ease;
}

.project-card:hover {
  border-color: #8be9fd;
}

.project-desc {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: #c9d1e3;
}
</style>
