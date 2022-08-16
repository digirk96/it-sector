<template>
  <section class="about">
    <the-wrapper class="wrapper">
      <div class="left">
        <h2 class="title">ABOUT US</h2>
        <p class="para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quod
          maxime natus aut accusamus, incidunt voluptas voluptatem veniam ipsum,
          nihil deserunt. Rerum reiciendis voluptate maiores officia
        </p>
        <p class="para">
          repudiandae, error placeat libero autem corporis vitae aliquam quae
          atque aperiam provident totam commodi sapiente porro accusantium
          ratione qui eos nihil! Eius, laborum adipisci?
        </p>
        <p class="para">
          repudiandae, error placeat libero autem corporis vitae aliquam quae
          atque aperiam provident totam commodi sapiente porro accusantium
          ratione qui eos nihil! Eius, laborum adipisci?
        </p>
        <router-link to="/about"><div class="btn">About Us</div></router-link>
      </div>
      <div class="right">
        <div class="img-wrapper">
          <img :src="About" alt="" />
        </div></div
    ></the-wrapper>
  </section>
</template>

<script>
export default {
  data() {
    return {
      About: require("../../assets/image/about.png"),
    };
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Fascinate&display=swap");
.about {
  width: 100%;
  background-color: rgba(148, 171, 216, 0.084);

  padding: 6rem 0;

  .wrapper {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    gap: 3rem;
    .left {
      flex: 1;
      width: 100%;
      .title {
        font-size: 4rem;
        color: rgba(148, 171, 216, 1);

        font-family: "Fascinate", cursive;
      }
      .para {
        color: rgba(60, 60, 60, 0.744);
        font-size: 1.5rem;
        font-weight: 600;
        text-align: justify;
        margin-top: 1rem;
      }
      .btn {
        background-color: #e26b91;
        padding: 1rem 4rem;
        display: inline-block;
        font-size: 1.3rem;
        border-radius: 0.8rem;
        color: #fff;
        font-weight: 600;
        margin-top: 2rem;
      }
    }
    .right {
      flex: 1;
      width: 100%;

      .img-wrapper {
        height: 50rem;
        width: 100%;
        img {
          object-fit: contain;
          width: 100%;
          height: 100%;
          object-position: left;
        }
      }
    }
  }
}
</style>
