import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueTabulator from 'vue-tabulator';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/src/jquery.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import '~vue-tabulator/dist/scss/bootstrap/tabulator_bootstrap4';
Vue.use(VueTabulator);

Vue.config.productionTip = false;

new Vue({
	router,
	render : (h) => h(App)
}).$mount('#app');
