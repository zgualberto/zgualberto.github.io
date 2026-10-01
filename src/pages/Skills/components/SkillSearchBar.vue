<template>
  <div class="q-mb-sm">
    <q-input :model-value="search" label="Search for skills" outlined clearable @update:model-value="onSearch" />
    <q-toggle :model-value="precise" label="Precise searching" @update:model-value="onPrecise" />
  </div>
</template>

<script setup lang="ts">
defineProps<{ search: string; precise: boolean }>();

const emit = defineEmits<{
  (e: 'update:search', value: string): void;
  (e: 'update:precise', value: boolean): void;
}>();

function onSearch(value: string | number | null) {
  emit('update:search', String(value ?? ''));
}

function onPrecise(value: boolean) {
  emit('update:precise', value);
}
</script>
