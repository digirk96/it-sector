<template>
  <div :class="mode"><slot></slot></div>
</template>

<script>
export default {
  props: ["mode"],
  data() {
    return {};
  },
};
</script>

<style scoped>
div {
  max-width: 120rem;
  width: 100%;
  margin: 0 auto;
}
</style>
