export const actions = {
  async nuxtServerInit({ dispatch }, { res }) {
    if (res && res.locals && res.locals.user) {
      const { ...authUser } = res.locals.user

      await dispatch('auth/onAuthStateChangedAction', { authUser })
    }
  },
}
