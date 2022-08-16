import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import AboutPage from "./pages/AboutPage.vue";
import TheWrapper from "./components/UI/TheWrapper.vue";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: HomePage },
        { path: "/about", component: AboutPage },
    ],
});

const app = createApp(App);
app.component("the-wrapper", TheWrapper);
app.use(router);
app.mount("#app");