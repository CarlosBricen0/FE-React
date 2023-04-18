import React from 'react'
import { getGlobalStyle } from '../../../../../../helpers'
import {
  Button,
  ButtonStatus,
  Icon,
  RadioSelector,
  Text
} from '../../../../../atoms'
import { Column, Container, Spacer } from '../../../../../layout'
import styles from './DeliverySelectorContent.module.css'

interface DeliverySelectorContentProps {
  CACSelectorButtonStatus: ButtonStatus;
  enabledDeliverySelector: boolean;
  enabledStoreSelector: boolean;
  activeDeliverySelector: () => void;
  activeStoreSelector?: () => void;
  cacSelectorButton: () => void;
  closeDeliverySelector: () => void;
}

export const DeliverySelectorContent = ({
  CACSelectorButtonStatus,
  enabledDeliverySelector,
  enabledStoreSelector,
  activeDeliverySelector,
  activeStoreSelector,
  cacSelectorButton,
  closeDeliverySelector
}: DeliverySelectorContentProps): React.ReactElement => {

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
              color={getGlobalStyle('--color-icons-black')}
              customSize={18}
              name='Close'
              onClick={closeDeliverySelector}
            />
          </Container>

          <Spacer.Horizontal size={32} />
          <Text fontWeight='semibold'>¿Cómo quieres recibir tu compra?</Text>
          <Spacer.Horizontal size={32} />

          <Container
            alignItems='center'
            borderRadius={getGlobalStyle('--border-radius-md')}
            clickable='pointer'
            customClassName={styles.boxSelector}
            justifyContent='between'
            onClick={activeDeliverySelector}
            padding='12px'
          >
            <Column
              backgroundColor={getGlobalStyle('--color-background-gray-light')}
              borderRadius='20px'
              justifyContent='center'
              maxWidth='50px'
              padding='10px'
            >
              <Container margin='3px 0px -4px 3px'>
                <Icon
                  clickable='pointer'
                  color={getGlobalStyle('--color-icons-gray')}
                  customSize={30}
                  name='Motorcycle'
                />
              </Container>
            </Column>

            <Column margin='0px 0px 0px 15px'>
              <Text clickable='pointer' fontWeight='regular'>Despacho a domicilio</Text>
            </Column>

            <RadioSelector checked={enabledDeliverySelector} />
          </Container>
          <Spacer.Horizontal size={24} />
          <Container
            alignItems='center'
            borderRadius='12px'
            clickable='pointer'
            customClassName={styles.boxSelector}
            justifyContent='between'
            onClick={activeStoreSelector}
            padding='12px'
          >
            <Column
              backgroundColor={getGlobalStyle('--color-background-gray-light')}
              borderRadius={getGlobalStyle('--border-radius-lg')}
              justifyContent='center'
              maxWidth='50px'
              padding='10px'
            >
              <Container >
                <Icon
                  clickable='pointer'
                  color={getGlobalStyle('--color-icons-gray')}
                  customSize={30}
                  name='Shop'
                />
              </Container>
            </Column>

            <Column margin='0px 0px 0px 15px'>
              <Text clickable='pointer' fontWeight='regular'>Retiro en tienda </Text>
            </Column>

            <RadioSelector checked={enabledStoreSelector} />
          </Container>

          <Spacer.Horizontal size={24} />
          <Button
            borderRadius='24px'
            fontWeight={getGlobalStyle('--font-weight-semibold')}
            label='Confirmar'
            onClick={cacSelectorButton}
            size='large'
            status={CACSelectorButtonStatus}
            width='100%'
          />
          <Spacer.Horizontal size={4} />
        </Column>
      </Container>
    </>
  )
}
