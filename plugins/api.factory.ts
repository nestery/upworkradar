export default (context: any, inject: Function) => {
  // if (process.client) {
  //   const token = localStorage.getItem('token')

  //   if (token) {
  //     context.$axios.setToken(token, 'Bearer')
  //   }
  // }
  const services = {
    auth: context.$fireAuth,
    storage: context.$fireStorage,
    firestore: context.$fireStore,
  }
  inject('api', services)
}
