<template>
  <div>
    <ProjectFilters
      v-model:search="search"
      v-model:employer="employer"
      :employers="employers"
    />
    <div class="row q-col-gutter-md">
      <div v-for="project in filtered" :key="project.name" class="col-12 col-sm-6 col-md-4">
        <ProjectCard :project="project" />
      </div>
    </div>
    <div v-if="filtered.length === 0" class="text-center text-grey q-mt-lg">No projects match your filters.</div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { eyeballProjects } from 'src/data/projects/eyeballProjects';
import { slsaProjects } from 'src/data/projects/slsaProjects';
import { integrationProjects } from 'src/data/projects/integrationProjects';
import { freelanceProjects } from 'src/data/projects/freelanceProjects';
import ProjectCard from './Projects/components/ProjectCard.vue';
import ProjectFilters from './Projects/components/ProjectFilters.vue';

const search = ref('');
const employer = ref<string | null>(null);
const all = [...eyeballProjects, ...slsaProjects, ...integrationProjects, ...freelanceProjects];
const employers = [...new Set(all.map((project) => project.employer))];

const filtered = computed(() => {
  const term = search.value.toLowerCase();

  return all.filter((project) => matchesEmployer(project.employer) && matchesTerm(project, term));
});

function matchesEmployer(value: string): boolean {
  if (!employer.value) return true;

  return value === employer.value;
}

function matchesTerm(project: { name: string; stack: string[] }, term: string): boolean {
  if (!term) return true;

  const haystack = `${project.name} ${project.stack.join(' ')}`.toLowerCase();

  return haystack.includes(term);
}
</script>
