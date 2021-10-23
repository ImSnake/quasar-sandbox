import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { Quasar } from 'quasar';
import quasarUserOptions from './quasar-user-options';

import Highcharts from "highcharts";
import HighchartsVue from "highcharts-vue";
import hcMore from "highcharts/highcharts-more";
hcMore(Highcharts);

createApp(App)
	.use(Quasar, quasarUserOptions)
	.use(store)
	.use(router)
	.use(HighchartsVue)
	.mount('#app');
