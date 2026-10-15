<template>
  <section class="q-mb-xl">
    <div class="font-mono text-drac-purple q-mb-xs">## {{ category.category }}/</div>
    <div class="row q-col-gutter-sm">
      <div
        v-for="skill in category.items"
        :key="skill.label"
        class="col-12 col-sm-6 col-md-4 col-lg-3"
      >
        <SkillCard :skill="skill" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { SkillCategory } from 'src/data/skills/types';
import SkillCard from './SkillCard.vue';

defineProps<{ category: SkillCategory }>();
</script>
