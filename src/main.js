import Vue from "vue";
import firebase from 'firebase'
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
require('vue2-animate/dist/vue2-animate.min.css')
import App from "./App.vue";
import router from "./router";
import store from "./store";

const config = {
  apiKey: "AIzaSyBAuP6wbIoq17EcJ58CAA7wxVmxhxyv3ts",
  authDomain: "elevateutah-e4ebe.firebaseapp.com",
  databaseURL: "https://elevateutah-e4ebe.firebaseio.com",
  projectId: "elevateutah-e4ebe",
  storageBucket: "elevateutah-e4ebe.appspot.com",
  messagingSenderId: "410714932304"
}
firebase.initializeApp(config);

Vue.use(BootstrapVue);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
