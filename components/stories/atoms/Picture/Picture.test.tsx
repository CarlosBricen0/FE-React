import { fireEvent, render } from '@testing-library/react'
import { Picture } from './Picture'

describe('Picture', () => {
  const mockOnClick = jest.fn()
  const component = () => {
    return render(
      <Picture
        alt='The image alt tag for the image'
        anchor={true}
        height='36'
        onClick={mockOnClick}
        src='https://www.example.com/image.jpg'
        title='title-image'
        url='https://www.linkredirect.com'
        width='85'
      />
    )
  }

  test('should render Picture', () => {
    component()
    expect(document.querySelector('picture')).toBeInTheDocument()
  })

  test('should have the correct dimensions (height and width)', () => {
    component()
    expect(document.querySelector('img').height).toBe(36)
    expect(document.querySelector('img').width).toBe(85)
  })

  test('should alt contains correct value', () => {
    component()
    expect(document.querySelector('img').alt).toContain('The image alt tag for the image')
  })

  test('should title contains correct value', () => {
    component()
    expect(document.querySelector('img').title).toContain('title-image')
  })

  test('should href contains correct value', () => {
    component()
    expect(document.querySelector('a').href).toContain('https://www.linkredirect.com')
  })

  test('should be clickable', () => {
    component()
    fireEvent.click(document.querySelector('a'))
    expect(mockOnClick).toHaveBeenCalledTimes(1)
  })

  test('should src contains correct value', () => {
    component()
    expect(document.querySelector('img').src).toContain('https://www.example.com/image.jpg')
  })
})