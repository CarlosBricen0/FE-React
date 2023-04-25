import React from 'react'
import { Container, Row } from '../../layout'
import { Chip, ChipProps } from '../../molecules'
import { Picture } from '../../atoms'
import { Position } from '../../layout/BaseContainer/BaseContainer'

export interface ChipLabelProps {
  font?: number;
  padding?: string;
}
export type pageTypeProp = 'PDP'

export interface ShelfLabelProps {
  altText?: string;
  chip?: ChipLabelProps;
  pageType?: pageTypeProp;
  promotion?: { image?: string } & ChipProps;
  provider?: string;
  promotionContainerPadding?: string;
  position?: Position;
}

export const ShelfLabel = ({
  altText,
  chip,
  pageType,
  promotion,
  provider,
  promotionContainerPadding,
  position = 'absolute'
}: ShelfLabelProps): React.ReactElement<ShelfLabelProps> => {
  if ((!promotion && !provider) || pageType === 'PDP') {
    return null
  }
  return (
    <Container
      absoluteDefault='topLeft'
      backgroundColor='transparent'
      justifyContent='start'
      padding={promotionContainerPadding}
      position={position}
      zIndex='1'
    >
      <Row position='relative'>
        {!promotion?.image ?
          <Chip
            {...promotion}
            fontSize={chip?.font}
            padding={chip?.padding}
            provider={provider}
          />
          :
          <Picture
            alt={altText}
            border='none'
            borderRadius='none'
            height='20px'
            src={promotion?.image}
            width='100%'
          />
        }
      </Row>
    </Container>
  )
}