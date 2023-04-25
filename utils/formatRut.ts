export function cleanRut(rut: string): string {
  return typeof rut === 'string' ? rut.replace(/(^(0+|[^0-9kK]+))|\.|-/g, '').toUpperCase() : ''
}

export function formatRut(rut: string): string {
  rut = cleanRut(rut)
  if (rut.length === 0) {
    return ''
  }
  let result = rut.slice(-4, -1) + '-' + rut.slice(rut.length - 1)
  for (let i = 4; i < rut.length; i += 3) {
    result = rut.slice(-3 - i, -i) + '.' + result
  }
  return result
}

/**
 * validates a chilean rut
 */

export function validateRut(rut: string): boolean {
  rut = cleanRut(rut)
  if (rut.length === 0) {
    return false
  }
  const dv = rut.slice(-1).toUpperCase()
  const rutNumber = rut.slice(0, -1)
  const rutNumberArray = rutNumber.split('').reverse()
  let sum = 0
  for (let i = 0; i < rutNumberArray.length; i++) {
    sum += parseInt(rutNumberArray[i], 10) * (i % 6 + 2)
  }
  const dvCalculated = 11 - sum % 11
  if (dvCalculated === 11) {
    return dv === '0'
  }
  if (dvCalculated === 10) {
    return dv === 'K'
  }
  return dv === dvCalculated.toString()
}