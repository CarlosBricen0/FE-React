import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Collapsable, CollapsableProps } from './Collapsable'

describe('Collapsable', () => {
  const component = (props?: CollapsableProps) => {
    return render(
      <Collapsable
        text='Collapsable Text'
        title='Collapsable Title'
        {...props}
      />
    )
  }

  const getTitle = () => { return screen.getByText('Collapsable Title') }
  const getText = () => { return screen.getByText('Collapsable Text') }

  test('should title be visible', () => {
    component()
    expect(getTitle()).toBeVisible()
  })

  test('should text parent have max height 0px', () => {
    component()
    expect(getText().parentElement.style.maxHeight).toEqual('0px')
  })

  test('should text parent have max height after click', () => {
    const maxHeight = '100px'
    component({maxHeight: maxHeight})
    userEvent.click(getTitle())
    expect(getText().parentElement.style.maxHeight).toEqual(maxHeight)
  })
})