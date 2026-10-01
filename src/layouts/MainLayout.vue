<template>
  <q-layout view="lHh Lpr lFf">
    <q-header :class="$q.dark.isActive ? 'bg-dark' : 'bg-white'">
      <q-toolbar v-if="$q.screen.lt.md">
        <q-btn flat dense round icon="fa-solid fa-bars-staggered" aria-label="Menu" @click="toggleDrawer" />
      </q-toolbar>
    </q-header>
    <q-drawer v-model="drawerOpen" style="overflow: hidden" :persistent="!$q.screen.lt.sm">
      <div class="row items-start full-height">
        <AppDrawerProfile />
        <div class="full-width"><AppNavigation /></div>
        <ContactActions />
      </div>
    </q-drawer>
    <q-page-container>
      <q-page class="q-py-sm page-container" :class="{ 'q-px-md': !$q.screen.lt.sm, 'q-px-sm': $q.screen.lt.sm }">
        <router-view v-slot="{ Component }">
          <transition appear enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutLeft">
            <component :is="Component" />
          </transition>
        </router-view>
      </q-page>
      <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <q-btn fab icon="fa-solid fa-circle-half-stroke" :color="$q.dark.isActive ? 'white' : 'dark'" @click="$q.dark.toggle" />
      </q-page-sticky>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import { ref } from 'vue';
import AppDrawerProfile from './MainLayout/components/AppDrawerProfile.vue';
import AppNavigation from './MainLayout/components/AppNavigation.vue';
import ContactActions from './MainLayout/components/ContactActions.vue';

defineOptions({ name: 'MainLayout' });

const q = useQuasar();
const drawerOpen = ref(!q.screen.lt.sm);

function toggleDrawer() {
  drawerOpen.value = !drawerOpen.value;
}
</script>

<style lang="scss" scoped>
.page-container {
  height: 100vh;
}
</style>
