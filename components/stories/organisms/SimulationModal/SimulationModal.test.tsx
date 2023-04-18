import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Context as ResponsiveContext } from 'react-responsive'
import { SimulationModal, SimulationModalProps } from './SimulationModal'

describe('SimulationModal', () => {
  const value = { width: 1366 }

  const component = (props?: Partial<SimulationModalProps>) => {
    return render(
      <ResponsiveContext.Provider value={value}>
        <SimulationModal
          isOpen={true}
          {...props}
        />
      </ResponsiveContext.Provider>
    )
  }

  test('should modal be visible', () => {
    component()
    expect(screen.queryByText('¿Quieres cambiar tu dirección?')).toBeInTheDocument()
  })

  test('should modal not be visible', () => {
    component({isOpen: false})
    expect(screen.queryByText('¿Quieres cambiar tu dirección?')).not.toBeInTheDocument()
  })

  test('should handleKeepAddress function to be called', async () => {
    const handleKeepAddress = jest.fn()
    component({labelPrimary: 'handleKeepAddress button', handleKeepAddress})
    const acceptButton = () => {return screen.getByText('handleKeepAddress button')}

    userEvent.click(acceptButton())
    expect(handleKeepAddress).toBeCalledTimes(1)
  })

  test('should action function to be called', async () => {
    const action = jest.fn()
    component({labelSecondary: 'action button', action})
    const acceptButton = () => {return screen.getByText('action button')}

    userEvent.click(acceptButton())
    expect(action).toBeCalledTimes(1)
  })
})
