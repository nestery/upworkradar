export default function ({ store, redirect, route }) {
  // If the user is not authenticated
  if (route.path === '/auth') {
    return
  }
  if (!store.getters['auth/isLoggedIn']) {
    return redirect('/auth')
  }
}
