import { getGlobalStyle } from '../../../../../helpers'
import styles from '../LoginModalContent.module.css'

export const getStatusBackgroundColor = (status?: string): string => {
  return status === 'disabled' ? '--color-alvi-neutral-gray-silver' : '--color-alvi-primary-blue-gradient'
}
export const getStyleFrom = (unimarcSite?: boolean): string => {
  return styles[unimarcSite ? 'loginFormContainer' : 'loginFormContainer_alvi']
}
export const getStyleWeight = (unimarcSite?: boolean): string => {
  return getGlobalStyle(unimarcSite ? '--font-weight-bold' : '--font-weight-semibold')
}