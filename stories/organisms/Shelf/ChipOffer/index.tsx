import { getGlobalStyle } from '../../../../helpers'
import { Text } from '../../../atoms'
import { Container, Row } from '../../../layout'

export interface ChipOfferPros {
    fontSizeChipOffer: typeof Text.arguments.fontSize;
    offer: number | string;
    padding: string;
    styled: string;
    width: string;
}

export const ChipOffer = ({ 
  fontSizeChipOffer,
  offer,
  padding,
  styled,
  width
}: ChipOfferPros): React.ReactElement<ChipOfferPros> => {
  
  return (
    <Container
      margin='0px 8px 0px 0px'
      maxWidth={width}
      position='relative'
      zIndex={getGlobalStyle('--z-index-0')}
    >

      <Row
        backgroundColor={getGlobalStyle('--color-background-gray-light')}
        borderRadius={getGlobalStyle('--border-radius-2xs')}
        customClassName={styled}
        padding={padding}
        zIndex={getGlobalStyle('--z-index-0')}
      >
        <Text
          color='primary'
          fontSize={fontSizeChipOffer}
          fontWeight='semibold'
          textAlign='center'
          type='label'
        >
          {offer}
        </Text>

      </Row>
      
    </Container>
  )

}
