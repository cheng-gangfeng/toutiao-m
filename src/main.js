import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './styles/index.less'


import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
// 引入rem 基准值
import 'amfe-flexible'
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')