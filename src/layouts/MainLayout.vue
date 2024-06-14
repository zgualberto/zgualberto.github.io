<template>
  <q-layout view="lHh Lpr lFf">
    <q-header :class="$q.dark.isActive ? 'bg-dark' : 'bg-white'">
      <q-toolbar v-if="$q.screen.lt.md">
        <q-btn
          flat
          dense
          round
          icon="fa-solid fa-bars-staggered"
          aria-label="Menu"
          :class="{
            'text-white': $q.dark.isActive,
            'text-black': !$q.dark.isActive,
          }"
          @click="toggleLeftDrawer"
        />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" style="overflow: hidden">
      <div class="row items-start full-height">
        <div class="q-pt-lg q-px-lg text-center">
          <div class="row justify-center full-width">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="/src/assets/images/2x2.jpg" />
            </q-avatar>
          </div>
          <div class="full-width">
            <div class="text-weight-bold">Ziegfrid N. Gualberto</div>
            <a
              @click="handleEmailClipboard"
              class="text-overline row no-wrap items-center cursor-pointer"
            >
              ziegfrid.gualberto@gmail.com
              <q-icon
                size="15px"
                class="email-clipboard-icon q-pl-sm"
                :name="emailClipboardIcon"
              ></q-icon>
            </a>
          </div>
        </div>

        <div class="full-width">
          <q-list>
            <transition-group
              appear
              enter-active-class="animated fadeInRight"
              leave-active-class="animated fadeOutLeft"
            >
              <q-item
                clickable
                v-for="(item, key) in navigationLinks"
                :key="key"
                :to="item.to"
                class="btn--no-hover q-pa-md rounded-borders"
                exact
              >
                <q-item-section :to="item.to">
                  <q-item-label class="text-h6 row items-center">
                    <q-icon :name="item.icon" class="q-ml-sm"></q-icon>
                    <span class="q-ml-lg text-left">{{ item.label }}</span>
                  </q-item-label>
                </q-item-section>
              </q-item>
            </transition-group>
          </q-list>
        </div>

        <div class="self-end row justify-around full-width q-mb-md">
          <q-btn
            flat
            icon="fa-brands fa-viber"
            href="viber://chat?number=09176523658"
            class="btn--no-hover"
          ></q-btn>
          <q-btn
            flat
            icon="fa-brands fa-whatsapp"
            target="_blank"
            href="https://wa.me/639176523658"
            class="btn--no-hover"
          ></q-btn>
          <q-btn
            flat
            icon="fa-solid fa-comment-sms"
            href="sms://+639176523658"
            class="btn--no-hover"
          ></q-btn>
          <q-btn
            flat
            icon="fa-brands fa-linkedin"
            target="_blank"
            href="https://www.linkedin.com/in/ziegfrid-gualberto/"
            class="btn--no-hover"
          ></q-btn>
          <q-btn
            flat
            icon="fa-brands fa-github"
            target="_blank"
            href="https://github.com/zgualberto"
            class="btn--no-hover"
          ></q-btn>
        </div>
      </div>
    </q-drawer>

    <q-page-container>
      <q-page class="q-pa-lg" :style="`height: ${windowInnerHeight}px;`">
        <router-view v-slot="{ Component }">
          <transition
            appear
            enter-active-class="animated fadeInRight"
            leave-active-class="animated fadeOutLeft"
          >
            <component :is="Component" />
          </transition>
        </router-view>
      </q-page>
      <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <q-btn
          fab
          icon="fa-solid fa-circle-half-stroke"
          :color="$q.dark.isActive ? 'white' : 'dark'"
          @click="$q.dark.toggle"
          :class="$q.dark.isActive ? 'text-black' : 'text-white'"
        />
      </q-page-sticky>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { copyToClipboard, useQuasar } from 'quasar';
import { ref } from 'vue';

const q = useQuasar();

const windowInnerHeight = ref(window.innerHeight);

defineOptions({
  name: 'MainLayout',
});

const navigationLinks = [
  { label: 'Home', icon: 'fa-solid fa-house', to: '/' },
  { label: 'Skills', icon: 'fa-solid fa-code', to: '/skills' },
  { label: 'Experience', icon: 'fa-solid fa-briefcase', to: '/experience' },
];

const leftDrawerOpen = ref(!q.screen.lt.sm ? true : false);
const emailClipboardIcon = ref('fa-regular fa-copy');

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

const handleEmailClipboard = () => {
  copyToClipboard('ziegfrid.gualberto@gmail.com');
  emailClipboardIcon.value = 'fa-solid fa-clipboard-check';
};
</script>
