<template>
  <div class="q-mb-md row q-gutter-sm">
    <q-input
      :model-value="search"
      label="Search skills"
      outlined
      dense
      dark
      clearable
      class="col-12 col-sm-6"
      @update:model-value="onSearch"
    />
    <q-toggle :model-value="precise" label="Precise" dark @update:model-value="onPrecise" />
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
