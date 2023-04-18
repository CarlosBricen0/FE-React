import classNames from 'classnames'
import { getGlobalStyle } from '../../../../helpers'
import { Icon } from '../../../atoms'
import styles from './arrow.module.css'

export interface ArrowProps {
  customClass?: string;
  isRight?: boolean,
  marginArrows?: string;
  opacity?: boolean;
  showArrows?: boolean,
  goToSlide?: (param: unknown) => void;
  next?: () => void;
  onClick?: (isRight?: boolean) => void;
  previous?: () => void;
}

export const CustomButtonGroup = ({
  customClass,
  opacity,
  showArrows,
  next,
  onClick,
  previous
}: ArrowProps) => {

  const Arrow = ({ isRight = false }) => {
    const arrowSide = isRight ? 'ArrowRightNavigate' : 'ArrowBackNavigate'
    const nameStyle = isRight ? 'right' : 'left'
    const styleArrow = isRight ? '' : '0'

    const handleClick = () => {
      if (typeof onClick === 'function') onClick(isRight)
      return isRight ? next() : previous()
    }

    return (
      <button
        className={
          classNames(
            styles.arrow,
            customClass,
            {
              [styles.opacity]: opacity,
              [styles.rightArrow]: isRight,
              [styles.leftArrow]: !isRight
            }
          )
        }
        onClick={handleClick}
        style={{ [nameStyle]: styleArrow }}
      >
        <Icon
          clickable='pointer'
          color={getGlobalStyle('--color-icons-gray')}
          name={arrowSide}
        />
      </button>
    )
  }

  return (
    <>
      {showArrows && (
        <div>
          <Arrow />
          <Arrow isRight />
        </div>
      )}
    </>
  )
}
