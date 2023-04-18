import { ComponentStory, ComponentMeta } from '@storybook/react'
import { AddToCartQuoter } from './AddToCartQuoter'
import { Row } from '../../layout'

export default {
  title: 'Molecules/AddToCartQuoter',
  component: AddToCartQuoter
} as ComponentMeta<typeof AddToCartQuoter>

const Template: ComponentStory<typeof AddToCartQuoter> = (args) => {
  return <Row justifyContent='center' maxWidth='200px'>
    <AddToCartQuoter {...args} />
  </Row>
}

export const BigScreen = Template.bind({})

BigScreen.args = {
  disabled: false,
  isLoading: false,
  quantity: 100,
  statusButton: 'initial',
  buttonLabel: '100 un',
  quantityButtonStyles: {
    fontSize: 'md',
    margin: '0px 5px 0px 5px',
    maxHeight: '35px',
    maxWidth: '137px',
    sizeCircle: 22,
    inputMaxHeight: '30px'
  },
  quantityButtonProps:{
    handleAdd: () => {return},
    handleChange: () => {return},
    handleRemove: () => {return}
  },
  site:'alvi',
  handleOnClick: ({itemId}) => {return itemId}
}

export const SmallScreen = Template.bind({})

SmallScreen.args = {
  buttonLabel: '100 un',
  disabled: false,
  isLoading: false,
  quantity: 100,
  site:'alvi',
  statusButton: 'initial',
  quantityButtonStyles: {
    fontSize: 'sm',
    margin: '0px 1px 0px 1px',
    maxHeight: '35px',
    maxWidth: '120px',
    sizeCircle: 22,
    inputMaxHeight: '30px'
  },
  quantityButtonProps:{
    handleAdd: () => {return},
    handleChange: () => {return},
    handleOnClick: () => {return},
    handleRemove: () => {return}
  }
}