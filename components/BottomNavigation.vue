<template>
  <v-bottom-navigation
    v-model="bottomNav"
    grow
    shift
    mandatory
    absolute
    background-color="secondary"
    active-class="primary"
  >
    <v-btn to="/">
      <span>Home</span>
      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn to="/playlist">
      <span>Playlist</span>
      <v-icon>mdi-playlist-music</v-icon>
    </v-btn>

    <v-btn to="/search">
      <span>Search</span>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn to="/profile">
      <span>Profile</span>
      <v-icon>mdi-account-circle</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  data: () => ({
    bottomNav: 0,
  }),
}
</script>

<style></style>
