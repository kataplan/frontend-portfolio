<template>
  <div class="home">
    <Presentation></Presentation>
    <Aptitudes></Aptitudes>
  </div>
</template>

<script>
import Presentation from "@/components/Presentation";
import Aptitudes from "@/components/Aptitudes"

export default {
  name: "Home",
  components: {Presentation,Aptitudes},
};
</script>

<style lang="scss">

</style>

