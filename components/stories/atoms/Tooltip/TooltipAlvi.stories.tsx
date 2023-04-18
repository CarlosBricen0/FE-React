import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Tooltip } from './Tooltip'
import { getGlobalStyle } from '../../../helpers'

export default {
  title: 'Alvi/Atoms/Tooltip',
  component: Tooltip
} as ComponentMeta<typeof Tooltip>

const Template: ComponentStory<typeof Tooltip> = (args) => { return <Tooltip {...args} /> }

export const Base = Template.bind({})
Base.args = {
  arrow: true,
  align: 'start',
  background: getGlobalStyle('--color-alvi-base-black'),
  colorArrow: 'black',
  colorTitle: 'white',
  colorText: 'white',
  bottom: '',
  left: '',
  maxWidth: '100%',
  position: 'absolute',
  right: '',
  site: 'alvi',
  title: 'Mímino de compra no alcanzado',
  text: 'No has alcanzado tu último',
  top: '',
  type: 'bottom',
  width: '388px'
}
