export interface IAuthProvider {
  createUserWithEmailAndPassword(email: string, password: string): Promise<any>
  signInWithEmailAndPassword(email: string, password: string): Promise<any>
  signOut(): Promise<any>
  signInWithRedirect(): Promise<any>
}
