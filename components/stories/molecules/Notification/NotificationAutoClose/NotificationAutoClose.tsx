import { useEffect, useState } from 'react'
import {Notification, NotificationProps } from '../Notification'

export interface NotificationAutoCloseProps extends NotificationProps {
  closeTimeout?: number,
  onClose?: () => void
}

export const NotificationAutoClose = ({
  closeTimeout,
  onClose,
  ...props
} : NotificationAutoCloseProps) => {
  const [show, setShow] = useState(true)

  useEffect(() => {
    if (!closeTimeout) return () => {return}
    
    const timeout = setTimeout(() => {
      handleClose()
    }, closeTimeout)

    return () => {
      return clearTimeout(timeout)
    }
  }, [])

  const handleClose = () => {
    setShow(false)
    onClose?.()
  }

  return (
    <Notification
      {...props}
      onClose={handleClose}
      show={show}
    />
  )
}