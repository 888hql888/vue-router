import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import router from './router/router'
import less from 'less'

Vue.use(Router, less)
Vue.config.productionTip = false
new Vue({
    render: h => h(App),
    router
}).$mount('#app')