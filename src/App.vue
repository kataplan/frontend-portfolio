<template>
  <section>
    <Navbar></Navbar>
    <router-view></router-view>
  </section>
</template>

<style lang="scss">
@import "@/styles/base";
</style>

<script>
import Navbar from "@/components/Navbar";
export default {
  name: "App",
  components: { Navbar },
};
</script>
