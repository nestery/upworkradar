<template>
  <v-dialog v-model="dialog" fullscreen>
    <template v-slot:activator="{ on }">
      <v-btn color="primary" small outlined v-on="on"> REGISTER </v-btn>
    </template>
    <v-card>
      <v-toolbar flat tile class="transparent mb-16">
        <v-toolbar-title class="h6">Registration</v-toolbar-title>
        <v-spacer></v-spacer
        ><v-btn icon @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card-text>
        <AuthForm :loading="loading" @submit="onSubmit"
      /></v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      dialog: false,
    }
  },
  methods: {
    onSubmit(userCredentials) {
      this.$emit('submit', userCredentials)
    },
  },
}
</script>

<style></style>
