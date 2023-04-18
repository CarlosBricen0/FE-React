export const headerLinks = [
  {title: 'Club Ahorro', url: '#', target:'_self'},
  {title: 'Unipay', url: '#', target:'_self'},
  {title: 'Locales y Horarios', url: '#', target:'_self'}
]

export const offersLinks = [
  {title: 'Copetito', url: '#', target:'_self'},
  {title: '3x2', url: '#', target:'_self'},
  {title: 'Catálogo Unimarc', url: '#', target:'_self'}
]
export const headerSearchMock = {
  iconWidth: '15',
  clearButton: false,
  isVisibleDropDownSearch: false,
  iconSearch: 'SearchCart',
  backgroundGradientIconSearch: '',
  searchPlaceholder: '¿Qué productos necesitas hoy?',
  backgroundSearch: 'transparent',
  borderSearch: '1px solid white',
  dropDownSearch: {
    isLoadingSearch: true,
    headSearch: {
      suggestionsTitle: 'Más buscados',
      suggestionsData: [
        { text: '1. test', onClick: () => { return 'test' } }
      ]
    },
    bodySearch: {
      data: [{
        title: 'Pack Cerveza Heineken botella 12 un de 330 cc',
        img: 'https://unimarc.vteximg.com.br/arquivos/ids/213450-200-200/000000000000501297-DIS-01.jpg',
        price: 7690,
        listPrice: 12290,
        inOffer: true
      }]
    }
  }
}