<template>
  <div class="fullscreen text-center q-pa-md flex flex-center">
    <div>
      <div class="text-h4">404</div>

      <div class="text-h5" style="opacity: 0.4">Oops. Nothing here...</div>

      <q-btn
        class="q-mt-lg"
        unelevated
        to="/"
        label="Go Home"
        no-caps
        outline
      />
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'ErrorNotFound',
});
</script>
