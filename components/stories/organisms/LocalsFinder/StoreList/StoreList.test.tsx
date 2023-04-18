import { render, screen } from '@testing-library/react'
import { Context as ResponsiveContext } from 'react-responsive'
import {
  StoreList,
  StoreListItems,
  StoreListProps
} from './StoreList'

const defaultItems: StoreListItems[] = [
  {
    address: 'Calle #Numero',
    closed: false,
    closedAt: 'HH:mm',
    details: [
      ['Lunes a Viernes', 'desde las HH:mm a las HH:mm'],
      ['Sábado', 'desde las HH:mm a las HH:mm'],
      ['Domingo', 'desde las HH:mm a las HH:mm']
    ],
    key: 'anything-key',
    title: 'Nombre'
  }
]

describe('StoreStoreList', () => {
  const component = (props?: StoreListProps, width = 1366) => {
    return render(
      <ResponsiveContext.Provider value={{ width }}>
        <StoreList
          {...props}
          items={defaultItems}
        />
      </ResponsiveContext.Provider>
    )
  }

  const getTitle = () => { return screen.getByText('Buscar tienda') }

  const getItemAddress = () => { return screen.getByText('Calle #Numero') }
  const getItemClosed = () => { return screen.getByText('Abierto') }
  const getItemClosedAt = () => { return screen.getByText('Cierra a las HH:mm') }
  const getItemDetailKey = () => { return screen.getByText('Lunes a Viernes:') }
  const getItemDetailValue = () => { return screen.getAllByText('desde las HH:mm a las HH:mm') }
  const getItemName = () => { return screen.getByText('Nombre') }

  test('should title be visible', () => {
    component()
    expect(getTitle()).toBeVisible()
  })

  test('should item address be visible', () => {
    component()
    expect(getItemAddress()).toBeVisible()
  })

  test('should item closed be visible', () => {
    component()
    expect(getItemClosed()).toBeVisible()
  })

  test('should item closed at be visible', () => {
    component()
    expect(getItemClosedAt()).toBeVisible()
  })

  test('should item detail be visible', () => {
    component()
    expect(getItemDetailKey()).toBeVisible()
    expect(getItemDetailValue()).toHaveLength(3)
  })

  test('should item name be visible', () => {
    component()
    expect(getItemName()).toBeVisible()
  })
})
