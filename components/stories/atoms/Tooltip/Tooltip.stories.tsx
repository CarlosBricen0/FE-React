import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Tooltip } from './Tooltip'
import { Column, Row } from '../../layout'
import Text from '../Text/Text'

export default {
  title: 'Atoms/Tooltip',
  component: Tooltip,
  parameters: {
    backgrounds: {
      values: [
        { name: 'neutralGray', value: '#F9F9F9' }
      ]
    }
  }

} as ComponentMeta<typeof Tooltip>

const Template: ComponentStory<typeof Tooltip> = (args) => { return <Tooltip {...args} /> }

export const Base = Template.bind({})
Base.args = {
  text: 'Cantidad disponible 39 unidades',
  type: 'bottom',
  position: 'absolute',
  right: '',
  top: '',
  left: '',
  bottom: ''
}

export const TextComponent = Template.bind({})
TextComponent.args = {
  align: 'start',
  arrow: true,
  bottom: '85px',
  closeIcon: true,
  colorArrow: 'black',
  colorText: 'white',
  colorTitle: 'white',
  left: '24px',
  maxWidth: '328px',
  padding: '10px',
  position: 'absolute',
  right: '24px',
  text: '',
  textComponent: (
    <Row>
      <Column>
        <Text
          fontSize='lg'
          isFlex={false}
          type='span'
        >
          Te faltan
          <Text
            fontSize='lg'
            fontWeight='semibold'
            isFlex={false}
            type='span'
          >
            {' $ 387 '}
          </Text>
          para poder realizar tu compra.
        </Text>
      </Column>
    </Row>
  ),
  textSize: 'lg',
  title: 'Mínimo de compra no alcanzado',
  titleSize: 'xl',
  titleWeight: 'semibold',
  type: 'bottom',
  width: '388px'
}