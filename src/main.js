import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {
    BootstrapVue,
    BootstrapVueIcons
} from 'bootstrap-vue'

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons)
new Vue({
    el: '#app',
    render: h => h(App)
})