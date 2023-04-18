/**
 * removes the non-numeric characters and provides a number
 * @param numberWithString as string | number
 * @returns {number} numberWithOutString
 */

export const replaceStrings = (numberWithString: string | number) => {
  const numberWithOutString = Number(`${numberWithString}`.replace(/[^\d.-]/g, ''))
  return numberWithOutString
}