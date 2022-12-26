<template>
  <v-row justify="center" align="center" class="success fill-height pt-2 pb-3">
    <v-col cols="12" md="5">
      <h2 class="primary--text text-h6 text-center">Get The Latest Into Your Inbox</h2>
    </v-col>
    <v-col cols="10" md="5" class="primary--text">
      <v-form v-model="valid" ref="form" @submit.prevent="" class="mb-n8">
        <v-text-field
          solo
          v-model="email"
          required
          placeholder="Email"
          :rules="emailRules"
          color="primary"
        >
          <template v-slot:append>
            <v-btn height="49" elevation="0" class="secondary mr-n3 my-n4" @click="handleSuscribe">Subscribe</v-btn>
          </template>
        </v-text-field>
      </v-form>
    </v-col>
  </v-row>
</template>
<script>

export default ({
    data: () => ({
    submitting: false,
    error: null,
    valid: false,
    email: '',
    emailRules: [
      v => !!v || 'Email is required',
      v => /.+@.+/.test(v) || 'email must be valid',
    ],
  }),

  methods: {

    async handleSuscribe() {
      if (this.$refs.form.validate()) {
        try {
          await this.$strapi.create('newsletters', {
          email: this.email
          })
          this.$swal({
            title: 'Successful!',
            text: 'Thanks For Subscribing',
            icon: 'success',
            button: 'Ok',
          })
          this.$refs.form.reset()
        } catch (e) {
          this.$swal({
            title: e,
            icon: 'error',
            button: 'Ok',
          })
        }
      }
    }

  },

})
</script>
<style scoped>
.v-btn {
  border-radius: 0 0.25rem 0.25rem 0;
}
</style>
