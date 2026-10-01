<template>
  <div class="q-pt-lg q-px-lg text-center">
    <div class="row justify-center full-width">
      <q-avatar size="56px" class="q-mb-sm"><img :src="image" /></q-avatar>
    </div>
    <div class="text-weight-bold">Ziegfrid N. Gualberto</div>
    <a class="text-overline row no-wrap items-center cursor-pointer" @click="copyEmail">
      ziegfrid.gualberto@gmail.com
      <q-icon size="15px" class="q-pl-sm" :name="icon" />
    </a>
    <q-tooltip v-model="copied" @hide="resetIcon">Copied</q-tooltip>
  </div>
</template>

<script setup lang="ts">
import { copyToClipboard } from 'quasar';
import { ref } from 'vue';
import myPic from 'src/assets/images/2x2.jpg';

const image = ref(myPic);
const copied = ref(false);
const icon = ref('fa-regular fa-copy');

function copyEmail() {
  copyToClipboard('ziegfrid.gualberto@gmail.com');
  copied.value = true;
  icon.value = 'fa-solid fa-clipboard-check';
}

function resetIcon() {
  icon.value = 'fa-regular fa-copy';
}
</script>
