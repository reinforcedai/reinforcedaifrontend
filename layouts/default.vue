<template>
  <v-app dark>
    <Navbar />
    <v-main>
      <v-container fluid class="pa-0">
        <nuxt keep-alive />
      </v-container>
    </v-main>
    <Footer/>
  </v-app>
</template>
<style>
html, body {
  background: #010101;
  margin-top: -40px;
}
</style>