import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Search } from './Search'
import { getGlobalStyle } from '../../../helpers'

export default {
  title: 'Organisms/Search',
  component: Search
} as ComponentMeta<typeof Search>

const Template: ComponentStory<typeof Search> = (args) => { return <Search {...args} /> }

export const SearchTemplate = Template.bind({})
SearchTemplate.args = {
  backgroundIconSearch: getGlobalStyle('--color-background-primary'),
  backgroundSearch: 'white',
  borderSearch: `1px solid ${getGlobalStyle('--color-primary-disabled')}`,
  clearButton: true,
  iconSearch: 'SearchCart',
  isVisibleDropDownSearch: true,
  searchPlaceholder: '¿Qué productos necesitas hoy?',
  dropDownSearch: {
    headSearch: {
      suggestionsTitle: 'Más buscados',
      suggestionsData: [{ text: 'test', onClick: () => { return 'test' } }]
    },
    bodySearch: {
      data: [{
        title: 'Pack Cerveza Heineken botella 12 un de 330 cc',
        img: 'https://unimarc.vteximg.com.br/arquivos/ids/213450-200-200/000000000000501297-DIS-01.jpg',
        price: 7690,
        listPrice: 12290,
        inOffer: true
      }],
      handleSearchImpressions: () => { return }
    }
  }
}