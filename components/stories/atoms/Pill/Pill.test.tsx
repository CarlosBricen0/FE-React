import {
  render,
  screen,
  act
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Pill } from './Pill'
import { Item } from '../../../__mocks__/Pill'
import { OnClickProps } from '../../molecules'

describe('<Pill/>', () => {

  const component = (onClick: ({ type, itemName }: OnClickProps) => void) => {
    return render (
      <Pill item={Item} onClick={onClick} />
    )
  }

  test('should render Pill', async () => {
    component(() => {return})
    expect(screen.getByText(/Marca D/)).toBeInTheDocument()
  })

  test('should render Icon Pill', async () => {
    component(() => {return})
    expect(screen.getByRole('Close')).toBeInTheDocument()
  })

  test('should click to icon', async () => {
    component( ({type, itemName}) => {
      expect(type).toContain('brand')
      expect(itemName).toContain('Marca D')
    })
    const clickIcon = screen.getByRole('Close')
    act(() => { userEvent.click(clickIcon)})
  })

})