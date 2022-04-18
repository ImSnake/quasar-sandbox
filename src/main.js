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

import VueNumberFormat from 'vue-number-format'

createApp(App)
	.use(Quasar, quasarUserOptions)
	.use(store)
	.use(router)
	.use(HighchartsVue)
	.use(VueNumberFormat, {
		prefix: '',
		suffix: '',
		decimal: ',',
		thousand: ' ',
		precision: 0,
		acceptNegative: false,
		isInteger: true
	})
	.mount('#app');
