import { auth } from 'firebase'
import { AuthRepository } from '../auth.repository'
import { UserCredentialsDto } from '../dto/user-credentials.dto'
import { IAuthProvider } from '../interfaces/auth.provider'
import { IAuthService } from './auth.service.interface'

export class FirebaseAuthService implements IAuthService {
  private authRepository: AuthRepository

  constructor(authProvider: IAuthProvider) {
    this.authRepository = new AuthRepository(authProvider)
  }

  public signUpWithEmail(
    userCredentialsDto: UserCredentialsDto
  ): Promise<void> {
    return this.authRepository.createUser(userCredentialsDto)
  }

  public signInWithEmail(
    userCredentialsDto: UserCredentialsDto
  ): Promise<void> {
    return this.authRepository.signIn(userCredentialsDto)
  }

  public signOut(): Promise<void> {
    return this.authRepository.signOut()
  }

  public signInWithGoogle() {
    const provider = new auth.GoogleAuthProvider()
    this.authRepository.signInWithRedirect(provider)
  }
}
