import { getDownloadURL, ref } from "firebase/storage"
import { storage } from "@/firebase/init";
import  ImageSlider  from "@/components/ImageSlider";
export default {
  name: 'proyect-details',
  components: { ImageSlider},
  props: { proyect: Object , handleClose:Function},
  data () {
    return {
      imagesUrl: [],
      isGithubAvailabe: true,
      isOnlineAvailabe:true,
      proyectDate:0,
      isLoaded:false,
    }
  },
  computed: {

  },
  mounted() {
    this.imagesUrl = []
    this.getImages()
    this.handleDate()
    if(this.proyect.github ==="private"){
      this.isGithubAvailabe=false;
    }
    if(this.proyect.online ==="none"){
      this.isOnlineAvailabe= false;
    }
    
  },
  methods: {
    async getImages() {
      this.proyect.images.forEach(element => {
        this.handleDownload("images/" + element._key.path.segments[8])
      });
    },

    handleDownload(reference) {
      const gsReference = ref(storage, reference);
      getDownloadURL(gsReference)
        .then((url) => {
          this.imagesUrl.push(url);

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
    closeModal(){
      this.handleClose()  
    },
    handleDate(){
      const date = new Date(this.proyect.date.seconds * 1000);
      const formattedDate = date.getMonth() +"/"+date.getFullYear()
      this.proyectDate = formattedDate
    }
  }
}




