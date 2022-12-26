<template>
  <v-row justify="center" align="center" class="fill-height py-5" no-gutters>
    <v-col
      v-for='testimonial in testimonials'
      :key='testimonial.id'
      cols="12"
      md="4"
      class="pa-3"
    >
      <v-card
        flat
        tile
        min-height="200"
        class="info"
      >
        <div class="d-flex align-center pa-3">
          <v-avatar size="80">
            <v-img
              :src="getStrapiMedia(testimonial.image.url)"
              alt="photo"
            />
          </v-avatar>
          <div class="pl-2">
            <h3 class="primary--text text-left pb-1">{{ testimonial.name }}</h3>
            <small class="accent--text">{{ testimonial.portfolio }}</small> 
          </div>
        </div>
        <v-card-subtitle class="accent--text">{{ testimonial.testimony }}</v-card-subtitle> 
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { getStrapiMedia } from "../utils/medias";

export default {
  props: {
    testimonials: {
      type: Array,
      default: () => ({}),
    },
  },

  methods: {
    getStrapiMedia,
  },
}
</script>
