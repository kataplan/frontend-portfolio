<template>
  <section class="proyects">
    <h1 class="section-title">Proyectos</h1>
    <div class="proyects_grid">
      <div v-for="(item, index) in proyects" :key="index">
        <ProyectCard :proyect="item"></ProyectCard>
      </div>
    </div>
  </section>
</template>

<script>
import { db } from "@/firebase/init";
import { collection, getDocs } from "firebase/firestore";
import ProyectCard from "@/components/ProyectCard";
export default {
  name: "Home",
  components: { ProyectCard },
  data() {
    return { proyects: [] };
  },
  methods: {
    async getProyects() {
      const querySnapshot = await getDocs(collection(db, "Proyects"));
      querySnapshot.forEach((doc) => {
        let proyect = doc.data();
        proyect.id = doc.id;
       
        this.proyects.push(proyect);
      });
    },
     
  },
  mounted() {
    this.getProyects();
  },
};
</script>

<style lang="scss">
.proyects {
  width: 100%;
  min-height: 100vh;
  padding: 84px 5%;
  box-sizing: border-box;
  &_grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, 400px);
    grid-gap: 5%;
  }
}
</style>
