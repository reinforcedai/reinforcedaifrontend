<template>

  <v-footer padless>
    <v-card flat tile width="100%" class="secondary text-center">
      <v-row class="success--text info py-16">
        <v-col cols="12" md="6">
          <nuxt-link to="/" exact class="text-decoration-none">
            <v-img
              contain
              src="https://res.cloudinary.com/reinforcedai/image/upload/v1633528129/footer-logo_sf8h6k.svg"
              width="300"
              class="mx-auto mt-5"
            />
          </nuxt-link>
        </v-col>
        
        <v-col cols="12" md="6" class="success--text text-center text-no-wrap">
          <contact />
        </v-col>

      </v-row>

      <v-card-text class="success--text font-weight-thin py-16">
        <social-links />
      </v-card-text>

      <v-card-text class="success--text info font-weight-thin py-16">
         <v-col cols="12" class="text-center">
          <v-btn
            v-for="(item, i) in navItems"
            :key="i"
            :to="`${item.to}`"
            tile
            text
            class="success--text text-capitalize"
          >
            {{ item.title }}
          </v-btn>
        </v-col>
      </v-card-text>

      <v-card-text class="success--text font-weight-thin py-16">
        &copy; {{ new Date().getFullYear() }} - {{ companyName }}
      </v-card-text>
    </v-card>
  </v-footer>

</template>

<script>
import { mapGetters } from 'vuex'
import Contact from '../pages/contact.vue'

export default {
  computed: {
    ...mapGetters(['companyName', 'navItems']),
  },
}
</script>
