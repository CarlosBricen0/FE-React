import React from 'react'
import {
  Link,
  Picture,
  Text
} from '../../atoms'
import {
  Column,
  Row,
  Spacer
} from '../../layout'
import { getGlobalStyle } from '../../../helpers'
import { ChipOffer } from './ChipOffer'
import { ShelfPrice } from './ShelfPrice'
import { ChipProps } from '../../molecules'

import styles from './Shelf.module.css'

interface ShelfHorizontalProps extends React.HTMLProps<HTMLDivElement> {
  alignItemsInOffer: 'center' | 'start';
  brand?: string;
  customClassName?: string;
  altText?: string;
  fontSizeChipOffer: string ;
  fontSizeMobile: 'md' | 'lg' ;
  fontSizeMobileOffer: 'sm' | 'md' ;
  format?: string;
  img?: string;
  isMobile: boolean;
  isPromotion?: boolean;
  linkWrapper?: React.FunctionComponent;
  justifyContentPrice: 'center' | 'start';
  listPrice?: number;
  marginChipOffer: string;
  offer?: number | string;
  orientation?: 'vertical' | 'horizontal';
  ppum?: string;
  ppumListPrice?: string;
  price?: number;
  promotion?: { image?: string } & ChipProps;
  stock?: boolean;
  styledChipOffer: string ;
  title?: string;
  typePromotion4: boolean ;
  typePromotion?: number;
  underlineInOffer: 'none' | 'line-through' ;
  url?: string;
  validateListPrice: boolean ;
  onClickProduct?: () => void;
}

export const ShelfHorizontal = ({
  alignItemsInOffer,
  brand,
  altText,
  fontSizeChipOffer,
  fontSizeMobile,
  fontSizeMobileOffer,
  format,
  img,
  isMobile,
  isPromotion,
  justifyContentPrice,
  linkWrapper,
  listPrice,
  marginChipOffer,
  offer,
  orientation,
  ppum,
  ppumListPrice,
  price,
  promotion,
  stock,
  styledChipOffer,
  title,
  typePromotion,
  typePromotion4,
  underlineInOffer,
  url,
  validateListPrice,
  onClickProduct
}: ShelfHorizontalProps): React.ReactElement<ShelfHorizontalProps> => {

  const shelfPriceProps = {
    fontSizeMobile,
    fontSizeMobileOffer,
    listPrice,
    orientation,
    ppum,
    ppumListPrice,
    price,
    underlineInOffer,
    validateListPrice
  }

  return (
    <Row justifyContent='between' minHeight='100px'>
      <>
        <Link
          href={url}
          title={title}
          underline='none'
          wrapper={linkWrapper}
        >
          <Column
            clickable='pointer'
            onClick={onClickProduct}
            padding={promotion ? '30px 0px 0px 0px' : '15px 0px'}
          >
            <Row clickable='pointer' justifyContent='center'>
              <Picture
                alt={altText}
                border='none'
                borderRadius='none'
                className={!stock ? styles.outOfStock : ''}
                height='70px'
                src={img}
                width='70px'
              />
            </Row>
          </Column>
        </Link>
      </>
      <Column height='100px' padding='0px 0px 0px 10px'>
        <Row>
          <Text
            clickable='pointer'
            color='black'
            customClassName={styles.brandText}
            fontSize='sm'
            fontWeight='semibold'
          >
            {brand?.toLowerCase()}
          </Text>
        </Row>
        <Row>
          <Text
            clickable='pointer'
            color='black'
            customClassName={styles.nameProduct}
            fontSize={isMobile ? 'sm' : 'md'}
          >
            {title?.charAt(0) + title?.toLowerCase().slice(1)}
          </Text>
        </Row>
        <Row>
          {format ?
            <Text color='gray' fontSize='sm'>
              {format}
            </Text>
            :
            <Spacer.Horizontal size={16} />
          }
        </Row>
        {stock ? (
          <Row justifyContent='start'>
            <Row alignItems={alignItemsInOffer} justifyContent={justifyContentPrice}>
              {isPromotion &&
                <Column
                  justifyContent='start'
                  margin={typePromotion !== 4 && marginChipOffer}
                  maxWidth='max-content'
                  padding='6px 0px 0px 0px'
                >
                  {typePromotion4 &&
                    <Row
                      justifyContent='start'
                      minWidth='21px'
                      padding='1px 0px 0px 0px'
                    >
                      <Text
                        color='guardsman-red'
                        fontSize='md'
                        fontWeight='bold'
                        textAlign='right'
                        type='label'
                      >
                        {offer}
                      </Text>
                      <Spacer.Vertical size={2} />
                    </Row>
                  }
                  {!typePromotion4 &&
                    <ChipOffer
                      fontSizeChipOffer={fontSizeChipOffer}
                      offer={offer}
                      padding='2px 1px 2px 3px'
                      styled={styledChipOffer}
                      width='28px'
                    />
                  }
                </Column>
              }
              {/* price */}
              <Column>
                {<ShelfPrice {...shelfPriceProps}/>}
              </Column>
            </Row>
          </Row>
        ) : (
          <Row
            backgroundColor={getGlobalStyle('--color-neutral-gray-dark')}
            borderRadius={getGlobalStyle('--border-radius-2xs')}
            justifyContent='center'
            maxWidth='60px'
          >
            <Text color='white' fontSize='sm'>
              sin stock
            </Text>
          </Row>
        )}
      </Column>
    </Row>
  )
}
