<template>
  <SkillSearchBar v-model:search="search" v-model:precise="precise" />
  <q-virtual-scroll :items="filtered" v-slot="{ item }" style="height: calc(100vh - 200px)">
    <SkillCategorySection :category="item" />
  </q-virtual-scroll>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { languages } from 'src/data/skills/languages';
import { backend } from 'src/data/skills/backend';
import { frontend } from 'src/data/skills/frontend';
import { databases } from 'src/data/skills/databases';
import { cloudDevOps } from 'src/data/skills/cloudDevOps';
import { architecture } from 'src/data/skills/architecture';
import { tools } from 'src/data/skills/tools';
import { webTech } from 'src/data/skills/webTech';
import { aiTools } from 'src/data/skills/aiTools';
import SkillSearchBar from './Skills/components/SkillSearchBar.vue';
import SkillCategorySection from './Skills/components/SkillCategorySection.vue';
import { useFilteredSkills } from './Skills/composables/useFilteredSkills';

const search = ref('');
const precise = ref(false);
const all = [languages, backend, frontend, databases, cloudDevOps, architecture, tools, webTech, aiTools];
const filtered = useFilteredSkills(all, search, precise);
</script>
