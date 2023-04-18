export const excludeDomain = (domain: string): boolean => {
  if (!domain) {
    return false
  }
  const rgxDomain = new RegExp(domain)
  return rgxDomain.test(window.location.origin)
}