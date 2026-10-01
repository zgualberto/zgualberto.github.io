<template>
  <div class="q-mb-lg">
    <div class="text-h5">{{ category.category }}</div>
    <div class="row" :class="{ 'justify-center': $q.screen.lt.md }">
      <div v-for="skill in category.items" :key="skill.label" class="q-my-md q-mx-sm col-auto">
        <SkillCard :skill="skill" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { SkillCategory } from 'src/data/skills/types';
import SkillCard from './SkillCard.vue';

defineProps<{ category: SkillCategory }>();
</script>
