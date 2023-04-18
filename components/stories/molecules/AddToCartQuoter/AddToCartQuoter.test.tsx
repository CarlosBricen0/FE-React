import React from 'react'
import { render, screen } from '@testing-library/react'
import { AddToCartQuoter } from './AddToCartQuoter'
import { dataQuoter } from '../../../__mocks__/AddToCartQuoter'

describe('AddToCartQuoter', () => {

  const component = ({dataQuoter}) => {

    return render(
      <AddToCartQuoter {...dataQuoter} />
    )
  }

  test('should render first stage button with text', () => {
    component({dataQuoter})
    expect(screen.getByText(/100 un/i)).toBeInTheDocument()
  })

  test('should render first stage button with Icon', () => {
    component({dataQuoter})
    expect(screen.getByRole(/Edit/i)).toBeInTheDocument()
  })

  test('should click to button and show quantity button', async () => {
    const data = {...dataQuoter,showQuantityButton: true}
    component({dataQuoter: data})
    expect(screen.getByRole(/MinusCircle/i)).toBeInTheDocument()
    expect(screen.getByRole(/PlusCircle/i)).toBeInTheDocument()
    //validate input
    expect(screen.getByDisplayValue(/100/i)).toBeInTheDocument()
  })
})
