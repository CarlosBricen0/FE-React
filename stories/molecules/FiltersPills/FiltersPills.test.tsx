import { render, screen } from '@testing-library/react'
import { FiltersPills } from './FiltersPills'
import { filteredShort } from '../../../__mocks__/FiltersPills'
import userEvent from '@testing-library/user-event'

describe('<FilterPills />', () => {

  const mockedFn = jest.fn()

  const component = ({
    data,
    onClickItemRemove,
    onRemoveAll
  }) => {
    render(
      <FiltersPills
        enterFilter={data}
        onClickItemRemove={onClickItemRemove}
        onRemoveAll={onRemoveAll}
        textInfo='Filtros aplicados:'
      />
    )
  }

  test('should render label filters', () => {
    component({
      data: filteredShort,
      onClickItemRemove: () => {return},
      onRemoveAll: () => {return}
    })
    expect(screen.getByText(/Filtros aplicados:/)).toBeInTheDocument()

  })

  test('should render one pill', () => {
    component({
      data: filteredShort,
      onClickItemRemove: () => {return},
      onRemoveAll: () => {return}
    })
    expect(screen.getByText(/Marca Ejemplo B/)).toBeInTheDocument()
  })

  test('should onClickItemRemove been called at lest one time', () => {
    component({
      data: filteredShort,
      onClickItemRemove: ({type, itemName}) => {
        mockedFn()
        expect(type).toContain('brand')
        expect(itemName).toContain('Marca Ejemplo B')
      },
      onRemoveAll: () => {return}
    })
    const clickIcon = screen.getAllByRole('Close')[0]
    userEvent.click(clickIcon)
    expect(mockedFn).toHaveBeenCalled()
  })

  test('should click for remove All', () => {
    const onRemoveAll = jest.fn()
    component({
      data: filteredShort,
      onClickItemRemove: () => { return },
      onRemoveAll
    })
    const removeAll = screen.getByText(/Borrar todos/)
    userEvent.click(removeAll)
    expect(onRemoveAll).toHaveBeenCalled()
  })

})