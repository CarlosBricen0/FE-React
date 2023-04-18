import { render, screen } from '@testing-library/react'
import { RenderStringHtml } from './RenderStringHtml'
import { htmlTest } from '../../../__mocks__/RenderStringHtml'

describe('<RenderStringHtml htmlString={String} />', () => {
  const component = () => {
    return render(
      <RenderStringHtml htmlString={htmlTest} />
    )
  }

  test('should render title', () => {
    component()
    expect(screen.getByText('Nueva campaña Example Desktop')).toBeInTheDocument()
  })

})
