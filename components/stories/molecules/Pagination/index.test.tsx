import { render, screen } from '@testing-library/react'

import { Pagination } from '.'

describe('<Pagination currentPage={0} itemsPerPage={[0,1,2,3]} handleOnClick = {changePage} handlePrevPage={prevPage} handleNextPage={nextPage} /> ', () => {
  const mockClick = jest.fn()
  const mockPrevPage = jest.fn()
  const mockNextPage = jest.fn()
  
  test('shuold render a Pagination with only 4 pages', () => {
    render(
      <Pagination
        currentPage={0}
        handleNextPage={mockNextPage}
        handleOnClick={(e) => {
          mockClick(e)
        }}
        handlePrevPage={mockPrevPage}
        items={[0, 1, 2, 3]}
      />
    )

    expect(screen.getByText('1')).toBeInTheDocument()
  })
})