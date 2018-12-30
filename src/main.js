import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

//Vue Material
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

//Bootstrap
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//Owl Carousel
import carousel from 'v-owl-carousel'

import RegularExpenses from './components/RegularExpenses.vue'

Vue.config.productionTip = false;

Vue.use(VueMaterial);
Vue.use(BootstrapVue);

//Components
Vue.component('regular-expenses', RegularExpenses);

//Third party components
Vue.component('carousel', carousel);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
