<script setup>
import { RouterLink, RouterView } from "vue-router";
import Footer from "./layout/Footer.vue";
import Header from "./layout/Header.vue";
</script>

<template>
  <Header v-if="showHeader" />
  <RouterView />
  <Footer v-if="showHeader" />
</template>

<script>
export default {
  data() {
    return {
      showHeader: true,
    };
  },
  watch: {
    $route(to, from) {
      if (to.name === "login" || to.name === "register") {
        this.showHeader = false;
      } else {
        this.showHeader = true;
      }
    },
  },
};
</script>
