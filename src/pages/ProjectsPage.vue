<template>
  <div>
    <div class="font-mono text-drac-purple q-mb-xs">## projects/</div>
    <h1 class="font-mono text-h5 text-weight-bold q-mt-none q-mb-md">Selected work</h1>
    <div class="row q-col-gutter-md">
      <div v-for="project in all" :key="project.name" class="col-12 col-sm-6 col-md-4">
        <ProjectCard :project="project" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { eyeballProjects } from 'src/data/projects/eyeballProjects';
import { slsaProjects } from 'src/data/projects/slsaProjects';
import { integrationProjects } from 'src/data/projects/integrationProjects';
import { freelanceProjects } from 'src/data/projects/freelanceProjects';
import ProjectCard from './Projects/components/ProjectCard.vue';

const all = [...eyeballProjects, ...slsaProjects, ...integrationProjects, ...freelanceProjects];
</script>
