import { auth } from 'firebase'
import ProviderNotFoundException from '../exceptions/ProviderNotFoundException'
import { ProvidersNames } from './providers-names.enum'

export default function AuthProviders(name: ProvidersNames) {
  const providers = { GOOGLE: new auth.GoogleAuthProvider() }
  const found = providers[ProvidersNames[name]]
  if (found) {
    return found
  } else {
    throw new ProviderNotFoundException(name)
  }
}
