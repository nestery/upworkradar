export const state = () => ({
  user: null,
  isLoggedIn: false,
})

export const mutations = {
  SET_USER(state, user) {
    state.user = user
  },
  SET_LOGGED_IN(state) {
    state.isLoggedIn = true
  },
  CLEAR_USER(state) {
    state.user = null
  },
  SET_LOGGED_OUT(state) {
    state.isLoggedIn = false
  },
}

export const actions = {
  onAuthStateChangedAction({ dispatch }, { authUser }) {
    if (!authUser) {
      dispatch('logout')
      return
    }

    // you can request additional fields if they are optional (e.g. photoURL)
    dispatch('login', authUser)
  },

  login({ commit }, { uid, email, emailVerified, displayName, photoURL }) {
    commit('SET_USER', {
      uid,
      email,
      emailVerified,
      displayName,
      photoURL, // results in photoURL being undefined for server auth
      // use custom claims to control access (see https://firebase.google.com/docs/auth/admin/custom-claims)
    })
    commit('SET_LOGGED_IN')
    this.app.context.redirect('/')
  },

  logout({ commit }) {
    this.app.context.redirect('/auth')
    commit('CLEAR_USER')
    commit('SET_LOGGED_OUT')
  },
}

export const getters = {
  user: (state) => state.user,
  isLoggedIn: (state) => state.isLoggedIn,
}
