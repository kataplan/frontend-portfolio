
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "@/firebase/init";
import ProyectDetails from "@/components/ProyectDetails"
export default {

  name: 'proyect-card',
  components: { ProyectDetails },
  props: { proyect: Object },
  data() {
    return {
      imagesUrl: [],
      thumbnail: String,
      open: false,
      isLoaded: false,
    }
  },
  computed: {

  },
  mounted() {
    this.imagesUrl = []
    this.getImages()
  },
  methods: {
    async getImages() {
      this.handleThumbnail("thumbnails/" + this.proyect.thumbnail._key.path.segments[8])

    },
    handleThumbnail(reference) {
      const gsReference = ref(storage, reference);
      getDownloadURL(gsReference)
        .then((url) => {
          this.thumbnail = url;
          this.isLoaded = true;
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
    getImgUrl(str) {
      var images = require.context('@/assets/icons', false, /\.svg$/)
      return images('./' + str.toLowerCase() + ".svg")
    },
    handleClose(){
      this.open = false;
    }
  }
}


