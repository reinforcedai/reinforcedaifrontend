<template>
  <v-row justify="center" align="center" class="fill-height secondary">

    <v-col cols="12" class="text-center">
      <Carousel />
    </v-col>

    <!-- <v-col cols="12" class="mt-16 mb-5">
      <h1 class="text-center font-weight-black primary--text text-h4">Explore the impact of</h1>
      <h1 class="text-center font-weight-black success--text text-h4">Artificial Intelligence</h1>
    </v-col> -->

    <!-- <v-col
      v-for="(item, i) in items"
      :key="item.i"
      cols="12" md="4"
    >
      <v-card
        flat
        outlined
        tile
        min-height="400"
        class="info"
      >
        <v-card-actions class="pt-16">
          <v-icon size="100" class="success--text mx-auto">{{ item.icon }}</v-icon>
        </v-card-actions>
        <h2 class="primary--text text-center px-5">{{ item.title }}</h2>
        <p class="text-center px-5">{{ item.text }}</p>
      </v-card>
    </v-col> -->

    <!-- <v-col cols="12" class="py-16">
      <h2 class="primary--text text-center text-h6">Testimonials</h2>
      <Testimonials :testimonials=testimonials />
    </v-col> -->

    <v-col cols="12" class="mt-16">
      <Newsletter />
    </v-col>

    <v-col cols="12" md="5" class="my-16">
      <ContactUsCard />
    </v-col>

    <SocialHead :title="title" :description="description" />
  </v-row>
</template>
<script>

export default {
  data: () => ({
    transition: '',
    title: '',
    description: 'Bringing the frontiers in Artificial Intelligence to transform your organization',
    items: [
        {
          title: 'AI For Medical Diagnosis',
          text: '',
          icon: 'mdi-medical-bag',
        },
        {
          title: 'AI For Oil And Gas',
          text: '',
          icon: 'mdi-oil',
        },
        {
          title: 'AI For Business Leaders',
          text: '',
          icon: 'mdi-handshake-outline',
        },
      ],
    
  }),

  // async asyncData({ $strapi }) {
  //   return {
  //     testimonials: await $strapi.find("testimonials"),
  //   };
  // },
}
</script>

<style>

.v-sheet.v-card  {
  border-color: #64DD17;
  /* background: linear-gradient(219deg, rgba(161, 0, 0, 0.8), rgba(255,0,0,0) 80%),
              linear-gradient(156deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70%),
              linear-gradient(330deg, rgba(0, 0, 155, 0.8), rgba(0,0,255,0) 60%); */
}
</style>