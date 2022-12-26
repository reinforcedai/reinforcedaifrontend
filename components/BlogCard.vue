<template>
  <v-row justify="center" align="center" fill-height>
    <v-col
        v-for='post in posts'
        :key='post.id'
        cols="12"
        md="6"
    >
      <v-lazy>
        <v-card
          :to="{ name: 'blog-slug', params: { slug: post.slug } }"
          link
          flat
          outlined
          min-height="500"
          class="info"
        >
          <v-img v-if="post.image.url" :src="getStrapiMedia(post.image.url)" height="300" />
          <v-card-title class="primary--text text-capitalize" v-if="post.title">{{ post.title }}</v-card-title>
          <v-card-subtitle class="accent--text" v-if="post.description">{{ post.description }}</v-card-subtitle>
          <v-card-actions>
            <v-btn
              :to="{ name: 'blog-slug', params: { slug: post.slug } }"
              tile text
              color="success"
            >
              Read More
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-lazy>
    </v-col>
  </v-row>
</template>

<script>
import { getStrapiMedia } from "../utils/medias";

export default {
  props: {
    posts: {
      type: Array,
      default: () => ({}),
    },
  },
  methods: {
    getStrapiMedia,
  },
};
</script>
