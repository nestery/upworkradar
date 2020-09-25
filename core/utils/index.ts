export function parseName(name: string): string {
  if (typeof name === 'string') {
    const re = /(_)|(\.\w+?|\d+?)$/gi
    return name.replace(re, ' ').trim()
  }
  return name
}
