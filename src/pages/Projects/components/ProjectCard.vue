<template>
  <q-card bordered class="project-card">
    <q-card-section>
      <div class="text-h6">{{ project.name }}</div>
      <div class="text-caption">{{ project.employer }} · {{ project.duration }}</div>
      <div class="text-caption q-mb-sm">{{ project.role }} · Team of {{ project.teamSize }}</div>
      <div class="text-body2 q-mb-sm">{{ project.description }}</div>
      <div class="row q-gutter-xs">
        <q-chip v-for="tech in project.stack" :key="tech" dense outline>{{ tech }}</q-chip>
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import type { Project } from 'src/data/projects/types';

defineProps<{ project: Project }>();
</script>

<style lang="scss" scoped>
.project-card {
  height: 100%;
}
</style>
