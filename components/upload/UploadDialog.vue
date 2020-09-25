<template>
  <v-dialog v-model="dialog" fullscreen eager>
    <template v-slot:activator="{ on }">
      <v-btn icon color="primary" @click="startAddingTrack"
        ><v-icon>mdi-cloud-upload</v-icon></v-btn
      >
    </template>
    <v-card>
      <v-toolbar class="justify-center flex-grow-0">
        <v-row
          class="align-center justify-space-between flex-nowrap fill-width"
        >
          <v-col
            class="flex align-center flex-shrink-1 flex-grow-0 pa-0 text-center"
            style="min-width: 68px"
          >
            <v-btn
              icon
              large
              :disabled="loading"
              @click="showpopup() && cancel()"
            >
              <v-icon>mdi-arrow-left</v-icon></v-btn
            >
          </v-col>
          <v-col cols="7">
            <v-row>
              <v-col class="body-1 text-truncate py-0 text-center" cols="12">{{
                fileOriginalName
              }}</v-col>
            </v-row>
          </v-col>
          <v-col
            class="flex align-center flex-shrink-1 flex-grow-0 pa-0 text-center"
            style="min-width: 68px"
          >
            <v-btn
              icon
              :loading="loading"
              large
              color="tertiary"
              @click="onSubmit"
            >
              <v-icon>mdi-check</v-icon>
              <template v-slot:loader>
                <v-progress-circular
                  :rotate="360"
                  :size="100"
                  :width="4"
                  :value="uploadProgress"
                  :color="uploadProgress === 100 ? 'primary' : 'tertiary'"
                >
                  <div v-if="uploadProgress < 100">
                    {{ `${uploadProgress}%` }}
                  </div>
                  <div v-else>
                    <v-icon color="primary">mdi-cloud-check</v-icon>
                  </div>
                </v-progress-circular>
              </template>
            </v-btn>
          </v-col>
        </v-row>
      </v-toolbar>
      <v-card-text class="mt-5">
        <v-text-field
          v-model="fileForSaveName"
          :disabled="loading"
          autofocus
          counter="50"
          label="Title"
        ></v-text-field>
        <v-text-field
          v-model="artistName"
          :disabled="loading"
          counter="50"
          label="Artist"
        ></v-text-field>
      </v-card-text>
    </v-card>
    <div class="hidden">
      <form ref="form">
        <input
          ref="fileInput"
          accept="audio/*"
          type="file"
          @input="onFileInput"
        />
      </form>
    </div>
  </v-dialog>
</template>

<script>
import { parseName } from '@/core/utils'
import { createNamespacedHelpers } from 'vuex'
const { mapGetters } = createNamespacedHelpers('audio')

export default {
  data: () => ({
    dialog: false,
    loading: false,
    file: null,
    fileOriginalName: '',
    fileForSaveName: '',
    artistName: '',
  }),
  computed: {
    ...mapGetters(['uploadProgress']),
  },
  watch: {
    file(newVal) {
      if (newVal) {
        this.dialog = true
      } else {
        this.dialog = false
      }
    },
  },
  methods: {
    cancel() {
      this.file = null
      this.fileOriginalName = ''
      this.fileForSaveName = ''
      this.artistName = ''
      this.$refs.form.reset()
      this.dialog = false
    },
    onFileInput(event) {
      if (event.target.files.length) {
        this.file = event.target.files[0]
        this.fileOriginalName = event.target.files[0].name
        this.fileForSaveName = parseName(event.target.files[0].name)
      }
    },
    startAddingTrack() {
      this.$refs.fileInput.click()
    },
    async uploadFile() {
      const payload = {
        file: this.file,
        filename: this.fileForSaveName,
        userId: this.$store.getters['auth/user'].uid,
      }
      return await this.$store.dispatch('audio/uploadFile', payload)
    },
    async saveAudioTrack(url) {
      const payload = {
        url,
        artist: this.artistName,
        name: this.fileForSaveName,
        userId: this.$store.getters['auth/user'].uid,
      }
      return await this.$store.dispatch('audio/saveAudioTrack', payload)
    },
    pushNewTrackToAll(url) {
      const payload = {
        url,
        artist: this.artistName,
        name: this.fileForSaveName,
        userId: this.$store.getters['auth/user'].uid,
      }
      this.$store.dispatch('audio/addTrackToAllTracks', payload)
    },
    async onSubmit() {
      this.loading = true
      try {
        const fileUrl = await this.uploadFile()
        await this.saveAudioTrack(fileUrl)
        this.pushNewTrackToAll(fileUrl)
        this.cancel()
      } catch (error) {
        console.error(error)
      } finally {
        this.loading = false
      }
    },
    showpopup() {
      return confirm('Really?')
    },
  },
}
</script>

<style></style>
