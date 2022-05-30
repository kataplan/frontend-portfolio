<template>
  <section class="proyects">
    <h1 class="section-title">Mis Proyectos</h1>
    <p class="proyects_text">Aquí se muestran los proyectos y trabajos que he realizado y he sido parte.</p>
    <div class="input-container proyects_input-container">
      <input type="text" @keyup="onChange($event)" class="input" placeholder="Realiza una búsqueda"/>
      <span class="label">Realiza una búsqueda</span>
      <i class="fa-solid fa-magnifying-glass proyects_search-icon"></i>
    </div>
    
    <div class="proyects_display">
      <TransitionGroup name="fade">
        <ProyectCard v-for="(item, index) in filteredProyects" :key="index" :proyect="item"></ProyectCard>
      </TransitionGroup>
    </div>
  </section>
</template>

<script>
import { db,storage } from "@/firebase/init";
import { ref, getDownloadURL } from "firebase/storage";
import { collection, getDocs } from "firebase/firestore";
import ProyectCard from "@/components/ProyectCard";

export default {
  name: "Home",
  components: { ProyectCard },

  data() {
    return { proyects: [], filteredProyects:[]};
  },

  methods: {
    onChange(e){
      const search = e.target.value.toLowerCase();
      this.filteredProyects = this.proyects.filter((item)=> {
        if(item.title.toLowerCase().includes(search)) {
          return item;
        }else{
          let isIncluded = false
          item.stack.forEach((stck)=>{
            if(stck.toLowerCase().includes(search)) {
              isIncluded = true;
            }
          })
          if(isIncluded){
            return item
          }
        }
      })
      this.sortArray(this.filteredProyects)
    },

    async getProyects() {
      const querySnapshot = await getDocs(collection(db, "Proyects"));
      querySnapshot.forEach((doc) => {
        let proyect = doc.data();
        proyect.id = doc.id;
        this.getImages(proyect);
      });
    },
    async getImages(proyect) {
      this.handleThumbnail("thumbnails/" + proyect.thumbnail._key.path.segments[8],proyect)
    },
    sortArray(array){
      array.sort((a,b) => {
        let fa = a.title.toLowerCase(),
        fb = b.title.toLowerCase();
        if (fa < fb) {return -1;}
        if (fa > fb) {return 1;}
        return 0;
      })
      
    },
    handleThumbnail(reference,proyect) {
      const gsReference = ref(storage, reference);
      getDownloadURL(gsReference)
        .then((url) => {
          proyect.imageThumbnail = url;
          this.proyects.push(proyect);
          this.filteredProyects.push(proyect);
          this.sortArray(this.filteredProyects)
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
  height: fit-content;
  padding: 84px 5%;
  box-sizing: border-box;
  &_display {
    margin-top: 50px;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(250px, 0.5fr));
    grid-gap: 15px;
    box-sizing: border-box;

  }
  &_text{
    font-size: 1rem;
    margin-bottom:2rem ;
  }
  &_input-container{
      width: 20%;
      min-width: 300px;
  }
  &_search-icon{
    color: var(--decor)
  }
  @media (max-width: 980px) {
      padding: 10px 5% 84px;
      display: flex;
      flex-direction: column;
      align-items: center;
      &_display{
        display: flex;
        flex-direction: column;
        width: 90%;
        max-width: 600px;
      }
      &_text{
        width: 90%;
        text-align: center;
        margin-top: 0.9rem;
      }
      &_input-container{
        width: 90%;
      }
    }
}
</style>
