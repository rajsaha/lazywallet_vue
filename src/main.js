import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import Ripple from 'vue-ripple-directive'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faHome,
  faRedo,
  faChartBar,
  faUtensils,
  faCar,
  faShoppingCart,
  faPlus,
  faChevronDown,
  faSearch
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

//Components
import RegularExpenses from './components/RegularExpenses.vue';
import SearchRegularExpenses from './components/SearchRegularExpenses.vue';
import ExpenseCategories from './components/ExpenseCategories.vue';
import BottomBar from './components/BottomBar.vue';

Vue.config.productionTip = false;

Vue.use(VueMaterial);
Vue.use(BootstrapVue);

//Components
Vue.component('regular-expenses', RegularExpenses);
Vue.component('search-regular-expenses', SearchRegularExpenses);
Vue.component('bottom-bar', BottomBar);
Vue.component('expense-categories', ExpenseCategories);

//Third party components
Vue.component('carousel', carousel);
Vue.use(require('vue-moment'));

//Vue directives
Vue.directive('ripple', Ripple);

//Fontawesome icons
library.add(faHome);
library.add(faRedo);
library.add(faChartBar);
library.add(faUtensils);
library.add(faCar);
library.add(faShoppingCart);
library.add(faPlus);
library.add(faChevronDown);
library.add(faSearch);
Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
