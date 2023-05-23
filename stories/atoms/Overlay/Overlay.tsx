import { getGlobalStyle } from '../../../helpers'
import { Container } from '../../layout'
import styles from './Overlay.module.css'

export interface OverlayProps {
  backgroundColor?: string;
  zIndex?: string;
  onClick?: () => void;
}

export const Overlay = ({
  backgroundColor = getGlobalStyle('--color-base-black'),
  zIndex = getGlobalStyle('--z-index-5'),
  onClick
}: OverlayProps): React.ReactElement => {
  return (
    <Container
      backgroundColor={backgroundColor}
      customClassName={styles.overlay}
      customHeight='100vh'
      customWidth='100'
      onClick={onClick}
      position='fixed'
      role='overlay'
      zIndex={zIndex}
    />
  )
}