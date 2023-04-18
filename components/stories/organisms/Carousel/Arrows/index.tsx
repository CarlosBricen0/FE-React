import classNames from 'classnames'
import { getGlobalStyle } from '../../../../helpers'
import { Icon } from '../../../atoms'
import styles from './arrow.module.css'

interface ArrowProps {
  customClass?: string;
  isRight?: boolean;
  marginArrows?: string;
  opacity?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const CustomArrow = ({
  customClass,
  isRight,
  marginArrows = '1px',
  opacity,
  onClick
}: ArrowProps) => {
  const arrowSide = isRight ? 'ArrowRightNavigate' : 'ArrowBackNavigate'
  const nameStyle = isRight ? 'right' : 'left'

  return (
    <button
      className={classNames(styles.arrow, {[styles.opacity] : opacity}, customClass)}
      onClick={onClick}
      style={{ [nameStyle]: `calc(1% + ${marginArrows})` }}
    >
      <Icon
        clickable='pointer'
        color={getGlobalStyle('--color-icons-gray')}
        name={arrowSide}
      />
    </button>
  )
}