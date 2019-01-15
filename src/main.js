import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faHome,
  faRedo,
  faChartBar,
  faUtensils,
  faCar,
  faShoppingCart,
  faPlus
  } from '@fortawesome/free-solid-svg-icons'

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
import BottomBar from './components/BottomBar.vue'

Vue.config.productionTip = false;

Vue.use(VueMaterial);
Vue.use(BootstrapVue);

//Components
Vue.component('regular-expenses', RegularExpenses);
Vue.component('bottom-bar', BottomBar);

//Third party components
Vue.component('carousel', carousel);

//Fontawesome icons
library.add(faHome);
library.add(faRedo);
library.add(faChartBar);
library.add(faUtensils);
library.add(faCar);
library.add(faShoppingCart);
library.add(faPlus);
Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
