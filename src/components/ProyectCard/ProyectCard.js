

import ProyectDetails from "@/components/ProyectDetails"
export default {

  name: 'proyect-card',
  components: { ProyectDetails },
  props: { proyect: Object },
  data() {
    return {
      open: false,
    }
  },
  computed: {

  },
  mounted() {
  },
  methods: {
   
    handleClose(){
      this.open = false;
    }
  }
}


