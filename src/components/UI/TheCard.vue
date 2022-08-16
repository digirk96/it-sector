<template>
  <div class="card-wrap">
    <div class="img-wrapper">
      <img :src="cardimage" alt="" />
    </div>
    <div class="content">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-para">
        {{ desc }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["cardimage", "title", "desc"],
};
</script>

<style lang="scss" scoped>
.card-wrap {
  padding: 1rem;
  border-radius: 1rem;
  border: 1px solid #dfdede;

  .img-wrapper {
    width: 100%;
    height: 15rem;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      border-radius: 1rem;
    }
  }
  .content {
    margin-top: 1.5rem;
    .card-title {
      color: rgba(255, 206, 222, 1);

      font-size: 1.8rem;
      font-weight: bold;
    }
    .card-para {
      color: rgba(60, 60, 60, 0.744);
      text-align: justify;
      margin-top: 1rem;

      font-size: 1.4rem;
    }
  }
}
</style>
