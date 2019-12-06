import Vue from "vue";
import app from "./base-module/app";
import router from "./base-module/router-base";
import store from "./base-module/store-base";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(app)
}).$mount("#app");
