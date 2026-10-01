<template>
  <div class="row q-gutter-sm q-mb-md">
    <q-input :model-value="search" label="Search projects" outlined dense clearable @update:model-value="onSearch" />
    <q-select
      :model-value="employer"
      :options="employers"
      label="Employer"
      outlined
      dense
      clearable
      style="min-width: 200px"
      @update:model-value="onEmployer"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{ search: string; employer: string | null; employers: string[] }>();

const emit = defineEmits<{
  (e: 'update:search', value: string): void;
  (e: 'update:employer', value: string | null): void;
}>();

function onSearch(value: string | number | null) {
  emit('update:search', String(value ?? ''));
}

function onEmployer(value: string | null) {
  emit('update:employer', value);
}
</script>
