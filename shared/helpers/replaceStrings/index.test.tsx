import { replaceStrings } from '.'

describe('replaceStrings', () => {
  test('should invoke replaceStrings and return a numeric value without non-numeric characters', () => {
    const response = replaceStrings('9 Kg')
    expect(response).toEqual(9)
  })
  test('valid a decimal number', () => {
    const response = replaceStrings('2.3 Kg')
    expect(response).toEqual(2.3)
  })
  test('when the value is null or undefined must return 0', () => {
    const response = replaceStrings(undefined)
    expect(response).toEqual(0)
  })
})