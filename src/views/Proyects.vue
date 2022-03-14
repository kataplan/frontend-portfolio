<template>
  <section class="proyects">
    <h1 class="section-title">Proyectos</h1>
    <div v-for="(item, index) in proyects" :key="index">
      <div>{{ item.id }}</div>
      <div>{{ item.stack }}</div>
    </div>
  </section>
</template>

<script>
import { db,storage } from "@/firebase/init";
import { collection, getDocs } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";
export default {
  name: "Home",
  components: {},
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
        console.log(proyect)
        console.log(proyect.images[0]._key.path.segments)
        this.handleDownload("images/"+proyect.images[0]._key.path.segments[8])
      });
    },
    handleDownload(reference) {
      const gsReference = ref(storage, reference);
      getDownloadURL(gsReference)
        .then((url) => {
          <img src={url} />
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
}
</style>
