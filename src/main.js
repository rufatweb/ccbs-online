import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import About from "./components/About.vue"
import Home from "./components/Home.vue"
import Services from "./components/Services.vue"
import Contact from "./components/Contact.vue"

Vue.config.productionTip = false;

Vue.use(VueRouter);



const routes = [
  { path: "/about", component: About },
  { path: "/services", component: Services },
  { path: "/contact", component: Contact },
  { path: "/", component: Home }
];


const router = new VueRouter({
  routes,
   mode: "history"
});

new Vue({
  el: "#app",
  router: router,
  render: h => h(App)
}).$mount("#app");
