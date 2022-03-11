import { storage } from "@/firebase/init";
import { ref, getDownloadURL } from "firebase/storage";

export default {
  name: "about-me",
  components: {},
  props: [],
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {
    handleDownload() {
      const gsReference = ref(storage, "Diego-Catalan-CV.pdf");
      getDownloadURL(gsReference)
        .then((url) => {
          window.open(url);
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
};
