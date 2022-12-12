import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
export default {
  name: 'aptitudes',
  components: {},
  props: [],
  data () {
    return {

    }
  },
  setup(){
    const beforeEnter =(el) =>{
      el.style.transform = 'translateY(30px)'
      el.style.opacity = 0
    }
    const enter =(el,done) =>{
      gsap.to(el,{
        scrollTrigger: el,
        duration:1,
        y:0,
        opacity:1,
        ease: 'Power0.out',
        onComplete:done,
        delay: el.dataset.index*0.5
      })
    }
    return {beforeEnter, enter}
  },
  computed: {

  },
  mounted () {

  },
  methods: {

  }
}


