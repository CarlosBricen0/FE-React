import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { DeliverySelectorType } from './DeliverySelectorType'

export default {
  title: 'Organisms/DeliverySelectorType',
  component: DeliverySelectorType
} as ComponentMeta<typeof DeliverySelectorType>

const Template: ComponentStory<typeof DeliverySelectorType> = (args) => {
  return <DeliverySelectorType {...args} />
}

export const DeliverySelectorTypeTemplate = Template.bind({})
DeliverySelectorTypeTemplate.args = {
  comunaList: ['Las Condes', 'Vitacura', 'Lo Barnechea', 'La Florida'],
  comunaSelected: '',
  CACSelectorButtonStatus: 'initial',
  storeSelectorButtonStatus: 'initial',
  enabledDeliverySelector: false,
  disabledCACSelectorButton: false,
  disabledStoreSelectorButton: false,
  enabledStoreSelector: false,
  openDeliverySelector: true,
  failModalIsOpen: false,
  manualAddress: false,
  failModalTitle: 'test',
  failModalContent: 'this is an error',
  openStoreSelector: false,
  failModalButtonText: 'ok',
  titlePosition: 'center',
  contentPosition: 'center',
  regionList: ['Region Metropolitana', 'Valparaíso'],
  storeList: [
    {
      addressId: '91',
      addressType: 'pickup-in-point',
      city: 'Santiago',
      country: 'CHL',
      formatedAddress: 'Avenida Man Metropolitana',
      geoCoordinates: [-539999999, -40798],
      id: '91',
      name: 'Unimndes',
      neighborhood: 'Les',
      number: '57',
      region: 'Repolitana',
      selected: false,
      state: 'REGIOLITANA',
      street: 'Aveniuehue Norte'
    },
    {
      addressId: '2',
      addressType: 'pickup-in-point',
      city: 'Sago',
      country: 'CHL',
      formatedAddress: 'Ave0, Region Metropolitana',
      geoCoordinates: [-5542866, -38675],
      id: '02',
      name: 'Untacura',
      neighborhood: 'Vira',
      number: '80',
      region: 'Regtana',
      selected: false,
      state: 'REGIÓNLITANA',
      street: 'Avenidura'
    },
    {
      addressId: '7',
      addressType: 'pickup-in-point',
      city: 'Saiago',
      country: 'CHL',
      formatedAddress:
        'Avenida J97, Region Metropolitana',
      geoCoordinates: [-70.53957, -33.35755],
      id: '097',
      name: 'Unimnechea',
      neighborhood: 'Lechea',
      number: '17',
      region: 'Region litana',
      selected: false,
      state: 'REGIÓN METRLITANA',
      street: 'Avenida Jde Delano'
    }
  ]
}
