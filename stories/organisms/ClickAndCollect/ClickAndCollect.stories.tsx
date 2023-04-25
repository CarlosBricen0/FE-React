import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ClickAndCollect } from './ClickAndCollect'

export default {
  title: 'Organisms/ClickAndCollect',
  component: ClickAndCollect
} as ComponentMeta<typeof ClickAndCollect>

const Template: ComponentStory<typeof ClickAndCollect> = (args) => {
  return <ClickAndCollect {...args} />
}

export const ClickAndCollectTemplate = Template.bind({})
ClickAndCollectTemplate.args = {
  comunaList: ['Las Condes', 'Vitacura', 'Lo Barnechea', 'La Florida'],
  comunaSelected: '',
  storeSelectorButtonStatus: 'disabled',
  regionList: ['Region Metropolitana', 'Valparaíso'],
  storeList: [
    {
      addressId: '901',
      addressType: 'pickup-in-point',
      city: 'Santiago',
      country: 'CHL',
      formatedAddress: 'Avenida Manquehue Norte, 457, Region Metropolitana',
      geoCoordinates: [-70.56832539999999, -33.4040798],
      id: '901',
      name: 'Unimarc Las Condes',
      neighborhood: 'Las Condes',
      number: '457',
      region: 'Region Metropolitana',
      selected: false,
      state: 'REGIÓN METROPOLITANA',
      street: 'Avenida Manquehue Norte'
    },
    {
      addressId: '0362',
      addressType: 'pickup-in-point',
      city: 'Santiago',
      country: 'CHL',
      formatedAddress: 'Avenida Vitacura, 8400, Region Metropolitana',
      geoCoordinates: [-70.5542866, -33.3848675],
      id: '0362',
      name: 'Unimarc Vitacura',
      neighborhood: 'Vitacura',
      number: '8400',
      region: 'Region Metropolitana',
      selected: false,
      state: 'REGIÓN METROPOLITANA',
      street: 'Avenida Vitacura'
    },
    {
      addressId: '0917',
      addressType: 'pickup-in-point',
      city: 'Santiago',
      country: 'CHL',
      formatedAddress:
        'Avenida Jose Alcalde Delano, 10497, Region Metropolitana',
      geoCoordinates: [-70.53957, -33.35755],
      id: '0917',
      name: 'Unimarc Lo Barnechea',
      neighborhood: 'Lo Barnechea',
      number: '10497',
      region: 'Region Metropolitana',
      selected: false,
      state: 'REGIÓN METROPOLITANA',
      street: 'Avenida Jose Alcalde Delano'
    },
    {
      addressId: '0581-5',
      addressType: 'pickup-in-point',
      city: 'Santiago',
      country: 'CHL',
      formatedAddress: 'Vicuña mackenna, 6331, Region Metropolitana',
      geoCoordinates: [-70.6081244, -33.5145048],
      id: '0581-5',
      name: 'Unimarc La Florida',
      neighborhood: 'La Florida',
      number: '6331',
      region: 'Region Metropolitana',
      selected: false,
      state: 'REGIÓN METROPOLITANA',
      street: 'Vicuña mackenna'
    },
    {
      addressId: '0445',
      addressType: 'pickup-in-point',
      city: 'Valparaiso',
      country: 'CHL',
      formatedAddress: 'Avenida Valparaíso, 1982, Valparaíso',
      geoCoordinates: [-71.390571, -33.045434],
      id: '0445',
      name: 'Unimarc Villa Alemana',
      neighborhood: 'Villa Alemana',
      number: '1982',
      region: 'Valparaíso',
      selected: false,
      state: 'VALPARAISO',
      street: 'Avenida Valparaíso'
    }
  ]
}
