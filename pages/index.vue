<template>
  <v-row>
    <v-col cols="12" class="pa-0">
      <v-list v-if="allTracks.length" two-line>
        <template v-for="(item, index) in allTracks">
          <v-list-item :key="item.url" @click="">
            <v-list-item-avatar tile>
              <v-img aspect-ratio="1" src="img/soundtrack.svg"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title v-html="item.name"></v-list-item-title>
              <v-list-item-subtitle v-html="item.artist"></v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-menu bottom absolute transition="slide-y-transition">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn icon large v-bind="attrs" @click.stop="" v-on="on">
                    <v-icon>mdi-dots-vertical</v-icon>
                  </v-btn>
                </template>

                <v-list color="secondary">
                  <v-list-item v-for="(itm, i) in items" :key="i" @click="">
                    <v-list-item-title>{{ itm.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-list-item-action>
          </v-list-item>

          <v-divider
            v-if="index !== allTracks.length - 1"
            :key="item.name"
            inset
          ></v-divider>
        </template>
      </v-list>
    </v-col>
  </v-row>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapGetters, mapActions } = createNamespacedHelpers('audio')
export default {
  data: () => ({
    items: [
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me 2' },
    ],
  }),
  computed: {
    ...mapGetters(['allTracks']),
  },
  mounted() {
    this.getTracksByUser(this.$store.getters['auth/user'].uid)
  },

  methods: {
    ...mapActions(['getTracksByUser']),
    genRandomIndex(length) {
      return Math.ceil(Math.random() * (length - 1))
    },
  },
}
</script>

<style></style>
