import { Backbone } from '../../../atoms'
import { Column, Container, Row } from '../../../layout'
import {
  BigScreen,
  getGlobalStyle,
  SmallScreen
} from '../../../../helpers'
import { CouponDivider } from '../CouponDivider'
import styles from '../Coupon.module.css'

export const CouponLoader = () => {
  return (
    <>
      <BigScreen>
        <Column customClassName={styles['coupon--bigScreen']}>
          <Column
            alignItems='center'
            borderRadius='8px 8px 0 0'
            customClassName={styles['coupon--bigScreen__top']}
            gap={16}
            padding='12px 0 0'
          >
            <Container width='80px'>
              <Backbone borderRadius={getGlobalStyle('--border-radius-2xs')} height={16} />
            </Container>

            <Column alignItems='center'>
              <Container maxWidth='150px'>
                <Backbone borderRadius={getGlobalStyle('--border-radius-2xs')} height={150} />
              </Container>
            </Column>

            <Row gap={8} justifyContent='center'>
              <Container maxWidth='100px'>
                <Backbone borderRadius={getGlobalStyle('--border-radius-2xs')} height={20} />
              </Container>

              <Container maxWidth='100px'>
                <Backbone borderRadius={getGlobalStyle('--border-radius-2xs')} height={20} />
              </Container>
            </Row>
          </Column>

          <Column
            alignItems='center'
            clickable='pointer'
            customClassName={styles['coupon--bigScreen__middle']}
            customHeight='40px'
            justifyContent='center'
            zIndex='1'
          >
            <CouponDivider type='horizontal' />
          </Column>

          <Column
            borderRadius='0 0 8px 8px'
            customClassName={styles['coupon--bigScreen__bottom']}
            padding='8px 24px 12px'
          >
            <Column alignItems='center' gap={4}>
              <Container maxWidth='125px'>
                <Backbone borderRadius={getGlobalStyle('--border-radius-2xs')} height={20} />
              </Container>

              <Container maxWidth='130px'>
                <Backbone borderRadius={getGlobalStyle('--border-radius-2xs')} height={16} />
              </Container>

              <Container margin='3px' maxWidth='200px'>
                <Backbone borderRadius={getGlobalStyle('--border-radius-2xs')} height={16} />
              </Container>
            </Column>

            <Container
              alignItems='end'
              customHeight='100%'
              justifyContent='start'
              margin='17px 0 0 0'
            >
              <Backbone borderRadius={getGlobalStyle('--border-radius-xl')} height={40} />
            </Container>
          </Column>
        </Column>
      </BigScreen>

      <SmallScreen>
        <Column
          alignItems='stretch'
          borderRadius='8px'
          className={styles['coupon--smallScreen']}
          gap={8}
          padding='12px 32px'
          position='relative'
        >
          <Column 
            customWidth='66' 
            gap={20} 
            padding='8px 0'
          >
            <Column gap={4}>
              <Container maxWidth='80px'>
                <Backbone borderRadius={getGlobalStyle('--border-radius-xs')} height={25} />
              </Container>

              <Container maxWidth='170px'>
                <Backbone borderRadius={getGlobalStyle('--border-radius-xs')} height={28} />
              </Container>
            </Column>

            <Container>
              <Container width='170px'>
                <Backbone borderRadius={getGlobalStyle('--border-radius-xl')} height={35} />
              </Container>
            </Container>
          </Column>

          <CouponDivider type='vertical' />

          <Column alignItems='center' gap={6}>
            <Container maxWidth='55px'>
              <Backbone borderRadius={getGlobalStyle('--border-radius-xs')} height={15} />
            </Container>

            <Container maxWidth='80px'>
              <Backbone borderRadius={getGlobalStyle('--border-radius-md')} height={80} />
            </Container>

            <Container maxWidth='95px'>
              <Backbone borderRadius={getGlobalStyle('--border-radius-xs')} height={15} />
            </Container>
          </Column>
        </Column>
      </SmallScreen>
    </>
  )
}