import { Carousel } from './Carousel'
import {
  act,
  render,
  screen,
  waitFor
} from '@testing-library/react'
import React from 'react'
import userEvent from '@testing-library/user-event'

describe('Carousel', () => {
  const images = [
    'https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1550353175-a3611868086b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1550330039-a54e15ed9d33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1549737328-8b9f3252b927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1549985908-597a09ef0a7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
  ]

  const componentImage = () => {
    return images.map((image, key) => {
      return (
        <img
          alt={`test-${key}`}
          key={image}
          src={image}
          style={{ width: '100%', height: '100%' }}
        />
      )
    })
  }

  const carouselProps = {
    children: componentImage(),
    ssr: true,
    deviceType: 'desktop',
    showDots: true,
    containerProps: {
      maxWidth: '500px',
      maxHeight: '500px'
    }
  }

  const component = (props?) => {
    return render(
      <Carousel { ...carouselProps} {...props} />
    )
  }

  test('Should change to the next image when arrow is clicked', async () => {
    const { container } = component()

    await waitFor(() => {
      return screen.findByAltText('test-1')
    })

    const nextStep = screen.getByRole('ArrowRightNavigate')

    act(() => {
      userEvent.click(nextStep)
    })
    
    expect(container.querySelectorAll('li')[1]).toHaveAttribute('aria-hidden', 'false')
    expect(screen.findByAltText('test-2')).toBeDefined()
  })

  test('Should change to the next image when dots is clicked', async () => {
    const { container } = component()

    await waitFor(() => {
      return screen.findByAltText('test-1')
    })

    const dot = container.getElementsByClassName('react-multi-carousel-dot-list ')[0].children[1]
    act(() => {
      userEvent.click(dot)
    })

    expect(container.getElementsByClassName('active undefined')[0])
    expect(container.querySelectorAll('li')[1]).toHaveAttribute('aria-hidden', 'false')
    expect(screen.findByAltText('test-2')).toBeDefined()
  })

  test('Should change to the next image when image is clicked', async () => {
    const prop = { ...carouselProps, preview: true }
    const { container } = component({prop})

    await waitFor(() => {
      return screen.findByAltText('test-1')
    })

    const dot = container.getElementsByClassName('react-multi-carousel-dot-list ')[0].children[1]
    act(() => {
      userEvent.click(dot)
    })

    expect(container.getElementsByClassName('active undefined')[0])
    expect(container.querySelectorAll('li')[1]).toHaveAttribute('aria-hidden', 'false')
    expect(screen.findByAltText('test-2')).toBeDefined()
  })
})