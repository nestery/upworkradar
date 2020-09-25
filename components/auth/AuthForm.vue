<template>
  <div>
    <v-text-field
      v-model="userCredentials.email"
      label="email"
      outlined
    ></v-text-field>
    <v-text-field
      v-model="userCredentials.password"
      label="password"
      outlined
    ></v-text-field>
    <v-btn
      color="primary"
      :loading="loading"
      class="fill-width"
      @click="onSubmit"
      >sumbit</v-btn
    >
  </div>
</template>

<script>
export default {
  name: 'AuthForm',
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    userCredentials: {
      email: '',
      password: '',
    },
  }),
  methods: {
    onSubmit() {
      this.$emit('submit', this.userCredentials)
    },
  },
}
</script>

<style></style>
