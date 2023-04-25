import classNames from 'classnames'
import { Container } from '../../../layout'
import styles from './CouponDivider.module.css'

export interface CouponDividerProps {
  className?: string,
  type?: 'vertical' | 'horizontal'
}

export const CouponDivider = ({
  className,
  type = 'horizontal',
  ...props
}: CouponDividerProps) => {
  return (
    <Container 
      alignItems='center'
      className={classNames(
        styles['couponDivider'],
        {
          [styles[`couponDivider--${type}`]]: type
        },
        className
      )}
      customWidth={type === 'horizontal' ? '100' : '0'}
      justifyContent='center'

      position='relative'
      {...props}
    >
    </Container>
  )
}