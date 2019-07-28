import VueNativeSock from 'vue-native-websocket';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(VueNativeSock, 'ws://192.168.0.6:9090', { store });

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
