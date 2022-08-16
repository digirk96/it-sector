<template>
  <header>
    <the-wrapper>
      <div class="wrapper">
        <router-link to="/"
          ><div class="logo-wrapper">
            <img :src="Image" />
            <h3>Hook Value</h3>
          </div>
        </router-link>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About Us</router-link></li>
          <li><router-link to="/service">Service</router-link></li>
          <li><router-link to="/contact">Contact Us</router-link></li>
        </ul>
      </div>
    </the-wrapper>
  </header>
</template>

<script>
import TheWrapper from "./UI/TheWrapper.vue";

export default {
  components: {
    TheWrapper,
  },
  data() {
    return {
      Image: require("../assets/image/logo.png"),
    };
  },
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Fascinate&display=swap");
header {
  height: 7rem;
  width: 100%;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;

  border-radius: 1rem;
  background-color: rgba(148, 171, 216, 0.1);
}
h3 {
  font-size: 2rem;
  font-family: "Fascinate", cursive;

  background: linear-gradient(
    90deg,
    rgba(255, 206, 222, 1) 0%,
    rgba(148, 171, 216, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.wrapper {
  display: flex;
  align-items: center;

  justify-content: space-between;
  height: 100%;
  width: 100%;
}
.logo-wrapper {
  height: 6.5rem;
  widows: 10rem;
  display: flex;
  align-items: center;

  justify-content: space-between;
}
img {
  height: 100%;
  object-fit: contain;
}
ul {
  display: flex;
  width: 25rem;
  justify-content: space-between;

  li {
    font-size: 1.4rem;
    font-weight: bold;
    color: rgba(255, 206, 222, 1);
  }
}
</style>
