import { getGlobalStyle } from '../../../helpers'
import { Text } from '../../atoms'
import { Horizontal } from '../../layout'
import { NoStockModalProps } from './ModalWithoutStock'
import styles from './NoStockModal.module.css'

export const FailedItems = ({ data }: NoStockModalProps) => {

  const alerts = ['failed']

  return (
    <div className={styles.content_modal}>

      {
        alerts?.map(alert => {
          return (data?.[alert]?.map((warning, i) => {
            return (
              <div key={i}>
                <Horizontal size={8} />
                <Text
                  color='neutral'
                  customColor={getGlobalStyle('--color-neutral-gray-dark')}
                  fontWeight='regular'
                  isFlex
                  textAlign='justify'
                >
                  {warning?.['message']}
                </Text>
              </div>
            )
          }))
        })
      }
    </div>
  )
}

