<template>
  <v-row justify="center" class="secondary pb-10">

    <v-col cols="12" class="contact-hero-bg">
      <v-row align="center" justify="center" class="fill-height">
        <v-col cols="10" md="6">
          <h1 class="primary--text font-weight-black text-md-h2 text-h4 pt-16">{{ title }}</h1>
        </v-col>
      </v-row>
    </v-col>

    <v-col cols="11" class="text-center">
      <h2 class="primary--text text-capitalize mt-5">Our experts are ready for your project</h2>
    </v-col>

    <v-col cols="8" md="4">
      <contact />
      <v-btn
        v-for="(link, i) in socialLinks"
        :key="i"
        :href="link.url"
        text
        tile
        small
        class="success--text"
      >
      {{ link.text }}
      </v-btn>
    </v-col>

    <v-col cols="11" md="6">
      <ContactForm />
    </v-col>
  </v-row>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  data: () => ({
    title: 'Contact Us',
    description: '',
  }),

  computed: {
    ...mapGetters(['socialLinks']),
  },
  
}
</script>

<style scoped>
.contact-hero-bg {
  background-image: linear-gradient(to bottom, #8d0091, #e60062, #ff5f15, #e2b700, #81ff33);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 60vh;
}
</style>
