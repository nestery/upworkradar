<template>
  <v-toolbar
    v-touch="{
      up: () => openTrack(),
    }"
    bottom
    extended
    extension-height="58"
    class="justify-center flex-grow-0"
    height="70px"
  >
    <v-row class="align-center justify-space-between flex-nowrap fill-width">
      <v-col
        class="flex align-center flex-shrink-1 flex-grow-0"
        style="min-width: 68px"
      >
        <v-btn icon outlined>
          <v-icon>mdi-play</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="7">
        <v-row>
          <v-col class="body-2 text-truncate py-0 text-center" cols="12"
            >Some music lalala name ans some more</v-col
          >
          <v-col class="caption text-truncate py-0 text-center" cols="12"
            >balabla artist</v-col
          >
        </v-row>
      </v-col>
      <v-col
        class="flex align-center flex-shrink-1 flex-grow-0"
        style="min-width: 68px"
      >
        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <template v-slot:extension>
      <BottomNavigation />
    </template>
  </v-toolbar>
</template>

<script>
import { Events } from '@/core/events/events.enum'
export default {
  name: 'TheFooter',
  data: () => ({}),
  methods: {
    openTrack() {
      this.$eventBus.$emit(Events.TRACK_CARD, true)
    },
  },
}
</script>

<style></style>
