
export default {
  name: 'slider',
  components: {},
  props: {images:Array},
  data () {
    return {
      slideIndex:1,
    }
  },
  computed: {

  },
  mounted () {
    this.showSlides(1)
    
  },
  methods: {
    plusSlides(n) {
      this.showSlides(this.slideIndex += n);
    },
    showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("slider_slide");
      if (n > slides.length) {this.slideIndex = 1}
      if (n < 1) {this.slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
    
      slides[this.slideIndex-1].style.display = "block";
    }
  }
}


