<template>
  <v-row justify="center" class="secondary" no-gutters>

    <v-col cols="12">
      <v-img
        src="https://res.cloudinary.com/reinforcedai/image/upload/v1633280347/about-hero-img_lzbh1m.svg"
        class="about-hero-bg"
      >
        <v-row align="center" justify="center" class="fill-height">
          <v-col cols="10" md="4" class="mt-16">
            <v-card-title class="primary--text font-weight-black text-md-h2 text-h4">{{ title }}</v-card-title>
            <v-card-subtitle class="primary--text">{{ description }}</v-card-subtitle>
            <!-- <v-card-subtitle class="primary--text pt-3">At Reinforced AI, We Build Your Software Products With Artificial Intelligence In Mind. This Is Why We Are A Preferred Choice In Developing Your Project. We Are A Community Of AI Experts And Software Engineers Dedicated To Building Innovative Products.</v-card-subtitle> -->
            <!-- <p>Mission: Bringing the frontiers in Artificial Intelligence to transform your organization</p>
            <p>Vision: Building safe and beneficial intelligent systems</p> -->
          </v-col>
        </v-row>
      </v-img>
    </v-col>

    <v-col cols="8" md="4" class="my-10">
      <contact />
    </v-col>

    <v-col cols="10" md="6" class="my-10">
      <ContactForm />
    </v-col>

    <SocialHead :title="title" :description="description" :image="image" />
    
  </v-row>
</template>

<script>

export default {
  data: () => ({
    title: 'About Us',
    description: 'Reinforced AI is an artificial intelligence and software engineering company. We are committed to utilizing the frontiers in Artificial Intelligence to build intelligent systems. As a company, we believe on thinking intelligently and we focus on making positive impacts.',
    image: 'https://res.cloudinary.com/reinforcedai/image/upload/v1633280347/about-hero-img_lzbh1m.svg'
  })
}
</script>

<style scoped>
.about-hero-bg {
  background-image: linear-gradient(to right top, #64dd17, #b5b300, #df8200, #ed4929, #dc005b, #dc005b, #dc005b, #dc005b, #ed4929, #df8200, #b5b300, #64dd17);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 70vh;
}
</style>
