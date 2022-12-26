<template>
  <v-container class="text-center">
    <v-btn
      v-for="(link, i) in socialLinks"
      :key="i"
      outlined
      icon
      :href="link.url"
      target="_blank"
      class="mx-2 success--text"
    >
      <v-icon size="30px">
        {{ link.icon }}
      </v-icon>
    </v-btn>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
      ...mapGetters(['socialLinks']),
    },
}
</script>
