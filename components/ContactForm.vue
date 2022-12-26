<template>
  <v-row justify="center" no-gutters>
    <v-col cols="12">
      <v-form v-model="valid" ref="form" @submit.prevent="">          
          <v-row justify="center" align="center">
            <v-col cols="10">
              <h3 class="success--text text-center text-capitalize mb-10">Drop A Message</h3>
              <v-row>
                <v-col
                  cols="12"
                  sm="6"
                  class="py-0"
                >
                  <v-text-field
                    v-model="firstName"
                    label="First Name"
                    dark
                    required
                    outlined
                    placeholder="First Name"
                    :rules="nameRules"
                    class="success--text"
                    color="success"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  class="py-0"
                >
                  <v-text-field
                    v-model="lastName"
                    label="Last Name"
                    dark
                    required
                    outlined
                    placeholder="Last Name"
                    :rules="nameRules"
                    class="success--text"
                    color="success"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  class="pt-0"
                >
                  <v-text-field
                    v-model="email"
                    label="Email"
                    dark
                    required
                    outlined
                    placeholder="email address"
                    :rules="emailRules"
                    class="success--text"
                    color="success"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  class="pt-0"
                >
                <v-text-field
                  v-model="phoneNumber"
                  label="Phone Number"
                  dark
                  required
                  outlined
                  placeholder="Phone Number"
                  :rules="phoneNumberRules"
                  class="success--text"
                  color="success"
                ></v-text-field>
                </v-col>
              </v-row>

              <v-text-field
                v-model="country"
                label="Country"
                dark
                required
                outlined
                placeholder="Country"
                :rules="countryRules"
                class="success--text"
                color="success"
              ></v-text-field>

              <v-textarea
                v-model="message"
                label="Message"
                dark
                required
                outlined
                placeholder="Message"
                :rules="messageRules"
                class="success--text"
                color="success"
              ></v-textarea>
              <v-btn
                block
                large
                elevation="10"
                class="success text-uppercase font-weight-bold"
                @click="handleContact"
              >
                Submit
              </v-btn>
            </v-col>
          </v-row>
      </v-form>
    </v-col>
  </v-row>
</template>
<script>

export default {
  data: () => ({
    error: null,
    valid: false,
    title: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: null,
    country: '',
    message: '',

    nameRules: [
      v => !!v || 'Name is required',
    ],
    emailRules: [
      v => !!v || 'Email is required',
      v => /.+@.+/.test(v) || 'Email must be valid',
    ],
    phoneNumberRules: [
        v => !!v || 'Phone number is required',
    ],
    countryRules: [
      v => !!v || 'Country is required',
    ],
    messageRules: [
      v => !!v || 'Message is required',
    ],
  }),

  methods: {
    async handleContact() {
      if (this.$refs.form.validate()) {
        try {
          await this.$strapi.create('contacts', {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            phoneNumber: this.phoneNumber,
            country: this.country,
            message: this.message,
          }),
  
          this.$swal({
            title: 'Successful!',
            text: 'Thanks For Contacting Us',
            icon: 'success',
            button: 'Ok',
          }),
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

}
</script>