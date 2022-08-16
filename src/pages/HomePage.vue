<template>
  <div>
    <the-banner></the-banner>
    <the-about></the-about>
    <the-service></the-service>
  </div>
</template>

<script>
import TheBanner from "@/components/section/TheBanner.vue";
import TheAbout from "@/components/section/TheAbout.vue";
import TheService from "@/components/section/TheService.vue";
export default {
  components: {
    TheBanner,
    TheAbout,
    TheService,
  },
};
</script>

<style></style>
