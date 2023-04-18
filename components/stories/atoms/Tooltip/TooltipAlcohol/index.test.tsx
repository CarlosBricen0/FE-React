import React from 'react'
import { render, screen } from '@testing-library/react'
import { TooltipAlcohol } from '.'
import { getGlobalStyle } from '../../../../helpers'

describe('<TooltipAlcohol />', () => {

  const component = () => {
    const text = 'El precio total a pagar lo podrás conocer cuando se apruebe tu cotización.'
    return render(
      <TooltipAlcohol
        backgroundColor={getGlobalStyle('--color-base-white')}
        borderRadius={getGlobalStyle('--border-radius-md')}
        boxShadow='1px 1px 3px var(--color-neutral-gray-silver)'
        closeIcon={true}
        fontSize='md'
        iconColor={getGlobalStyle('--color-feedback-warning-light')}
        iconSize={20}
        maxWidth='377px'
        text={text}
        textColor='black'
      />
    )
  }

  test('should render text in TooltipAlcohol', () => {
    component()
    expect(screen.getByText(/precio total/i)).toBeInTheDocument()
  })

  test('should render icon Info in TooltipAlcohol', () => {
    component()
    expect(screen.getByRole(/Info/i)).toBeInTheDocument()
  })

  test('should render icon Close in TooltipAlcohol', () => {
    component()
    expect(screen.getByRole(/Close/i)).toBeInTheDocument()
  })
})