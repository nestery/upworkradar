<template>
  <v-row>
    <v-col>
      <v-btn color="primary" @click="onLogout">LOGOUT</v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  methods: {
    onLogout() {
      this.$api.auth.signOut()
    },
  },
}
</script>

<style></style>
