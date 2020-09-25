import { AuthRepository } from '../auth.repository'
import { UserCredentialsDto } from '../dto/user-credentials.dto'

export interface IAuthService {
  authRepository: AuthRepository

  signUpWithEmail(userCredentialsDto: UserCredentialsDto): Promise<void>
  signInWithEmail(userCredentialsDto: UserCredentialsDto): Promise<void>
  signOut(): Promise<void>
  signInWithGoogle(): Promise<void>
}
