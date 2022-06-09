import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'animate.css';
import vueSmoothScroll from 'vue-smooth-scroll'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@fortawesome/fontawesome-free/css/all.css'


Vue.use(vueSmoothScroll)
Vue.use(Vuetify)
const opts = {}
export default new Vuetify(opts)