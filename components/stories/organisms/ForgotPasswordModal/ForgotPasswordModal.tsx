import { BigScreen, SmallScreen } from '../../../helpers'
import { Site } from '../../../shared/interfaces/Site'
import { Modal } from '../../molecules'
import styles from './ForgotPasswordModal.module.css'

export interface ForgotPasswordModalProps {
  children?: React.ReactNode;
  isOpen?: boolean;
  maxHeight?: string;
  maxWidth?: string;
  site?: 'unimarc' | 'alvi';
  onClose?: () => void;
}

export enum ForgotPasswordStep {
  DeliveryMedium = 'delivery-medium',
  ConfirmDeliveryMedium = 'confirm-delivery-medium',
  Code = 'code',
  ResetPassword = 'reset-password'
}

export interface CommonStepProps<T extends ForgotPasswordStep> {
  site?: Site;
  step?: T;
  onBack?: () => void;
  onSubmit?: (...args : unknown[]) => void;
}

export const ForgotPasswordModal = ({
  children,
  isOpen,
  maxHeight = 'initial',
  maxWidth = '820px',
  site = 'unimarc',
  onClose
}: ForgotPasswordModalProps) => {
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
          {children}
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
          {children}
        </Modal>
      </SmallScreen>
    </>
  )
}
