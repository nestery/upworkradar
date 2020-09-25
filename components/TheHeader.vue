<template>
  <v-app-bar
    :clipped-left="clipped"
    flat
    hide-on-scroll
    app
    class="flex align-center"
  >
    <v-toolbar-title> Home </v-toolbar-title>

    <v-spacer />
    <UploadDialog />
    <!-- <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon text color="primary" v-on="on">
          <v-icon>mdi-account-circle-outline</v-icon>
        </v-btn>
      </template>
      <v-list dense color="primary">
        <v-list-item @click="onLogout">
          <v-list-item-title
            ><v-icon left>mdi-exit-to-app</v-icon>Logout</v-list-item-title
          >
        </v-list-item>
      </v-list>
    </v-menu> -->
  </v-app-bar>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapGetters } = createNamespacedHelpers('auth')
export default {
  data: () => ({ clipped: false }),

  methods: {
    onLogout() {
      this.$api.auth.signOut()
    },
  },
}
</script>

<style></style>
