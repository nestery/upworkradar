<template>
  <v-row class="flex-column">
    <v-col
      ><v-app-bar flat fixed class="transparent">
        <div class="caption">Don't have account?</div>
        <v-spacer />
        <RegisterModal
          :loading="loading"
          @submit="onSubmitRegistrationForm"
        /> </v-app-bar
    ></v-col>
    <v-col
      ><v-row align="center" justify="center">
        <v-col cols="8" class="text-center"> <Logo /></v-col>
        <v-col cols="10">
          <AuthForm :loading="loading" @submit="onSubmitLoginForm" />
        </v-col>
        <v-col cols="12" class="text-center">
          <div>OR</div>
        </v-col>
        <v-col cols="10" class="text-center">
          <AuthProviders @submit="onLoginWithProvider" />
        </v-col> </v-row
    ></v-col>
  </v-row>
</template>

<script>
export default {
  layout: 'auth',
  data: () => ({
    loading: false,
  }),
  methods: {
    async onSubmitLoginForm({ email, password }) {
      this.loading = true
      try {
        await this.$api.auth.signInWithEmailAndPassword(email, password)
      } catch (error) {
        console.error(error)
      } finally {
        this.loading = false
      }
    },
    async onLoginWithProvider(provider) {
      await this.$api.auth.signInWithRedirect(provider)
    },
    async onSubmitRegistrationForm({ email, password }) {
      this.loading = true
      try {
        await this.$api.auth.createUserWithEmailAndPassword(email, password)
      } catch (error) {
        console.error(error)
      } finally {
        this.loading = false
      }
    },
  },
}
</script>

<style></style>
