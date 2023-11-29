<template>
  <v-container>
    <v-row class="d-flex">
      <v-text-field v-model="title" />
      <v-file-input v-model="img" />
      <v-btn @click="addPhoto">Add</v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'PhotoForm',
  data: () => ({
    title: '',
    img: null,
  }),
  methods: {
    addPhoto() {
      // This method is executed in the following way to demonstrate the inverse relationship
      const reader = new FileReader();
      reader.onload = () => {
        const photo = {
          id: Date.now(),
          title: this.title,
          url: reader.result,
        }
        this.$emit('addPhoto', photo)
        this.title = '';
        this.img = null;
      }
      reader.readAsDataURL(this.img)
    },
  },
}
</script>

<style lang="scss" scoped>

</style>