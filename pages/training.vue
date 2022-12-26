<template>
  <v-row justify="center" align="center" class="secondary" no-gutters>

    <v-col cols="12">
      <v-img
        src="https://res.cloudinary.com/reinforcedai/image/upload/v1633284246/training-hero-img_wjzg39.svg"
        class="training-hero-bg"
      >
        <v-row align="center" justify="center" class="fill-height">
          <v-col cols="10" md="6">
            <h1 class="primary--text font-weight-black text-md-h2 text-4 pt-16">Training And Consulting</h1>
            <p class="primary--text">{{ description }}</p>
          </v-col>
        </v-row>
      </v-img>
    </v-col>

    <v-col cols="11">
      <v-row
        v-for="(item, i) in items"
        :key="item.i"
        justify="center"
        class="accent--text my-10"
      >
        <v-col cols="11" md="4" class="px-5">
          <nuxt-link to="" class="text-decoration-none">
            <h3 class="success--text text-h5 font-weight-bold pb-3">{{ item.title }}</h3>
            <p class="accent--text">{{ item.text }}</p>
          </nuxt-link>
        </v-col>
        <v-col cols="11" md="6">
          <v-lazy>
            <v-img :src="item.src"></v-img>
          </v-lazy>
        </v-col>
      </v-row>
    </v-col>

    <SocialHead :title="title" :description="description" :image="image" />
  </v-row>
</template>

<script>
export default {
  data: () => ({
    title: 'Training And Consulting',
    description: 'We are committed to building global AI talents. Learn from the experts in the industry and advance your career.',
    image: 'https://res.cloudinary.com/reinforcedai/image/upload/v1633284246/training-hero-img_wjzg39.svg',
    items: [
        {
          title: 'Machine Learning',
          text: 'Become a Machine Learning Engineer. Learn to build and deploy your machine learning project using the most popular open source tools and frameworks such as TensorFlow and PyTorch. Gain practical and hands-on experience with real-world data',
          src: 'https://res.cloudinary.com/reinforcedai/image/upload/v1633445812/ml-training-img_rfsroj.svg',
          to: ''
        },
        {
          title: 'Data Science',
          text: 'Build your data science portfolio and advance your career with real-world projects. In this program, you will learn data analysis, data engineering, data visualization and other methods that are neccessary to become a data scientist',
          src: 'https://res.cloudinary.com/reinforcedai/image/upload/v1633284522/ds-training-img_soasxo.svg',
          to: ''
        },

        {
          title: 'Web and Mobile App Developments',
          text: 'Become a frontend developer, backend developer or mobile app developer. Learn to design, build and deploy Frontend and Backend Web Development with modern technologies',
          src: 'https://res.cloudinary.com/reinforcedai/image/upload/v1635609102/web-mobile-training-img_gphktw.svg',
          to: ''
        },
      ],
    
  }),

}
</script>
<style scoped>
.training-hero-bg {
  background-image: linear-gradient(to right bottom, #2a5e09, #605a00, #904b00, #b82d28, #cb0066, #d2006a, #d9006d, #e00071, #db3731, #ba6200, #867f00, #3c9107);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 60vh;
}
</style>
