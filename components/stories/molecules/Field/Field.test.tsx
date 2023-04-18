import { render, screen } from '@testing-library/react'
import { Context as ResponsiveContext } from 'react-responsive'
import { Divider, Input } from '../../atoms'
import { Field, FieldProps } from './Field'

describe('Field', () => {

  const component = (props?: FieldProps, width = 1366) => {
    return render(
      <ResponsiveContext.Provider value={{ width }}>
        <Field
          label='Nombre'
          {...props}
        >
          <Input
            role='input'
            textAlign='left'
            width='100%'
          />

          <Divider verticalMargin={0} />
        </Field>
      </ResponsiveContext.Provider>
    )
  }

  const getLabel = () => { return screen.getByText('Nombre') }
  const getInput = () => { return screen.getByRole('input') }

  test('should label be visible', () => {
    component()
    expect(getLabel()).toBeVisible()
  })

  test('should form inputs be visible', () => {
    component()
    expect(getInput()).toBeVisible()
  })

  test('should show field error', () => {
    const errorText = 'Something went wrong!'
    component({
      error: errorText
    })
    expect(screen.getByText(errorText)).toBeVisible()
  })
})