import React, { useMemo, MouseEvent } from 'react'
import classNames from 'classnames'
import {
  BigScreen,
  getGlobalStyle,
  SmallScreen
} from '../../../helpers'
import {
  Button,
  ButtonProps,
  ButtonStatus,
  Color,
  Link,
  Picture,
  Text
} from '../../atoms'
import { Column, Container, Row } from '../../layout'
import styles from './Coupon.module.css'
import { CouponDescription, CouponDescriptionProps } from './CouponDescription'
import { CouponDivider } from './CouponDivider'
import { CouponLoader } from './CouponLoader/CouponLoader'

export type CouponStatus = 'active' | 'used' | undefined | null;

export interface CouponProps extends CouponDescriptionProps {
  activeButtonRef?: React.Ref<HTMLButtonElement>;
  activeButtonText?: string;
  backgroundColor?:string;
  badgeText?: string;
  className?: string;
  colorText:Color;
  defaultButtonText?: string;
  disabled?: boolean;
  imageSrc?: string;
  index?: number;
  isFetching?: boolean;
  loading?: boolean;
  status?: CouponStatus;
  unipay?: boolean;
  usedButtonText?: string;
  viewProductsHref?: string;
  viewProductsRef?: React.Ref<HTMLAnchorElement>;
  viewProductsText?: string;
  onClick?: () => void;
  onClickViewProducts?: () => void;
}

const getButtonStatus = (loading: boolean, disabled: boolean) : ButtonStatus => {
  if (loading) return 'loading'
  if (disabled) return 'disabled'
  return 'initial'
}

const TagTextColorsMap: Record<'unimarc' | 'alvi', Color> = {
  'alvi': 'blue',
  'unimarc': 'white'
}

const TagBackgroundColorsMap: Record<'unimarc' | 'alvi', string> = {
  'alvi': '--color-alvi-background-selago',
  'unimarc': '--color-secondary-blue'
}

