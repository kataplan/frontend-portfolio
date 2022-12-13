<template>
  <div class="home">
    <transition appear @before-enter="beforeEnter" @enter="enter">
      <Presentation></Presentation>
    </transition>
    <transition appear @before-enter="beforeEnter" @enter="enter">
      <Aptitudes></Aptitudes>
    </transition>
    <transition appear @before-enter="beforeEnter" @enter="enter">
      <AboutMe></AboutMe>
    </transition>
    <!-- <transition appear @before-enter="beforeEnter" @enter="enter">
      <Showcase></Showcase>
    </transition> -->

  </div>
</template>

<script>
import Presentation from "@/components/Presentation";
import Aptitudes from "@/components/Aptitudes";
import AboutMe from "@/components/AboutMe";
//import Showcase from "@/components/Showcase"
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default {
  name: "Home",
  components: { Presentation, Aptitudes, AboutMe /* Showcase */ },
  setup(){
    const beforeEnter =(el) =>{
      el.style.transform = 'translateY(60px)'
      el.style.opacity = 0
    }
    const enter =(el) =>{
      gsap.to(el,{
        scrollTrigger: el,
        duration:1.5,
        y:0,
        opacity:1,
        ease: 'Power0.out'
      })
    }

    return{beforeEnter, enter}
  }
};
</script>

<style lang="scss">
.home {
  padding: 0 5%;
  box-sizing: border-box;

}

@media (max-width: 980px) {
  .home {
    padding: 0;
  }
}
</style>