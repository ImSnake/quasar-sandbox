<template>
  <div id="app">
    <q-layout view="lHh Lpr lFf">
      <q-header>
        <q-toolbar>
          <q-btn aria-label="Menu" icon="menu"
              dense flat round
              @click="leftDrawerOpen = !leftDrawerOpen" />
        </q-toolbar>

        <div class="q-px-lg q-pt-xl q-mb-mb">
          <div class="text-h3">{{ currentRouteName }}</div>
          <div class="text-subtitle1">{{ todayDate }}</div>
          <q-img src="./assets/background.jpg" class="header-image absolute-top" />
        </div>
      </q-header>

      <q-drawer
          v-model="leftDrawerOpen"
          show-if-above
          :width="250"
          :breakpoint="600" >

        <q-scroll-area style="height: calc(100% - 176px); margin-top: 176px; border-right: 1px solid #ddd">
          <q-list padding>
              <q-item :to="{ name: 'Todo' }" clickable exact v-ripple  >
                <q-item-section avatar>
                  <q-icon name="list" />
                </q-item-section>
                <q-item-section>Todo</q-item-section>
              </q-item>

              <q-item :to="{ name: 'Help' }" clickable exact v-ripple  >
                <q-item-section avatar>
                  <q-icon name="help" />
                </q-item-section>
                <q-item-section>Help</q-item-section>
              </q-item>
          </q-list>
        </q-scroll-area>

        <q-img class="absolute-top" src="./assets/background.jpg" style="height: 176px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <div class="text-weight-bold">Username Username</div>
            <div>@username</div>
          </div>
        </q-img>
      </q-drawer>

      <q-page-container>
        <router-view v-slot="{ Component }">
          <keep-alive include="Todo">
            <component :is="Component" />
          </keep-alive>
        </router-view>
      </q-page-container>
    </q-layout>
  </div>
</template>


<script>
import { date } from 'quasar';

export default {
  name: 'layout',

  data() {
    return {
      leftDrawerOpen: false
    }
  },

  computed: {
    currentRouteName() {
      return this.$route.name;
    },
    todayDate() {
      let timeStamp = Date.now();
      return date.formatDate(timeStamp, 'dddd, D MMMM YYYY');
    }
  }
}
</script>

<style lang="scss">
.header-image {
  height: 100%;
  z-index:-1;
  opacity: 0.2;
  filter: grayscale(100%);
}
</style>

