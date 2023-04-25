import { Context as ResponsiveContext } from 'react-responsive'
import { Onboarding, OnboardingProps } from './Onboarding'
import userEvent from '@testing-library/user-event'
import {
  act,
  render,
  screen,
  waitFor
} from '@testing-library/react'
import React from 'react'

const firstTitle = 'Bienvenido al cotizador Alvi'
const btnLabel = 'Ver mi cotización'
const mockClick = jest.fn()
const mockBanners = [
  {
    title: firstTitle,
    subtitle: 'Agrega productos a tu carro  y comienza a armar tu cotización',
    image: 'https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
  },
  {
    title: 'Más productos en poco tiempo',
    subtitle: 'En tu carro haz click en el botón “ir a cotizar” para poder aumentar tus cantidades',
    image: 'https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
  }
]

const getDefaultProps = (): OnboardingProps => {
  return {
    site: 'alvi',
    banners: mockBanners,
    btnLabel: btnLabel,
    handleClickButton: mockClick,
    onClose: jest.fn()
  }
}

describe('<Onboarding {...props}/>', () => {

  const component = (props: OnboardingProps, width = 1400) => {
    return render(
      <ResponsiveContext.Provider value={{ width }} >
        <Onboarding {...props} />
      </ResponsiveContext.Provider>
    )
  }

  const commonChecks = (renderComponent: typeof component = component) => {
    test('should basic render', () => {
      // arrange
      renderComponent(getDefaultProps())
      const firstText = screen.getAllByText(firstTitle)[0]

      // assert
      expect(screen.getByRole('Close')).toBeDefined()
      expect(firstText).toBeInTheDocument()
      expect(screen.getByAltText(mockBanners[0].title)).toBeInTheDocument()
      expect(screen.getByRole('ArrowRight')).toBeDefined()
    })

    test('should change to next slide when click on arrow button', () => {
      //arrange
      const { container } = renderComponent(getDefaultProps())
      const arrowButton = container.querySelectorAll('section')[1]

      //act
      act(() => {
        userEvent.click(arrowButton)
      })

      //assert
      expect(container.querySelectorAll('li')[1]).toHaveAttribute('aria-hidden', 'false')
    })

    test('should change button when is the last slide', async () => {
      //arrange
      const { container } = renderComponent(getDefaultProps())
      const nextButton = container.querySelectorAll('section')[1]
      const spyOnChangeState = jest.spyOn(React, 'useState')

      //act
      act(() => {
        userEvent.click(nextButton)
      })

      await waitFor(() => {
        //arrange
        const lastBtn = container.querySelectorAll(`[aria-label='${btnLabel}']`)[0]

        //assert
        expect(spyOnChangeState).toHaveBeenCalled()
        expect(lastBtn).toHaveTextContent(btnLabel)
      })
    })
  }

  describe('should render on BigScreen', () => {
    const renderBigScreen: typeof component = (props) => { return component(props, 1400) }
    commonChecks(renderBigScreen)
  })

  describe('should render on SmallScreen', () => {
    const renderSmallScreen: typeof component = (props) => { return component(props, 475) }
    commonChecks(renderSmallScreen)
  })
})