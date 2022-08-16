<template>
  <section class="service">
    <the-wrapper class="wrapper">
      <h2 class="title">SERVICES</h2>
      <p class="para">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quod
        maxime natus aut accusamus, incidunt voluptas voluptatem veniam ipsum,
        nihil deserunt. Rerum reiciendis voluptate maiores officia
      </p>
      <div class="card-wrapper">
        <the-card
          v-for="service in services"
          :key="service.id"
          :title="service.title"
          :cardimage="service.cardimage"
          :desc="service.desc"
        ></the-card>
      </div>
    </the-wrapper>
  </section>
</template>
<script>
import TheCard from "../UI/TheCard.vue";
export default {
  components: {
    TheCard,
  },

  data() {
    return {
      services: [
        {
          id: "1",
          title: "Product Development",
          desc: "Beatae quod maxime natus aut accusamus, incidunt voluptas voluptatem veniam ipsum, nihil deserunt. Rerum reiciendis voluptate maiores officiaz",
          cardimage: require("../../assets/image/card1.png"),
        },
        {
          id: "2",
          title: "Product Development",
          desc: "Beatae quod maxime natus aut accusamus, incidunt voluptas voluptatem veniam ipsum, nihil deserunt. Rerum reiciendis voluptate maiores officiaz",
          cardimage: require("../../assets/image/card2.png"),
        },
        {
          id: "3",
          title: "Product Development",
          desc: "Beatae quod maxime natus aut accusamus, incidunt voluptas voluptatem veniam ipsum, nihil deserunt. Rerum reiciendis voluptate maiores officiaz",
          cardimage: require("../../assets/image/card3.png"),
        },
        {
          id: "4",
          title: "Product Development",
          desc: "Beatae quod maxime natus aut accusamus, incidunt voluptas voluptatem veniam ipsum, nihil deserunt. Rerum reiciendis voluptate maiores officiaz",
          cardimage: require("../../assets/image/card4.png"),
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Fascinate&display=swap");
.service {
  padding: 6rem 0;
  .wrapper {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    align-items: center;

    .title {
      font-size: 4rem;
      color: rgba(148, 171, 216, 1);

      font-family: "Fascinate", cursive;
    }
    .para {
      color: rgba(60, 60, 60, 0.744);
      font-size: 1.5rem;
      max-width: 75rem;
      text-align: center !important;
      font-weight: 600;
      text-align: justify;
      margin-top: 1rem;
    }
    .card-wrapper {
      display: grid;
      width: 100%;
      grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
      gap: 3rem;
    }
  }
}
</style>
