export const measurementUnitAbb = (unit: string): string => {
  if (!unit || typeof unit !== 'string') return ''

  const text = unit.toLowerCase()

  const result = text
    ?.replace('litro', 'L')
    ?.replace('metros', 'M')
    ?.replace('unidad', 'Un')
    ?.replace('caja', 'Cj')
    ?.replace('display', 'Dis')
    ?.replace('paquete', 'Paq')
    ?.replace('bolsa', 'Bol')
    ?.replace('kilogramos', 'Kg')
    ?.replace('mililitros', 'Ml')

  return result || unit
}
