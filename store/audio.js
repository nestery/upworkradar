export const state = () => ({
  uploadProgress: 0,
  allTracks: [],
})

export const mutations = {
  SET_LOADING_PROGRESS(state, progress) {
    state.uploadProgress = progress
  },
  SET_ALL_TRACKS(state, tracks) {
    state.allTracks = tracks
  },
  ADD_TRACK(state, track) {
    state.allTracks.push(track)
  },
}

export const actions = {
  async getTracksByUser({ commit }, userId) {
    try {
      const allTracksRef = this.$api.firestore.collection('tracks')
      const snapshot = await allTracksRef.where('userId', '==', userId).get()
      const tracks = []

      snapshot.forEach((doc) => tracks.push(doc.data()))
      commit('SET_ALL_TRACKS', tracks)

      return Promise.resolve(tracks)
    } catch (error) {
      console.error(error)
      this.$notification.error(error)
      return Promise.reject(error)
    }
  },

  addTrackToAllTracks({ commit }, track) {
    commit('ADD_TRACK', track)
  },

  uploadFile({ commit }, { file, filename, userId }) {
    commit('SET_LOADING_PROGRESS', 0)
    const storageRef = this.$api.storage
      .ref()
      .child('audio')
      .child(`${userId}`)
      .child(filename)

    const uploadTask = storageRef.put(file)
    return new Promise((resolve, reject) => {
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = Math.floor(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          )
          commit('SET_LOADING_PROGRESS', progress)
        },
        (error) => {
          console.error(error)
          this.$notification.error(error)
          reject(error)
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
            resolve(downloadURL)
          })
        }
      )
    })
  },
  async saveAudioTrack(_, { name, url, userId, artist }) {
    const trackRef = this.$api.firestore.collection('tracks')
    try {
      return await trackRef.add({ name, url, userId, artist })
    } catch (error) {
      console.error(error)
      this.$notification.error(error)
      Promise.reject(error)
    }
  },
}

export const getters = {
  uploadProgress: (state) => state.uploadProgress,
  allTracks: (state) => state.allTracks,
}
