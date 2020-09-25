<template>
  <v-btn class="fill-width" @click="signInWithGoogle">
    <img src="/img/google.svg" class="mr-4" alt="Sign in via Google" />GOOGLE
  </v-btn>
</template>

<script>
import AuthProviders from '~/core/auth/provider.factory'
import { ProvidersNames } from '~/core/auth/providers-names.enum'
export default {
  methods: {
    signInWithGoogle() {
      this.$emit('submit', AuthProviders(ProvidersNames.GOOGLE))
    },
  },
}
</script>

<style></style>
