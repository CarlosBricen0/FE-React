import React from 'react'
import { Text } from '../../atoms'
import {
  Column,
  Row,
  Spacer
} from '../../layout'
import { currencyFormat, measurementUnitAbb } from '../../../helpers'
import styles from './Shelf.module.css'

export interface ShelfPriceProps extends React.HTMLProps<HTMLDivElement> {
  fontSizeMobile: 'md' | 'lg' ;
  fontSizeMobileOffer: 'sm' | 'md' ;
  listPrice?: number;
  orientation?: 'vertical' | 'horizontal';
  ppum?: string;
  ppumListPrice?: string;
  price?: number;
  underlineInOffer: 'none' | 'line-through' ;
  validateListPrice: boolean ;
}

export const ShelfPrice = ({
  fontSizeMobile,
  fontSizeMobileOffer,
  listPrice,
  ppum,
  ppumListPrice,
  orientation,
  price,
  underlineInOffer,
  validateListPrice
}: ShelfPriceProps): React.ReactElement<ShelfPriceProps> => {

  return (
    <>
      <Row
        alignItems='center'
        justifyContent='start'
        padding={orientation === 'horizontal' ? '6px 0px 0px 0px' : ''}
      >
        <Text
          color='guardsman-red'
          fontSize={fontSizeMobile}
          fontWeight='semibold'
        >
          {currencyFormat({ number: price, bool: false })}
        </Text>
        <Spacer.Vertical size={4} />
        <Column className={styles.listPrice}>
          <Text color='gray' fontSize='xs'>
            {measurementUnitAbb(ppum)}
          </Text>
        </Column>
      </Row>
      {validateListPrice && price !== listPrice &&
        <Row
          className={styles.listPrice}
          justifyContent='start'
          
        >
          <Text
            color='gray'
            fontSize={fontSizeMobileOffer}
            fontWeight='semibold'
            underline={underlineInOffer}
          >
            {currencyFormat({ number: listPrice, bool: false })}
          </Text>
          <Spacer.Vertical size={4} />
          <Text
            color='gray'
            fontSize='xs'
            underline={underlineInOffer}
          >
            {measurementUnitAbb(ppumListPrice)}
          </Text>
        </Row>
      }
    </>
  )
}
