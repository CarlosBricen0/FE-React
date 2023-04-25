import { render, screen, fireEvent } from '@testing-library/react'
import { Context as ResponsiveContext } from 'react-responsive'
import { ShelfSideButton, ShelfSideButtonProps } from '.'

describe('ShelfSideButton', () => {
  const component = (props: Partial<ShelfSideButtonProps> = {}, width = 1366) => {
    return render(
      <ResponsiveContext.Provider value={{ width }}>
        <ShelfSideButton {...props} />
      </ResponsiveContext.Provider>
    )
  }

  const getButton = () => {return screen.getByRole('button')}

  test('should render component without props', () => {
    component()
    expect(getButton()).toBeInTheDocument()
  })

  test('should render icon', () => {
    const icon = 'Plus'
    component({icon})
    expect(screen.getByRole(icon)).toBeInTheDocument()
  })

  test('should call onClick', () => {
    const onClick = jest.fn()
    component({onClick})

    fireEvent.click(getButton())
    expect(onClick).toBeCalled()
  })

  test('should not call onClick when disabled', () => {
    const onClick = jest.fn()
    component({onClick, disabled: true})

    fireEvent.click(getButton())
    expect(onClick).not.toBeCalled()
  })

  test('should call onClick when Space|Enter is pressed', () => {
    const onClick = jest.fn()
    component({onClick})

    fireEvent.keyDown(getButton(), {key: ' '})
    expect(onClick).toBeCalledTimes(1)

    fireEvent.keyDown(getButton(), {code: '32'})
    expect(onClick).toBeCalledTimes(2)

    fireEvent.keyDown(getButton(), {key: 'Enter'})
    expect(onClick).toBeCalledTimes(3)
  })

  test('should not call onClick when Space|Enter is pressed and disabled', () => {
    const onClick = jest.fn()
    component({onClick, disabled: true})

    fireEvent.keyDown(getButton(), {key: ' '})
    expect(onClick).not.toBeCalled()

    fireEvent.keyDown(getButton(), {key: 'Enter'})
    expect(onClick).not.toBeCalled()
  })

  test('should not call onClick with other keys', () => {
    const onClick = jest.fn()
    component({onClick})

    fireEvent.keyDown(getButton(), {key: 'a'})
    expect(onClick).not.toBeCalled()
  })
})