<template>
  <v-row>
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      class="info"
    >
      <nuxt-link to="/" exact class="text-decoration-none">
        <v-system-bar
          height="55"
          class="secondary"
        >
          <v-img
            alt="logo"
            contain
            src="https://res.cloudinary.com/reinforcedai/image/upload/v1633528048/logo_vmks1m.svg"
            transition="scale-transition"
            width="200"
            class="shrink"
          />
        </v-system-bar>
      </nuxt-link>
      <v-list nav>

        <v-list-item
          v-for="(item, i) in navItems"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-content>
            <v-list-item-title class="text-uppercase font-weight-black primary--text" v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      v-scroll="onScroll"
      app
      flat
      :color="navThreshold ? 'secondary' : 'transparent'"
      scroll-threshold="300"
      hide-on-scroll
    >
      <v-app-bar-nav-icon
        color="success"
        class="hidden-md-and-up"
        @click.stop="drawer = !drawer"
      >
      </v-app-bar-nav-icon>
      <nuxt-link to="/" exact class="text-decoration-none ml-5">
        <v-img
          contain
          src="https://res.cloudinary.com/reinforcedai/image/upload/v1633528048/logo_vmks1m.svg"
          alt="logo"
          class="mx-auto"
          width="200"
        />
      </nuxt-link>
      <v-spacer/>
      <v-toolbar-items class="hidden-sm-and-down pr-10">
        <v-btn
          v-for="(item, i) in navItems"
          :key="i"
          :to="`${item.to}`"
          tile
          text
          x-large
          :class="navThreshold ? 'primary--text' : 'primary--text'"
        >
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      drawer: false,
      navThreshold: false,
    }
  },
  computed: {
      ...mapGetters(['siteName', 'navItems']),
    },
  
  methods: {
    onScroll: function (event) {
      if (window.pageYOffset > 20) {
        this.navThreshold = true
      } else {
        this.navThreshold = false
      }
    },
  },
}
</script>

<style scoped>

/* .v-list-item--active{
  background-color: rgb(0, 145, 48);
  color: rgb(59, 2, 97);
} */
/* .v-btn::before {
  background-color: transparent;
  color: blue;
}
.v-btn:hover {
  color: rgb(0, 145, 48);
} */

</style>