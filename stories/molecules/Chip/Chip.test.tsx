import React from 'react'
import { render, screen } from '@testing-library/react'

import { Chip, ChipProps } from './Chip'

describe('<Chip label={} backgroundColor={} color={} />', () => {
  const initialProps: ChipProps = {
    label: 'Apoteósico',
    backgroundColor: '#DA291C',
    color: '#FFFFFF'
  }

  test('should render Chip component', () => {
    render(<Chip {...initialProps} />)

    expect(screen.getByText('Apoteósico')).toBeInTheDocument()
  })

  test('should render Chip component with an icon', () => {
    initialProps.icon = 'List'
    initialProps.positionIcon = 'left'

    render(<Chip {...initialProps} />)

    expect(screen.getByText('Apoteósico')).toBeInTheDocument()
    expect(screen.getByRole('List')).toBeInTheDocument()
  })
})