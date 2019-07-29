import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import http from "./services/http";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;
http.setStore(store);
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
