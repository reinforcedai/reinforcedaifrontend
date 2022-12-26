<template>
    <v-carousel
      :cycle="cycle"
      :show-arrows="false"
      hide-delimiter-background
      hide-delimiters
      height="100vh"
      class=""
    >
      <v-carousel-item
        v-for="(slide,i) in slides"
        :key="i"
        :src="slide.src"
      >
        <v-row align="center" justify="center" class="fill-height">
          <v-col class="text-center primary--text">
            <h1 class="text-uppercase font-weight-black text-md-h1 text-h3">Building</h1>
            <h1 class="text-uppercase font-weight-black text-md-h1 text-h3 my-5">Intelligent</h1>
            <h1 class="text-uppercase font-weight-black text-md-h1 text-h3">Systems</h1>
          </v-col>
        </v-row>
      </v-carousel-item>
    </v-carousel>
</template>
<script>
  export default {
    data () {
      return {
        cycle: true,
        slides: [
          {
            src: 'https://res.cloudinary.com/reinforcedai/image/upload/v1633284971/hero-img_inblme.svg',
            text: 'Building Intelligent Systems',
          },
        ],
      }
    },
  }
</script>

<style scoped>
.v-carousel {
  -webkit-text-stroke-color: #64DD17;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 1px;
}
</style>