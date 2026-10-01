<template>
  <q-list>
    <q-item
      v-for="item in links"
      :key="item.label"
      clickable
      :to="item.to"
      class="btn--no-hover q-pa-md"
      exact
    >
      <q-item-section>
        <q-item-label class="text-h6 row items-center">
          <q-icon :name="item.icon" class="q-ml-sm" />
          <span class="q-ml-lg">{{ item.label }}</span>
        </q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script setup lang="ts">
const links = [
  { label: 'Home', icon: 'fa-solid fa-house', to: '/' },
  { label: 'Skills', icon: 'fa-solid fa-code', to: '/skills' },
  { label: 'Experience', icon: 'fa-solid fa-briefcase', to: '/experience' },
  { label: 'Projects', icon: 'fa-solid fa-diagram-project', to: '/projects' },
];
</script>
