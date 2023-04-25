import { 
  render, 
  screen, 
  waitFor 
} from '@testing-library/react'
import { Context as ResponsiveContext } from 'react-responsive'
import { TimeCountDown, TimeCountDownProps } from './TimeCountDown'

const getDefaultProps = () : TimeCountDownProps => {
  return {
    endDate: new Date(Date.now() + 2 * 60 * 60 * 1000),
    startDate: new Date(Date.now() - 15 * 1000),
    onStart: jest.fn(),
    onEnd: jest.fn()
  }
}

describe('TimeCountDown', () => {

  const component = (props?: TimeCountDownProps, width = 1366) => {
    return render(
      <ResponsiveContext.Provider value={{ width }}>
        <TimeCountDown
          {...props}
        />
      </ResponsiveContext.Provider>
    )
  }

  const getHours = () => {return screen.getByTitle('Horas')}
  const getMinutes = () => {return screen.getByTitle('Minutos')}
  const getSeconds = () => {return screen.getByTitle('Segundos')}
  
  const commonChecks = (render : typeof component = component) => {
    test('should call onStart', async () => {
      const props = getDefaultProps()
      render(props)
      await waitFor(() => {
        expect(props.onStart).toBeCalled()
      })
    })

    test('should call onEnd', async () => {
      const props = getDefaultProps()
      render({
        ...props,
        endDate: new Date(Date.now() - 15 * 1000),
        startDate: new Date(Date.now() - 30 * 1000)
      })
      await waitFor(() => {
        expect(props.onEnd).toBeCalled()
      })
    })

    test('should hours be visible', () => {
      render(getDefaultProps())
      expect(getHours()).toHaveTextContent('2')
    })
  
    test('should minutes be visible', () => {
      render(getDefaultProps())
      expect(getMinutes()).toHaveTextContent('0')
    })
  
    test('should seconds be visible', () => {
      render(getDefaultProps())
      expect(getSeconds()).toHaveTextContent('0')
    })

    test('should show total hours', () => {
      render({
        ...getDefaultProps(),
        // current date plus 68 hours and 10 minutes
        endDate: new Date(Date.now() + (68 * 60 * 60 * 1000) + (10 * 60 * 1000))
      })
      expect(getHours()).toHaveTextContent('68')
    })
  }

  describe('BigScreen', () => {
    const renderBigScreen : typeof component = (props) => {return component(props, 1366)}
    
    commonChecks(renderBigScreen)
  })
  
  describe('SmallScreen', () => {
    const renderSmallScreen : typeof component = (props) => {return component(props, 475)}

    commonChecks(renderSmallScreen)
  })
})