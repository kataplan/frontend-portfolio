<template>
  <div class="home">
    <Presentation></Presentation>
    <Aptitudes></Aptitudes>
    <AboutMe></AboutMe>
  </div>
</template>

<script>
import Presentation from "@/components/Presentation";
import Aptitudes from "@/components/Aptitudes";
import AboutMe from "@/components/AboutMe";

export default {
  name: "Home",
  components: { Presentation, Aptitudes, AboutMe },
};
</script>

<style lang="scss">
.home{
  padding:0 5%;
  box-sizing: border-box;
  
}
  @media (max-width: 980px) {
    .home{
      padding: 0;
    }
  }


</style>