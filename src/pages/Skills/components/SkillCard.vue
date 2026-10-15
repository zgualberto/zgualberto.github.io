<template>
  <div class="drac-surface q-pa-md skill-card">
    <div class="row items-center justify-between no-wrap q-mb-xs">
      <div class="text-weight-bold ellipsis">{{ skill.label }}</div>
      <div class="font-mono text-caption q-ml-sm" style="color: #8be9fd">{{ skill.rating }}/10</div>
    </div>
    <q-linear-progress
      :value="skill.rating / 10"
      size="6px"
      rounded
      color="cyan"
      track-color="dark"
      style="background: #44475a"
    />
    <div class="font-mono text-caption q-mt-xs" style="color: #9aa3c7">
      {{ yearsExp }} yr{{ yearsExp === 1 ? '' : 's' }} · {{ lastUsed }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { Skill } from 'src/data/skills/types';
import { getLastUsed, getYearsExp } from 'src/data/skills/skillUtils';

const props = defineProps<{ skill: Skill }>();

const yearsExp = computed(() => getYearsExp(props.skill.startYear, props.skill.endYear));
const lastUsed = computed(() => getLastUsed(props.skill.endYear));
</script>

<style lang="scss" scoped>
.skill-card {
  height: 100%;
  transition: border-color 0.2s ease;
}

.skill-card:hover {
  border-color: #8be9fd;
}
</style>
