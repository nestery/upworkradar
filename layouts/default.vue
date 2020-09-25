<template>
  <v-app dark class="flex flex-column default-app">
    <!-- <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
    <TheHeader />
    <v-main class="default-main">
      <v-container class="py-0">
        <nuxt />
      </v-container>
    </v-main>
    <TheFooter />
    <v-dialog v-model="dialog" fullscreen transition="dialog-bottom-transition">
      <TrackCard />
    </v-dialog>
  </v-app>
</template>

<script>
import { Events } from '@/core/events/events.enum'
export default {
  data() {
    return {
      val: 100,
      dialog: false,
    }
  },
  created() {
    this.$eventBus.$on(Events.TRACK_CARD, (val) => {
      this.dialog = val
    })
  },
}
</script>

<style scoped>
.default-app {
  overflow: hidden;
  height: 100vh;
}

.default-main {
  overflow-y: auto;
  flex: auto;
}
</style>
