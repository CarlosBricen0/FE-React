import React from 'react'
import { Icons } from '../../../assets/SvgComponents/SvgIcons'
import { getGlobalStyle } from '../../../helpers'
import {
  FontSize,
  Icon,
  Text
} from '../../atoms/index'
import { Column, Container } from '../../layout/index'
import styles from './CartIcon.module.css'

export type ColorQuantity = 'primary' | 'secondary' | 'gray' | 'inactive' | 'black' | 'white' | 'success' | 'error' | 'warning' | 'blue';

export interface CartIconProps {
  backgroundQuantity?: string;
  colorIcon?: string;
  colorLoaderQuantity?: string;
  colorQuantity?: ColorQuantity;
  customSizesIcon?: number;
  customSizesQuantity?: FontSize;
  customSizesQuantityContainer?: string;
  icon?: keyof (typeof Icons);
  quantity?: number;
  quantityLoading?: boolean;
  site?: 'unimarc' | 'alvi';
  total?: string;
  onClickCart?: () => void;
}

export const CartIcon = ({
  backgroundQuantity = 'white',
  colorIcon = 'white',
  colorLoaderQuantity = getGlobalStyle('--color-primary-red-dark'),
  colorQuantity = 'primary',
  customSizesIcon = 24,
  customSizesQuantity = 'sm',
  customSizesQuantityContainer,
  icon = 'Cart',
  quantity = 96,
  quantityLoading = false,
  site = 'unimarc',
  total,
  onClickCart
}: CartIconProps): React.ReactElement<CartIconProps> => {
  const unimarcSite = site === 'unimarc'
  const classNameSite = unimarcSite ? '' : styles.containerQuantityAlvi
  const styleLoading = unimarcSite ? 'loading' : 'loading-alvi'
  const customHeight = total ? '50px' : '35px'
  return (
    <Column
      customHeight={customHeight}
      minWidth='35px'
      onClick={onClickCart}
      position='relative'
    >
      <Column
        absoluteDefault='bottomLeft'
        alignItems='center'
        justifyContent='center'
        position='absolute'
      >
        <div className={styles.cartIcon}>
          <Icon
            clickable='pointer'
            color={colorIcon}
            customSize={customSizesIcon}
            name={icon}
          />
        </div>
        { total &&
          <Text
            color='white'
            fontSize='xs'
            lineHeight='15px'
          >
            {total}
          </Text>
        }
      </Column>
      {quantity > 0 && (
        <Container
          absoluteDefault='topRight'
          alignItems='center'
          backgroundColor={backgroundQuantity}
          borderRadius='50%'
          customClassName={classNameSite}
          customHeight={customSizesQuantityContainer}
          height='100%'
          justifyContent='center'
          maxWidth={customSizesQuantityContainer}
          minWidth={unimarcSite ? 'initial' : customSizesQuantityContainer}
          position='absolute'
          role='quantityBalloon'
        >
          {quantityLoading && (
            <Container customHeight='inherit' position='absolute'>
              <div className={styles[styleLoading]} >
                <Icon
                  color={colorLoaderQuantity}
                  customSize={unimarcSite ? 15 : 19}
                  name='Loading'
                />
              </div>
            </Container>
          )}
          {!quantityLoading && (
            <Text
              clickable='pointer'
              color={colorQuantity}
              fontSize={unimarcSite ? 'xs' : customSizesQuantity}
              fontWeight='semibold'
              textAlign='center'
            >
              {quantity}
            </Text>
          )}
        </Container>
      )
      }
    </Column >
  )
}