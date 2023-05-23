import { excludeDomain } from '.'

describe('excludeDomain', () => {
  test('should return true if the domain matches the provided string', () => {
    Object.defineProperty(window, 'location', {
      value: {
        origin: 'www.unimarc.cl'
      },
      writable: true
    })
    expect(excludeDomain('unimarc')).toBe(true)
  })

  test('should return false if the domain does not match the provided string', () => {
    Object.defineProperty(window, 'location', {
      value: {
        origin: 'www.unimarc.cl'
      },
      writable: true
    })
    expect(excludeDomain('otherdomain.com')).toBe(false)
  })
})