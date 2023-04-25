import React from 'react'
import { render, screen } from '@testing-library/react'
import { Tooltip, TooltipProps } from './Tooltip'
import { Column, Row } from '../../layout'
import Text from '../Text/Text'
import userEvent from '@testing-library/user-event'

describe('<Tooltip text={string} title={string} type={string}>', () => {

  const component = (props: TooltipProps) => {
    return render(
      <Tooltip text='' {...props} />
    )
  }

  test('should render base tooltip', () => {
    component({ text: 'Hola como estas', title: 'Titulo', type: 'left'})

    expect(screen.getByText('Hola como estas')).toBeInTheDocument()
    expect(screen.getByText('Titulo')).toBeInTheDocument()
  })

  test('should render base tooltip only with required attr', () => {
    component({ text: 'string test'})
    expect(screen.getByText('string test')).toBeInTheDocument()
  })

  test('should render base tooltip with arrow', () => {
    component({arrow: true, text: 'string test arrow'})
    expect(screen.getByLabelText('arrow')).toBeInTheDocument()
  })

  test('should remove tooltip when icon close be clicked', () => {
    const removeTooltip = () => {
      document.body.innerHTML = ''
    }

    component({
      closeIcon: true,
      text: 'string test close',
      onClick: removeTooltip
    })
    const clickIcon = screen.getByRole('Close')
    userEvent.click(clickIcon)

    expect(screen.queryByRole('Close')).not.toBeInTheDocument()
  })

  test('should render appended react node', () => {
    const append = (
      <Row>
        <Column>
          <Text
            color='white'
            fontSize='lg'
            isFlex={false}
            type='span'
          >
            append text
          </Text>
        </Column>
      </Row>
    )
    component({
      text: 'Hola como estas',
      title: 'Titulo',
      type: 'left',
      append
    })
    expect(screen.getByText(/append text/)).toBeInTheDocument()
  })

  test('should render textComponent tooltip', () => {
    const textComponent = (
      <Row>
        <Column>
          <Text
            color='white'
            fontSize='lg'
            isFlex={false}
            type='span'
          >
            Te faltan
            <Text
              color='white'
              fontSize='lg'
              fontWeight='semibold'
              isFlex={false}
              type='span'
            >
              $ 387
            </Text>
            para poder realizar tu compra.
          </Text>
        </Column>
      </Row>
    )
    component({
      text: 'Hola como estas',
      title: 'Titulo',
      type: 'left',
      textComponent
    })
    expect(screen.getByText(/para poder realizar tu compra./)).toBeInTheDocument()
    expect(screen.getByText(/Te faltan/)).toBeInTheDocument()
  })
})