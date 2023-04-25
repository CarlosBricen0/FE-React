import { render, screen } from '@testing-library/react'
import { HeadingStyleProps, RichText } from './RichText'
import { pageData } from '../../../__mocks__/RichText'

describe('RichText', () => {
  const component = (props?: Array<HeadingStyleProps>) => {
    return render(
      <RichText headingStyles={props} richTextData={pageData} />
    )
  }

  describe('Should render', () => {

    test('headings', () => {
      component()
      expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
      expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument()
      expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument()
    })

    test( 'ul/ol lists', () => {
      component()
      expect(screen.getByText('ordered-list')).toBeInTheDocument()
      expect(screen.getByText('unordered-list')).toBeInTheDocument()
    })

    test('paragraph', () => {
      component()
      expect(screen.getByText(/En consecuencia/g)).toBeInTheDocument()
    })

    test('blockquote', () => {
      component()
      expect(screen.getByText(/Los productos y servicios/g)).toBeInTheDocument()
    })

    test('Hr', () => {
      component()
      expect(screen.getByRole('separator')).toBeInTheDocument()
    })

    test('marks', () => {
      const { container } = component()
      expect(container.querySelector('strong')).toBeInTheDocument()
      expect(container.querySelector('em')).toBeInTheDocument()
      expect(container.querySelector('u')).toBeInTheDocument()
    })
  })

})

