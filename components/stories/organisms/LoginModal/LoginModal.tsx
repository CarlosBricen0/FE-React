import { BigScreen, SmallScreen } from '../../../helpers'
import { Modal } from '../../molecules'
import { LoginModalContent, LoginModalContentProps } from './LoginModalContent/LoginModalContent'
import styles from './LoginModal.module.css'

export interface LoginModalProps extends LoginModalContentProps {
  isOpen?: boolean;
  maxHeight?: string;
  maxWidth?: string;
  site?: 'unimarc' | 'alvi';
}

export const LoginModal = ({
  isOpen,
  maxHeight = 'initial',
  maxWidth = '819px',
  site = 'unimarc',
  onClose,
  ...props
}: LoginModalProps) => {
  return (
    <>
      <BigScreen>
        <Modal
          className={styles['modal']}
          isOpen={isOpen}
          maxHeight={maxHeight}
          maxWidth={maxWidth}
          site={site}
          toggle={onClose}
          toggleOutside={onClose}
        >
          <LoginModalContent {...props} site={site} />
        </Modal>
      </BigScreen>
      <SmallScreen>
        <Modal
          fullScreen
          isOpen={isOpen}
          site={site}
          toggle={onClose}
          toggleOutside={onClose}
        >
          <LoginModalContent {...props} site={site} />
        </Modal>
      </SmallScreen>
    </>
  )
}
