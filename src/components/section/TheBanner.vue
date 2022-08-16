<template>
  <section class="banner">
    <the-wrapper class="wrapper"
      ><div class="left">
        <h1 class="title">
          DESIGNING FOR <br />
          <span>EVERYONE</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita qui
          eligendi enim voluptatibus deleniti at eaque provident, sunt aut eius
          tempora assumenda cumque illo impedit modi vitae facilis, nihil hic.
        </p>
        <router-link to="/contact"
          ><div class="btn">Contact Now</div></router-link
        >
      </div>
      <div class="right">
        <div class="img-wrapper">
          <img :src="Banner" />
        </div></div
    ></the-wrapper>
  </section>
</template>

<script>
export default {
  data() {
    return {
      Banner: require("../../assets/image/banner.png"),
    };
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Fascinate&display=swap");
.banner {
  width: 100%;
  height: calc(100vh - 7rem);
  margin-top: 7rem;

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    .left {
      width: 100%;
      flex: 1;

      h1 {
        font-size: 4rem;
        color: rgba(148, 171, 216, 1);

        font-family: "Fascinate", cursive;

        span {
          color: rgba(255, 206, 222, 1);
        }
      }

      p {
        color: rgba(60, 60, 60, 0.744);
        font-size: 1.5rem;
        font-weight: 600;
        max-width: 45rem;
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
      width: 100%;
      flex: 1.5;
      height: 100%;

      .img-wrapper {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        height: 100%;
        img {
          object-fit: cover;

          height: 70%;
        }
      }
    }
  }
}
</style>
