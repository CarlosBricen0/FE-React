import React from 'react'
import { getGlobalStyle } from '../../../helpers'
import {
  ButtonStatus,
  Divider,
  Icon,
  Text,
  Title
} from '../../atoms'
import {
  Column,
  Container,
  Spacer
} from '../../layout'
import { ContentModalSimulationButtons } from './ContentModalSimulationButtons'
import { ModalShelf } from './ModalShelf'
import { SimulationItem } from './SimulationModal'

interface ContentModalSimulationProps {
  buttonStatus?: ButtonStatus;
  content?: string;
  labelPrimary?: string;
  labelSecondary?: string;
  items?: SimulationItem[];
  title?: string;
  isMobile?: boolean;
  action?: () => void;
  handleKeepAddress?: () => void;
}

export const ContentModalSimulation = ({
  buttonStatus,
  isMobile,
  content,
  title = '¿Quieres cambiar tu dirección?',
  labelPrimary = 'Aceptar',
  labelSecondary,
  items,
  action,
  handleKeepAddress
}: ContentModalSimulationProps) => {
  const contentModalSimulationButtonsProps = ({
    buttonStatus,
    isMobile,
    labelPrimary,
    labelSecondary,
    action,
    handleKeepAddress
  })

  return (
    <>
      <Container padding='11.5px 0px 18.5px 0px'>
        <Title
          color={getGlobalStyle('--color-icons-black')}
          customFontSize={getGlobalStyle(`--font-size-2xl`)}
          fontWeight='semibold'
          headingLevel='h5'
          text={title}
        />
      </Container>
      {!isMobile && (
        <Container
          absoluteDefault='topRight'
          disabled={true}
          left='442px'
          maxWidth='40px'
          onClick={buttonStatus === 'loading' ? null : handleKeepAddress}
          padding='26.5px 0px'
          position='absolute'
        >
          <Icon
            clickable='pointer'
            color={getGlobalStyle('--color-icons-black')}
            customSize={30}
            name='Close2'
          />
        </Container>
      )}
      <Divider
        color={getGlobalStyle('--color-neutral-gray')}
        thickness={1}
        verticalMargin={0}
      />
      <Spacer.Horizontal size={16}/>
      <Container customHeight={isMobile ? '80vh' : '382px'} overflow='auto'>
        <Column>
          <Text fontSize={isMobile ? 'md' : 'base'}>
            {content ||
              'Hay productos no disponibles para tu nueva dirección. Puedes sustituirlos en el carro o mantener la dirección actual y continuar con los productos.'
            }
          </Text>
          <Spacer.Horizontal size={16}/>
          <Spacer.Horizontal size={2}/>
          <Spacer.Horizontal size={1}/>
          {items?.map((item) => {
            return (
              <Column key={item.id}>
                <Container>
                  <ModalShelf item={item}/>
                </Container>
                <Spacer.Horizontal size={16}/>
                <Spacer.Horizontal size={2}/>
                <Spacer.Horizontal size={1}/>
              </Column>
            )
          })}
        </Column>
      </Container>
      <ContentModalSimulationButtons {...contentModalSimulationButtonsProps}/>
    </>
  )
}