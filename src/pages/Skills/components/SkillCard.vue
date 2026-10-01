<template>
  <q-card flat bordered class="q-pa-sm skills-card">
    <div class="row justify-center items-center">
      <q-knob
        :model-value="skill.rating"
        show-value
        size="110px"
        :thickness="0.2"
        :max="10"
        color="primary"
        track-color="blue-grey-2"
        class="q-ma-md"
        readonly
      />
    </div>
    <q-separator class="q-mb-md" />
    <div class="text-center">{{ skill.label }}</div>
    <div class="text-center">Last Used: {{ lastUsed }}</div>
    <div class="text-center">Usage: {{ yearsExp }} year(s)</div>
  </q-card>
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
.skills-card {
  transition: all 0.5s ease-in-out;
}
</style>
