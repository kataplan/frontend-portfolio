<template>
  <section class="proyects">
    <h1 class="section-title">Mis Proyectos</h1>
    <p>Aquí se muestran los proyectos que he realizado y he sido parte.</p>
    <div class="proyects_grid">
      <TransitionGroup name="fade">
        <div v-for="(item, index) in proyects" :key="index">
          <ProyectCard :proyect="item"></ProyectCard>
        </div>
      </TransitionGroup>
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
  height: fit-content;
  padding: 84px 5%;
  box-sizing: border-box;
  &_grid {
    margin-top: 100px;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(250px, 0.5fr));
    grid-gap: 15px;
  }
}
</style>
