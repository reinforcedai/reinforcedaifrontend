<template>
  <v-row justify="center">

    <v-col cols="12">
      <v-img
        :src="getStrapiMedia(featured.article.image.url)"
        class="blog-hero-img"
      >
        <v-row align="center" justify="center" class="fill-height">
          <v-col cols="6">
            <v-card-title class="primary--text text-h4">{{ homepage.hero.title }}</v-card-title>
            <v-card-title class="primary--text text-capitalize">{{ featured.article.title }}</v-card-title>
            <v-btn
              :to="{ name: 'blog-slug', params: { slug: featured.article.slug } }"
              tile
              text
              x-large
              color="success"
            >
              ...Read More
            </v-btn>
          </v-col>
        </v-row>
      </v-img>
    </v-col>

  </v-row>
</template>

<script>
import { getStrapiMedia } from "../utils/medias";

export default {
  data() {
      return {
        featured: {},
        homepage: {},
      }
    },
    async fetch() {
      this.featured = await this.$strapi.find("featured-post")
      this.homepage = await this.$strapi.find("homepage")
    },

  methods: {
    getStrapiMedia,
  },

}
</script>

<style scoped>
.blog-hero-img {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin-top: -76px;
  height: 40vh;
}
</style>
