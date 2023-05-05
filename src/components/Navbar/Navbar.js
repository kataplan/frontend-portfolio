
export default {
  name: 'navbar',
  components: {},
  props: [],
  data() {
    return {
      currentColor: "dark",
    }
  },
  computed: {

  },
  mounted() {
    const colorSchemeQueryList = window.matchMedia('(prefers-color-scheme: dark)');
    const color = localStorage.getItem('prefers-color-scheme')
    if (color) {
      this.currentColor = color
      document.documentElement.className = this.currentColor
    }
    else{
      setColorScheme(colorSchemeQueryList);
    }
    const setColorScheme = e => {
      if (e.matches) {
        document.documentElement.className = "dark";
        this.currentColor = "dark"
      } else {
        // Light
        document.documentElement.className = "light";
        this.currentColor = "light"

      }
    }


  },
  methods: {
    changeScheme() {
      if (this.currentColor === "dark") { this.currentColor = "light" }
      else {
        if (this.currentColor == "light") { this.currentColor = "dark" }
      }
      localStorage.setItem('prefers-color-scheme', this.currentColor)
      document.documentElement.className = this.currentColor;
    }
  }
}


