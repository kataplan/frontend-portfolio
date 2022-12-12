<template>
  <section>
    <Navbar></Navbar>
    <router-view v-slot="{Component}">
      <transition name="route" mode="out-in">
      <component :is="Component"></component>
      </transition>
    </router-view>
  </section>
</template>


<script>
import Navbar from "@/components/Navbar";
export default {
  name: "App",
  components: { Navbar },
};
</script>

<style lang="scss">
@import "@/styles/base";
  .route-enter-from{
    opacity: 0;
    transform: translateX(-100px);
  }
  .route-enter-active{
    transition: all 0.3s ease-out;
    position: fixed;
  }

  .route-leave-to{
    opacity: 0;
    position: fixed;

    transform: translateX(100px);
  }
  .route-leave-active{
    transition: all 0.3s ease-in;
    
  }
</style>