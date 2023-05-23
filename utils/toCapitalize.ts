export const toCapitalize = (string: string): string | null => {
  if (typeof string === 'string') {
    return string.charAt(0).toUpperCase() + string?.slice(1)
  }
  return null
}