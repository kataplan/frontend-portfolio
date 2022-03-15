
  import { ref, getDownloadURL } from "firebase/storage";
  import { storage } from "@/firebase/init";
export default {

  name: 'proyect-card',
  components: {},
  props: {proyect:Object},
  data () {
    return {
      imagesUrl:[]
    }
  },
  computed: {

  },
  mounted () {
    this.imagesUrl = []
    this.getImages()
  },
  methods: {
    async getImages(){
      console.log(this.proyect.images)
      this.proyect.images.forEach(element => {
        
        this.handleDownload("images/" + element._key.path.segments[8])
      });

    },
    handleDownload(reference) {
    const gsReference = ref(storage, reference);
    getDownloadURL(gsReference)
      .then((url) => {
        this.imagesUrl.push(url) ;
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
  }
}


