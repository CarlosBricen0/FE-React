import React from 'react'
import { getGlobalStyle } from '../../../../helpers'
import {
  Button,
  Icon,
  Text,
  RadioSelector
} from '../../../atoms'
import {
  Column,
  Container,
  Spacer
} from '../../../layout'
import { Selector } from '../../../molecules'
import { ClickAndCollectProps } from '../interfaces/IClickAndCollect'

export const ClickAndCollectContent = ({
  comunaList,
  comunaSelected,
  storeSelectorButtonStatus,
  regionList,
  storeList,
  changeDeliveryMethod,
  closeStoreSelector,
  comunaSelector,
  regionSelector,
  storeSelector,
  storeSelectorButton
}: ClickAndCollectProps): React.ReactElement => {
  return (
    <>
      <Container>
        <Column>
          <Container
            absoluteDefault='topRight'
            maxWidth='80px'
            padding='32px'
            position='absolute'
          >
            <Icon
              clickable='pointer'
              color={getGlobalStyle('--color-icons-gray')}
              customSize={18}
              name='Close'
              onClick={closeStoreSelector}
            />
          </Container>

          <Container margin='0px 0px 0px 5px'>
            <Text fontWeight='semibold'>
              Selecciona una tienda para retirar
            </Text>
          </Container>
          <Spacer.Horizontal size={24} />
          <Column>
            <Text fontSize='md' fontWeight='semibold'>
              Región
            </Text>
            <Selector
              onChange={regionSelector}
              options={regionList}
              placeholder='Seleccionar región'
            />
            <Spacer.Horizontal size={32} />
            <Text fontSize='md' fontWeight='semibold'>
              Comuna
            </Text>
            <Selector
              onChange={comunaSelector}
              options={comunaList}
              placeholder='Seleccionar comuna'
            />

            <Spacer.Horizontal size={48} />
            <Text
              color='gray'
              fontSize='md'
              fontWeight='regular'
            >
              {comunaSelected.length > 0 ? `Tiendas en ${comunaSelected}` : 'Tiendas disponibles'}
            </Text>
            <Spacer.Horizontal size={8} />

            <Container
              maxHeight='30vh'
              maxWidth='100%'
              overflow='auto'
            >
              <Column>
                {storeList.map((data, i) => {
                  return (
                    <Container 
                      alignItems='center' 
                      clickable='pointer' 
                      key={i}
                      onClick={() => {return storeSelector(data, i)}}
                    >
                   
                      <RadioSelector checked={data.selected}/>
                  
                      <Column margin='0px 0px 0px 10px' >
                        <Spacer.Horizontal size={12} />
                        <Text
                          clickable='pointer'
                          color='black'
                          fontSize='md'
                          fontWeight='semibold'
                          isFlex
                          textAlign='left'
                        >
                          {`Unimarc ${data.neighborhood}`}
                        </Text>
                        <Spacer.Horizontal size={2} />
                        <Text
                          clickable='pointer'
                          color='gray'
                          fontSize='md'
                          fontWeight='regular'
                          isFlex
                          textAlign='left'
                          truncate={60}
                        >
                          {data.formatedAddress}
                        </Text>
                        <Spacer.Horizontal size={8} />
                      </Column>
                    </Container>
                  )
                })}
              </Column>
            </Container>
          </Column>
          <Spacer.Horizontal size={24} />
          <Button
            borderRadius='24px'
            fontWeight='600'
            label='Confirmar tienda'
            onClick={storeSelectorButton}
            size='large'
            status={storeSelectorButtonStatus}
            width='100%'
          />
          <Spacer.Horizontal size={12} />
        </Column>
      </Container>
      <Button
        borderRadius='24px'
        label='Cambiar a despacho a domicilio'
        onClick={changeDeliveryMethod}
        size='large'
        type='secondary'
        width='100%'
      />
    </>
  )
}
