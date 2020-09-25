import { UserCredentialsDto } from './dto/user-credentials.dto'
import { IAuthProvider } from './interfaces/auth.provider'

export class AuthRepository {
  constructor(private authProvider: IAuthProvider) {
    this.authProvider = authProvider
  }

  async createUser(userCredentialsDto: UserCredentialsDto) {
    const { email, password } = userCredentialsDto

    try {
      await this.authProvider.createUserWithEmailAndPassword(email, password)
    } catch (e) {
      //   handleError(e)
    }
  }

  async signIn(userCredentialsDto: UserCredentialsDto) {
    const { email, password } = userCredentialsDto

    try {
      await this.authProvider.signInWithEmailAndPassword(email, password)
    } catch (e) {
      //   handleError(e)
    }
  }

  async signOut() {
    try {
      await this.authProvider.signOut()
    } catch (error) {}
  }

  googleSignIn() {
    // const provider = this.authProvider.GoogleAuthProvider()
    // console.log(provider)
    // await this.authProvider.signInWithRedirect(provider)
  }
}
