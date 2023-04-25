import { render, screen } from '@testing-library/react'
import { Context as ResponsiveContext } from 'react-responsive'
import userEvent from '@testing-library/user-event'
import {
  StoreZoneFilter,
  StoreZoneFilterCommune,
  StoreZoneFilterProps,
  StoreZoneFilterRegion
} from './StoreZoneFilter'

const communes: StoreZoneFilterCommune[] = [
  {
    commune: 'example-commune',
    region: 'example-region'
  }
]

const regions: StoreZoneFilterRegion[] = [
  {
    region: 'example-region'
  }
]

describe('StoreStoreZoneFilter', () => {
  const component = (props?: StoreZoneFilterProps, width = 1366) => {
    return render(
      <ResponsiveContext.Provider value={{ width }}>
        <StoreZoneFilter
          {...props}
          communes={communes}
          regions={regions}
        />
      </ResponsiveContext.Provider>
    )
  }

  const getTitle = () => { return screen.getByText('Buscar zona') }
  const getCommuneLabel = () => { return screen.getByText('Comuna') }
  const getRegionLabel = () => { return screen.getByText('Región') }
  const getExampleCommune = () => { return screen.getByText('example-commune') }
  const getExampleRegion = () => { return screen.getByText('example-region') }

  test('should title be visible', () => {
    component()
    expect(getTitle()).toBeVisible()
  })

  test('should commune label be visible', () => {
    component()
    expect(getCommuneLabel()).toBeVisible()
  })

  test('should region label be visible', () => {
    component()
    expect(getRegionLabel()).toBeVisible()
  })

  test('should example commune option be visible', () => {
    component()
    const dropdown = screen.getAllByRole('dropdown').pop()
    userEvent.click(dropdown)
    expect(getExampleCommune()).toBeVisible()
  })

  test('should example region option be visible', () => {
    component()
    const dropdown = screen.getAllByRole('dropdown').shift()
    userEvent.click(dropdown)
    expect(getExampleRegion()).toBeVisible()
  })
})