export const Coupon = React.forwardRef(function Coupon({
  activeButtonRef,
  activeButtonText = 'Activado',
  backgroundColor,
  badgeText,
  className,
  colorText='black',
  defaultButtonText = 'Activar',
  disabled,
  imageSrc,
  isFetching,
  loading,
  status,
  unipay,
  usedButtonText = 'Utilizado',
  viewProductsHref = '',
  viewProductsRef,
  viewProductsText = 'Ver productos',
  onClick,
  onClickViewProducts,
  ...props
}: CouponProps, ref) {
  const badgeVisibility = badgeText ? 'visible' : 'hidden'

  const buttonProps = useMemo<ButtonProps>(() => {
    switch (status) {
      case 'active':
        return {
          label: activeButtonText,
          background: getGlobalStyle('--color-primary-pink-light'),
          color: getGlobalStyle('--color-primary-red-darker'),
          fontWeight: getGlobalStyle('--font-weight-bold')
        }
      case 'used':
        return {
          label: usedButtonText,
          status: 'disabled',
          fontWeight: getGlobalStyle('--font-weight-bold')
        }
      default:
        return {
          label: defaultButtonText,
          fontWeight: getGlobalStyle('--font-weight-bold')
        }
    }
  }, [status])

  const buttonStatus = getButtonStatus(loading, disabled)

  const handleClick = (e?: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()
    if (loading) return
    if (['active', 'used'].includes(status)) return
    onClick?.()
  }

  const handleParentClick = () => {
    onClickViewProducts()
  }

  if (isFetching) {
    return <CouponLoader />
  }

  return (
    <>
      <SmallScreen>
        <Container
          alignItems='stretch'
          borderRadius='8px'
          className={classNames(styles['coupon--smallScreen'], className)}
          gap={8}
          onClick={handleParentClick}
          padding='12px 32px'
          position='relative'
          ref={ref}
        >
          {
            unipay && (
              <Container
                absoluteDefault='topLeft'
                alignItems='center'
                backgroundColor={getGlobalStyle('--color-campaigns-turquoise')}
                borderRadius='8px 0 4px 0'
                customWidth='max-content'
                justifyContent='center'
                margin='0 4px'
                padding='1px 5px'
                position='absolute'
              >
                <Text color='black' fontSize='sm'>
                  Exclusivo
                </Text>
                <Container margin='0 0 -3px 5px'>
                  <Picture
                    height='9'
                    src={
                      'https://images.ctfassets.net/un6yvtd6uq5z/6HzkT7KPRG3dxjByl23tjp/710d1a9d69166c40ea703778f03c1ee7/Unipay.svg'
                    }
                    width='30'
                  />
                </Container>
              </Container>
            )
          }
          
          <Column customWidth='66' margin='8px 0 0 0'>
            <CouponDescription {...props} />

            <Container justifyContent='start' margin='17px 0 0 0'>
              <Button
                borderRadius='2rem'
                buttonRef={activeButtonRef}
                minWidth='initial'
                onClick={handleClick}
                status={buttonStatus}
                width='90%'
                {...buttonProps}
              />
            </Container>
          </Column>

          <CouponDivider type='vertical' />

          <Column
            alignItems='center'
            clickable='pointer'
            customWidth='34'
            justifyContent='center'
          >
            <Link
              color={getGlobalStyle('--color-base-primary')}
              fontSize='xs'
              href={viewProductsHref}
              linkRef={viewProductsRef}
              underline='always'
            >
              {viewProductsText}
            </Link>

            <Container 
              clickable='pointer' 
              justifyContent='center' 
              margin='5px 0 0 0'
            >
              <Picture
                height={'80'}
                src={imageSrc}
                width={'80'}
              />
            </Container>

            <Container
              backgroundColor={backgroundColor}
              borderRadius={getGlobalStyle('--border-radius-2xs')}
              clickable='pointer'
              customWidth='max-content'
              justifyContent='center'
              margin='5px 0 0 0'
              padding='2px 5px'
              visibility={badgeVisibility}
            >
              <Text 
                clickable='pointer' 
                color={colorText} 
                fontSize='xs'
              >
                {badgeText || '.'}
              </Text>
            </Container>
          </Column>
        </Container>
      </SmallScreen>

      <BigScreen>
        <Column
          alignItems='stretch'
          customClassName={styles['coupon--bigScreen']}
          onClick={handleParentClick}
          position='relative'
          ref={ref}
          {...props}
        >
          <Column
            alignItems='center'
            borderRadius='8px 8px 0 0'
            clickable='pointer'
            customClassName={styles['coupon--bigScreen__top']}
            customHeight='60%'
            justifyContent='center'
            padding='12px 24px'
            zIndex={'2'}
          >
            <Link
              color={getGlobalStyle('--color-base-primary')}
              fontSize='sm'
              href={viewProductsHref}
              linkRef={viewProductsRef}
              underline='always'
            >
              {viewProductsText}
            </Link>

            <Container 
              clickable='pointer' 
              justifyContent='center' 
              margin='18px 0 0 0'
            >
              <Picture
                grayscale={status === 'used'}
                height='150'
                src={imageSrc}
                width='150'
              />
            </Container>

            <Row 
              clickable='pointer' 
              justifyContent='center' 
              margin='18px 0 -25px 0'
            >
              { unipay && (
                <Container
                  alignItems='center'
                  backgroundColor={getGlobalStyle(
                    '--color-campaigns-turquoise'
                  )}
                  borderRadius='4px'
                  clickable='pointer'
                  customWidth='max-content'
                  justifyContent='center'
                  margin='0 4px'
                  padding='2px 5px'
                >
                  <Text
                    clickable='pointer'
                    color='black'
                    fontSize='sm'
                    fontWeight='medium'
                  >
                    Exclusivo
                  </Text>
                  <Container clickable='pointer' margin='0 0 -5px 3px'>
                    <Picture
                      height='9'
                      src={
                        'https://images.ctfassets.net/un6yvtd6uq5z/6HzkT7KPRG3dxjByl23tjp/710d1a9d69166c40ea703778f03c1ee7/Unipay.svg'
                      }
                      width='30'
                    />
                  </Container>
                </Container>
              )}
              
              <Container
                backgroundColor={backgroundColor}
                borderRadius={getGlobalStyle('--border-radius-2xs')}
                clickable='pointer'
                customWidth='max-content'
                justifyContent='center'
                margin='0 4px'
                padding='2px 5px'
                visibility={badgeVisibility}
              >
                <Text 
                  clickable='pointer' 
                  color={colorText} 
                  fontSize='sm'
                >
                  {badgeText || '.'}
                </Text>
              </Container>
            </Row>
          </Column>

          <Column
            alignItems='center'
            clickable='pointer'
            customClassName={styles['coupon--bigScreen__middle']}
            customHeight={'60px'}
            justifyContent='center'
            zIndex={'1'}
          >
            <CouponDivider type='horizontal' />
          </Column>

          <Column
            borderRadius='0 0 8px 8px'
            clickable='pointer'
            customClassName={styles['coupon--bigScreen__bottom']}
            customHeight='40%'
            justifyContent='between'
            padding='12px 32px'
            zIndex='2'
          >
            <CouponDescription {...props} margin='-20px 0 0 0' />

            <Container
              alignItems='end'
              customHeight='100%'
              justifyContent='start'
              margin='17px 0 0 0'
            >
              <Button
                borderRadius='2rem'
                buttonRef={activeButtonRef}
                minWidth='initial'
                onClick={handleClick}
                status={buttonStatus}
                width='100%'
                {...buttonProps}
              />
            </Container>
          </Column>
        </Column>
      </BigScreen>
    </>
  )
})
