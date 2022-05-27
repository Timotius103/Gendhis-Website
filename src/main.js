import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify'
import router from './router'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import VueAnimateOnScroll from 'vue-animate-onscroll'


Vue.use(VueAnimateOnScroll)
import { Icon } from '@iconify/vue2';

Vue.config.productionTip = false
Vue.component('icon', Icon);



new Vue({
  vuetify,
  router,
  render: h => h(App),
}).$mount('#app')