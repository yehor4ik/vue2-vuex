<template>
  <v-container>
    <PhotoForm v-if="photos.length < 11" @addPhoto="addPhoto" />
    <div v-else>You can't add more new photos</div>
    <v-row>
      <Photo
          v-for="photo in $store.getters.getAllPhotos"
          :key="photo.id"
          :photo="photo"
      />
    </v-row>
    <PhotoDialog />
  </v-container>
</template>

<script>
import Photo from '@/components/photo/Photo.vue';
import PhotoForm from "@/components/photo/PhotoForm.vue";
import PhotoDialog from "@/components/photo/PhotoDialog.vue";
import{mapActions, mapMutations} from "vuex";

export default {
  name: 'PhotosPage',
  components: {
    Photo,
    PhotoForm,
    PhotoDialog,
  },
  data: () => ({
    photos: [],
    // currentPhoto: {},
    // dialogVisible: false,
  }),
  mounted() {
    // this.fetchTodo();
    this.fetchPhotos();
  },
  methods: {
    // fetchTodo() {
    //   this.axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10')
    //       .then(response => this.photos = response.data);
    // },
    ...mapActions(['fetchPhotos']),
    ...mapMutations(['setPhoto']),
    addPhoto(photo) {
      // This method is executed in the following way to demonstrate the inverse relationship
      this.setPhoto(photo)
    },
    openPhoto(photo) {
      this.currentPhoto = photo;
      this.dialogVisible = true;
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
