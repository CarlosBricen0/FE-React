import { Icon } from '../../atoms'
import { getGlobalStyle } from '../../../helpers'
import styles from './AddToCartAndQuantityTop.module.css'

export const LoadingSpinner = () => {
  return (
    <div className={styles.loading} >
      <Icon
        color={getGlobalStyle('--color-primary-green')}
        customSize={20}
        name='Loading'
      />
    </div>
  )
}