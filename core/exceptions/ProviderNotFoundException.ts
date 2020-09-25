export default class ProviderNotFoundException extends Error {
  constructor(providerName: string) {
    super(`No such provider: ${providerName}`)
  }
}
