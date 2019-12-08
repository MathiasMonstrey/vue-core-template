import Vue from "vue";
import app from "./base-module/app";
import router from "./base-module/base-router";
import store from "./base-module/base-store";

import routes from './plugins/routes';

Vue.use(routes, { router });

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(app)
}).$mount("#app");
