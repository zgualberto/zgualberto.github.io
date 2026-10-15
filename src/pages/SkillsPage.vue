<template>
  <div>
    <div class="font-mono text-drac-purple q-mb-xs">## skills/</div>
    <h1 class="font-mono text-h5 text-weight-bold q-mt-none q-mb-md">What I work with</h1>
    <SkillSearchBar v-model:search="search" v-model:precise="precise" />
    <div class="q-mt-md">
      <SkillCategorySection v-for="item in filtered" :key="item.category" :category="item" />
    </div>
    <div v-if="filtered.length === 0" class="text-center q-mt-lg font-mono" style="color: #9aa3c7">
      $ no matches — try clearing search
    </div>
  </div>
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
const all = [aiTools, languages, backend, frontend, databases, cloudDevOps, architecture, tools, webTech];
const filtered = useFilteredSkills(all, search, precise);
</script>
