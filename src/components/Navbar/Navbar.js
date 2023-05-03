
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
    console.log(colorSchemeQueryList.documentElement)
    
    const setColorScheme = e => {
      if (e.matches) {
        console.log(document.documentElement)
        document.documentElement.className = "dark";
        this.currentColor="dark"
      } else {
        // Light
        document.documentElement.className = "light";
        this.currentColor="light"

      }
    }

    setColorScheme(colorSchemeQueryList);
   
  },
  methods: {
    changeScheme() {
      if (this.currentColor === "dark") { this.currentColor = "light" }
      else {
        if (this.currentColor == "light") { this.currentColor = "dark" }
      }
      document.documentElement.className = this.currentColor;
    }
  }
}


