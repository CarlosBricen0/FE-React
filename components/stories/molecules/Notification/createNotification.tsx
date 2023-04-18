import ReactDOM from 'react-dom'
import { NotificationAutoClose, NotificationAutoCloseProps } from './NotificationAutoClose/NotificationAutoClose'

export interface CreateNotificationParams extends NotificationAutoCloseProps {
  parent?: HTMLElement | null
}

export const createNotification = ({
  closeTimeout,
  parent,
  onClose,
  ...params
}: CreateNotificationParams) => {
  const container = document.createElement('div')
  container.setAttribute('id', 'notification-container')
  const parentContainer = parent || document.body
  parentContainer.appendChild(container)

  const handleClose = () => {
    ReactDOM.unmountComponentAtNode(container)
    container.remove()
    onClose?.()
  }

  ReactDOM.render(
    <NotificationAutoClose
      {...params}
      closeTimeout={closeTimeout ?? 5000}
      onClose={handleClose}
    />,
    container
  )
}