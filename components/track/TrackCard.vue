<template>
  <v-card class="d-flex flex-column">
    <v-card-title
      v-touch="{
        down: () => closeTrack(),
      }"
      >TRACK CARD</v-card-title
    >
    <v-card-text class="text-center mt-10">
      <v-row class="flex-column">
        <v-col class="d-flex justify-center">
          <v-img height="300" width="300" class="secondary"></v-img
        ></v-col>
        <v-col class="py-0"> <div class="display-1">Lorem ipsum</div></v-col>
        <v-col class="py-0"> <div class="body-1">Lorem ipsum</div></v-col>
      </v-row>
      <v-row class="align-center mt-10">
        <v-col cols="12" class="px-0 pb-0">
          <v-slider
            v-model="val"
            hide-details
            thumb-label
            color="primary"
            track-color="secondary"
          ></v-slider
        ></v-col>
        <v-col class="flex-shrink-1 flex-grow-0 py-0">000:00</v-col>
        <v-spacer></v-spacer>
        <v-col class="flex-shrink-1 flex-grow-0 py-0">999:99</v-col>
      </v-row>
    </v-card-text>
    <v-card-actions class="mt-12">
      <v-toolbar class="transparent" tile flat>
        <v-row class="justify-around align-center">
          <v-col class="text-right"
            ><v-btn icon>
              <v-icon small>mdi-shuffle-variant</v-icon>
            </v-btn></v-col
          >
          <v-col>
            <v-btn icon large>
              <v-icon large>mdi-skip-previous</v-icon>
            </v-btn></v-col
          >
          <v-col>
            <v-btn icon outlined large>
              <v-icon large>mdi-play</v-icon>
            </v-btn></v-col
          >
          <v-col
            ><v-btn icon large>
              <v-icon large>mdi-skip-next</v-icon>
            </v-btn></v-col
          >
          <v-col>
            <v-btn icon>
              <v-icon small> mdi-repeat</v-icon>
            </v-btn></v-col
          >
        </v-row>
      </v-toolbar>
    </v-card-actions>
  </v-card>
</template>

<script>
import { Events } from '@/core/events/events.enum'
export default {
  methods: {
    closeTrack() {
      this.$eventBus.$emit(Events.TRACK_CARD, false)
    },
  },
}
</script>

<style></style>
