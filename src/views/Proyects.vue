<template>
  <section class="proyects">
    <h1 class="section-title">Mis Proyectos</h1>
    <p class="proyects_text">Aquí se muestran los proyectos y trabajos que he realizado y he sido parte.<br />Realiza
      una búsqueda para filtrar los proyectos, esta puede ser por nombre o tecnología utilizada.</p>
    <div class="input-container proyects_input-container group ">
      <input type="text" @keyup="onChange($event)" class="input" placeholder="Realiza una búsqueda" required />
      <label for="input" class="control-label">Escriba aquí</label>
      <i class="fa-solid fa-magnifying-glass proyects_search-icon"></i>

    </div>

    <div class="proyects_display">
      <TransitionGroup name="fade" appear @before-enter="beforeEnter" @enter="enter">
        <ProyectCard v-for="(item, index) in filteredProyects" :key="index" :proyect="item" :data-index="index">
        </ProyectCard>
      </TransitionGroup>
    </div>
  </section>
</template>

<script>
import { db, storage } from "@/firebase/init";
import { ref, getDownloadURL } from "firebase/storage";
import { collection, getDocs } from "firebase/firestore";
import ProyectCard from "@/components/ProyectCard";
import gsap from 'gsap'

export default {
  name: "Home",
  components: { ProyectCard },
  setup() {

    const beforeEnter = (el) => {
      el.style.transform = 'translateY(30px)'
      el.style.opacity = 0
    }
    const enter = (el, done) => {
      gsap.to(el, {
        duration: 1,
        y: 0,
        opacity: 1,
        ease: 'Power0.out',
        onComplete: done,
        delay: el.dataset.index * 0.35
      })
    }
    return { beforeEnter, enter }
  },
  data() {
    return { proyects: [], filteredProyects: [] };
  },

  methods: {
    onChange(e) {
      const search = e.target.value.toLowerCase();
      this.filteredProyects = this.proyects.filter((item) => {
        if (item.title.toLowerCase().includes(search)) {
          return item;
        } else {
          if (item.type.toLowerCase().includes(search)) {
            return item
          }
          let isIncluded = false
          item.stack.forEach((stck) => {
            if (stck.toLowerCase().includes(search)) {
              isIncluded = true;
            }
          })
          if (isIncluded) {
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
      this.handleThumbnail("thumbnails/" + proyect.thumbnail._key.path.segments[8], proyect)
    },
    sortArray(array) {
      array.sort((a, b) => {
        let fa = a.title.toLowerCase(),
          fb = b.title.toLowerCase();
        if (fa < fb) { return -1; }
        if (fa > fb) { return 1; }
        return 0;
      })

    },
    handleThumbnail(reference, proyect) {
      const gsReference = ref(storage, reference);
      getDownloadURL(gsReference)
        .then((url) => {
          proyect.imageThumbnail = url;
          this.proyects.push(proyect);
          this.filteredProyects.push(proyect);
          this.sortArray(this.filteredProyects)
          localStorage.setItem("proyects", JSON.stringify(this.filteredProyects))

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
    const storage = localStorage.getItem("proyects")
    const dateValue = localStorage.getItem("date")
    if (storage) {
      if (!dateValue) {
        localStorage.removeItem("proyects")
        localStorage.setItem("date", new Date())
      } else {
        const oldDate = Math.abs((new Date(dateValue).getTime() / 1000).toFixed(0));
        const currentDate = Math.abs((new Date().getTime() / 1000).toFixed(0));
        const diff = currentDate - oldDate
        const days = Math.floor(diff / 86400)
        if (days > 5) {
          localStorage.removeItem("proyects")
          localStorage.setItem("date", new Date())
          this.getProyects();

          return
        }
      }

      localStorage.setItem("date", new Date())
      this.filteredProyects = JSON.parse(storage)
      this.proyects = JSON.parse(storage)
    }
    else {
      this.getProyects();
      localStorage.setItem("date", new Date())

    }
  },
};
</script>

<style lang="scss">
.group {
  position: relative;

  padding: 5px 15px;
  border: 3px solid var(--text-color);
  border-radius: 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--body-fg);
  height: 50px;

}

.input {
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  background: none;
  color: var(--text-color);

}

/* LABEL ======================================= */
label {
  color: #999;
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}

/* active state */
.input:focus~label,
.input:valid~label {
  top: -22px;
  font-size: 14px;
  color: var(--accent);
}

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
    grid-template-columns: repeat(auto-fit, minmax(400px, 0.5fr));
    grid-gap: 15px;
    box-sizing: border-box;
    align-items: center;

  }

  &_text {
    font-size: 1rem;
    margin-bottom: 2rem;
  }

  &_input-container {
    width: 100%;
    max-width: 500px;
  }

  &_search-icon {
    color: var(--decor)
  }

  @media (max-width: 980px) {
    padding: 10px 5% 84px;


    &_display {
      display: flex;
      flex-direction: column;
      width: 90%;
      max-width: 600px;
    }

    &_text {
      width: 90%;
      margin-top: 0.9rem;
    }

    &_input-container {
      width: 90%;
    }
  }
}
</style>
