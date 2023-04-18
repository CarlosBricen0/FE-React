import classNames from 'classnames'
import { Icons } from '../../../assets/SvgComponents/SvgIcons'
import { getGlobalStyle } from '../../../helpers'
import { Site } from '../../../shared/interfaces/Site'
import { Icon, Text } from '../../atoms'
import { Container } from '../../layout'
import { BaseContainerProps } from '../../layout/BaseContainer/BaseContainer'
import styles from './Notification.module.css'

export type NotificationAlign = 'top-left' | 'top-center' | 'top-right'

export interface NotificationProps {
  align?: NotificationAlign
  icon?: keyof (typeof Icons)
  margin?: string
  message?: React.ReactNode
  padding?: string
  position?: BaseContainerProps['position']
  show?: boolean
  showCloseIcon?: boolean
  site?: Site
  onClose?: () => void
}

const borderRadiusBySite = {
  alvi: getGlobalStyle('--border-radius-md'),
  unimarc: '0px'
}

export const Notification = ({
  align = 'top-right',
  icon,
  margin,
  message,
  padding,
  position = 'absolute',
  show,
  showCloseIcon,
  site = 'unimarc',
  onClose
} : NotificationProps) => {
  if (!show) return null

  return (
    <Container
      borderRadius={borderRadiusBySite[site]}
      className={classNames(
        styles['notification'],
        {
          [styles[`notification--${align}`]]: align
        }
      )}
      margin={margin}
      maxWidth='340px'
      padding={padding}
      position={position}
    >
      <Container className={styles['icon']} customWidth='fit-content'>
        <Icon 
          color='white'
          name={icon ?? 'Info'}
          sizes='sm'
        />
      </Container>
      <Text
        color='white'
        fontSize='md'
        type='span'
      >
        {message}
      </Text>

      {showCloseIcon && 
        <Container margin='0 0 0 15px' width='fit-content'>
          <Icon 
            clickable='pointer'
            color='white'
            name='Close'
            onClick={onClose}
            sizes='xs'
          />
        </Container>
      }
    </Container>
  )
}