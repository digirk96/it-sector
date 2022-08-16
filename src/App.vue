<template>
  <the-header></the-header>
  <router-view></router-view>
  <the-footer></the-footer>
</template>
<script>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  font-size: inherit;
  color: inherit;
  list-style: none;
  box-sizing: border-box;
  text-decoration: none;
}
html {
  font-size: 62.5%;
}
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  line-height: 1.4;
  overflow-x: hidden;
}
</style>
