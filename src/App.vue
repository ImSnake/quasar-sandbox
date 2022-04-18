<template>
<!--  <div id="app">-->
    <q-layout view="lHh Lpr lFf">
      <q-header class="app-header">
        <q-toolbar>
          <q-btn aria-label="Menu" icon="menu"
              dense flat round
              @click="leftDrawerOpen = !leftDrawerOpen" />
        </q-toolbar>

        <div class="row wrap justify-between items-baseline q-pl-md q-pr-md q-pb-sm q-pt-md q-mb-mb">
          <div class="text-h4">{{ currentRouteName }}</div>
          <div class="text-subtitle1">{{ todayDate }}</div>
          <q-img src="./assets/background.png" class="header-image absolute-top" />
        </div>
      </q-header>

      <q-drawer show-if-above
          v-model="leftDrawerOpen"
          :width="180"
          :breakpoint="600" >

        <q-scroll-area style="height: calc(100% - 120px); margin-top: 120px; border-right: 1px solid #ddd">
          <q-list padding>
            <q-item :to="{ name: 'Todo' }" clickable exact v-ripple  >
              <q-item-section avatar>
                <q-icon name="list" />
              </q-item-section>
              <q-item-section>Todo</q-item-section>
            </q-item>

            <q-item :to="{ name: 'Dashboard' }" clickable exact v-ripple  >
              <q-item-section avatar>
                <q-icon name="dashboard" />
              </q-item-section>
              <q-item-section>Dashboard</q-item-section>
            </q-item>

            <q-item :to="{ name: 'Income' }" clickable exact v-ripple  >
              <q-item-section avatar>
                <q-icon name="paid" />
              </q-item-section>
              <q-item-section>Income</q-item-section>
            </q-item>

            <q-item :to="{ name: 'Help' }" clickable exact v-ripple  >
              <q-item-section avatar>
                <q-icon name="help" />
              </q-item-section>
              <q-item-section>Help</q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>

        <q-img class="absolute-top" src="./assets/background.png" style="height: 120px">
          <div class="absolute-bottom bg-transparent">
            <div class="text-weight-bold">{{ $store.state.userName }}</div>
            <div>{{ $store.state.userContact }}</div>
          </div>
        </q-img>
      </q-drawer>

      <q-page-container>
        <router-view v-slot="{ Component }">
<!--          <keep-alive :include="['Dashboard', 'Income']">-->
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </router-view>
      </q-page-container>
    </q-layout>
<!--  </div>-->
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

<style scoped lang="scss">

.q-item__section--avatar{
  min-width: 40px;
}

.app-header {
  height: 120px;
}

.header-image {
  height: 100%;
  z-index:-1;
  //opacity: 0.9;
  //filter: grayscale(100%);
}


</style>

