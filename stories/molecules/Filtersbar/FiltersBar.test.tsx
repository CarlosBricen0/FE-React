import {
  render,
  screen,
  waitFor
} from '@testing-library/react'
import { FilterBarProps, FiltersBar } from './FiltersBar'

const filtersBarProps: FilterBarProps = {
  filterQuantity: 0,
  orderByName: 'Recomendados',
  showFilterBtn: false
}
describe('FiltersBar', () => {
  const component = (props = filtersBarProps) => {
    return render(
      <FiltersBar {...props} />
    )
  }

  test('should render without Filter button', async() => {
    component()
    await waitFor(() => {
      expect(screen.queryByText('Filtros')).not.toBeInTheDocument()
    })
  })

  test('should render different orderBy name', async() => {
    component({
      ...filtersBarProps,
      showFilterBtn: true,
      orderByName: 'Test'
    })
    await waitFor(() => {
      expect(screen.queryByText('Recomendados')).not.toBeInTheDocument()
    })
    expect(screen.queryByText('Test')).toBeInTheDocument()
  })

  test('should render Filter button', async() => {
    component({ ...filtersBarProps, showFilterBtn: true })
    expect(screen.queryByText('Filtros')).toBeInTheDocument()
  })

  test('should render "1 filtro" quantity filter messages', () => {
    component({
      ...filtersBarProps,
      showFilterBtn: true,
      filterQuantity: 1
    })
    expect(screen.queryByText('1 filtro')).toBeInTheDocument()
  })

  test('should render "4 filtro" quantity filter messages', () => {
    component({
      ...filtersBarProps,
      showFilterBtn: true,
      filterQuantity: 4
    })
    expect(screen.queryByText('4 filtros')).toBeInTheDocument()
  })

  test('should render passing empty props', () => {
    component({ ...{} })
    expect(screen.queryByText('Recomendados')).toBeInTheDocument()
  })
})