<template>
  <v-row justify="center" class="secondary" no-gutters>

    <v-col cols="12">
      <v-img
        src="https://res.cloudinary.com/reinforcedai/image/upload/v1639236463/ml-service-img_gi8jk5.svg"
        class="services-hero-bg"
      >
        <v-row align="center" justify="left" class="fill-height">
          <v-col cols="10" md="4" class="pl-10">
            <h2 class="primary--text font-weight-black text-md-h2 text-h4 pt-16">AI And Machine Learning</h2>
            <p class="primary--text pt-3">
              Powering Your Software Applications With The Most Efficient Algorithms In Machine Learning, Deep Learning, Computer Vision And Natural Language Processing. We leverage the most popular open-source frameworks such as TensorFlow and PyTorch to build your product.
            </p>
          </v-col>
        </v-row>
      </v-img>
    </v-col>

    <v-col cols="12" class="pa-5">
      <v-row
        justify="center"
        align="center"
        class="accent--text"
        style="height: 80vh"
      >
        <v-col cols="12" md="6">
          <h3 class="text-h4 font-weight-black success--text mb-3">Data Science</h3>
          <p class="primary--text">
            From data analysis, manipulation, modelling, data engineering, data visualization to predictive analytics, we help organizations interprete complex data and gain useful insights that facilitates intelligent business decisions.
          </p>
        </v-col>
        <v-col cols="12" md="6">
          <v-lazy>
            <v-img src="https://res.cloudinary.com/reinforcedai/image/upload/v1633282741/ds-services-img_t6yv2g.svg"></v-img>
          </v-lazy>
        </v-col>
      </v-row>
    </v-col>

    <v-col cols="12" class="info pa-5">
      <v-row
        justify="center"
        align="center"
        class="accent--text"
      >
        <v-col cols="12" md="6">
          <h3 class="text-h4 font-weight-black success--text mb-3">Software Development</h3>
          <li class="primary--text">
            Frontend Web Development
          </li>
          <li class="primary--text">
            Backend Web Development
          </li>
          <li class="primary--text">
            Mobile App Development
          </li>
          <li class="primary--text">
            Cloud Computing
          </li>
          <li class="primary--text">
            Blockchain Technology
          </li>
          <p class="primary--text">
            Our development team ensures that the business logic of your application is secure, reliable and scalable. Our developers are ready to build the beautiful interface, user-friendly and mobile-first application for you. We leverage the power of the most popular and modern technologies to build your application.
          </p>
        </v-col>
        <v-col cols="12" md="6">
          <v-lazy>
            <v-img src="https://res.cloudinary.com/reinforcedai/image/upload/v1635585311/software-services-img_ehlkzu.png"></v-img>
          </v-lazy>
        </v-col>
      </v-row>
    </v-col>


    <v-col cols="12" md="5" class="py-10">
      <ContactUsCard />
    </v-col>


    <SocialHead :title="title" :description="description" :image="image" />
  </v-row>
</template>
<script>

export default {
  data: () => ({
    title: 'Our Services',
    description: 'At Reinforced AI, We Build Your Software Products With Artificial Intelligence In Mind. This Is Why We Are A Preferred Choice In Developing Your Project. We Are A Community Of AI Experts And Software Engineers Dedicated To Building Innovative Products.',
    image: 'https://res.cloudinary.com/reinforcedai/image/upload/v1633281312/services-bg_f2jrcc.svg',
    
  }),

}
</script>
<style scoped>
.services-hero-bg {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
}
</style>
