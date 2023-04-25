export const dataQuoter = {
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