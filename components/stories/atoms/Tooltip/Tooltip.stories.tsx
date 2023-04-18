import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Tooltip } from './Tooltip'
import { Column, Row } from '../../layout'
import Text from '../Text/Text'
import { getGlobalStyle } from '../../../helpers'
import { TooltipAlcohol } from './TooltipAlcohol'

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
const TemplateAlcohol: ComponentStory<typeof TooltipAlcohol> = (args) => {
  return <TooltipAlcohol {...args} />
}

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
  background: getGlobalStyle('--color-alvi-base-black'),
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

export const TooltipAlcoholTemplate1 = TemplateAlcohol.bind({})
TooltipAlcoholTemplate1.parameters = {
  backgrounds: { default: 'neutralGray' }
}
TooltipAlcoholTemplate1.args = {
  backgroundColor: getGlobalStyle('--color-neutral-black-olive'),
  borderRadius: getGlobalStyle('--border-radius-md'),
  boxShadow: '1px 1px 3px var(--color-neutral-gray-silver)',
  closeIcon: true,
  fontSize: 'md',
  iconColor: getGlobalStyle('--color-base-white'),
  iconSize: 20,
  maxWidth: '377px',
  position: 'sticky',
  text: 'Las cantidades de cada uno de  tus productos se han modificado al mínimo que son 60 un.',
  textColor: 'white',
  onClose: () => {return}
}
export const TooltipAlcoholTemplate2 = TemplateAlcohol.bind({})
TooltipAlcoholTemplate2.parameters = {
  backgrounds: { default: 'neutralGray' }
}

TooltipAlcoholTemplate2.args = {
  backgroundColor: getGlobalStyle('--color-base-white'),
  borderRadius: getGlobalStyle('--border-radius-md'),
  boxShadow: '1px 1px 3px var(--color-neutral-gray-silver)',
  fontSize: 'md',
  iconColor: getGlobalStyle('--color-feedback-warning-light'),
  iconSize: 20,
  maxWidth: '377px',
  position: 'sticky',
  text: 'El precio total a pagar lo podrás conocer cuando se apruebe tu cotización.',
  textColor: 'black'
}