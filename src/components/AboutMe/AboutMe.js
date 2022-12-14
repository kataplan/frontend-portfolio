import { storage } from "@/firebase/init";
import { ref, getDownloadURL } from "firebase/storage";
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  name: "about-me",
  components: {},
  props: [],
  data() {
    return {};
  },
  setup(){
    const beforeEnter =(el) =>{
      el.style.transform =  'translateX(20px)'
      el.style.opacity = 0
    }
    const enter =(el,done) =>{
      gsap.to(el,{
        scrollTrigger: el,
        duration:1,
        y:0,
        opacity:1,
        ease: 'circ.out',
        onComplete:done,
        rotate:0,
        translateX:0,
        delay: el.dataset.index*0.5
      })
    }
    return {beforeEnter, enter}
  },
  computed: {},
  mounted() {},
  methods: {
    handleDownload() {
      const gsReference = ref(storage, "Diego-Catalan-CV.pdf");
      getDownloadURL(gsReference)
        .then((url) => {
          window.open(url);
        })
        .catch((error) => {
          switch (error.code) {
            case "storage/object-not-found":
              break;
            case "storage/unauthorized":
              break;
            case "storage/canceled":
              // User canceled  upload
              break;

            case "storage/unknown":
              break;
          }
        });
    },
  },
};
