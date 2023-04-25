import * as measurementUnitAbb from './index'

describe('measurementUnitAbb', () => {
  test('Should return Un', () => {
    const result: string = measurementUnitAbb.measurementUnitAbb('Unidad')
    expect(result).toBe('Un')
  })

  test('Should return empty', () => {
    const result: string = measurementUnitAbb.measurementUnitAbb('')
    expect(result).toBe('')
  })

  test('Should return empty when sending undefined', () => {
    const result: string = measurementUnitAbb.measurementUnitAbb(undefined)
    expect(result).toBe('')
  })
})
