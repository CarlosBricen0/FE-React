import { Picture } from '../../atoms'
import { Modal } from '../../molecules'
import React from 'react'
export interface PromotionalModalProps {
  isMobile?: boolean;
  imageSrc: string;
  linkWrapper?: React.FunctionComponent;
  open?: boolean;
  redirectTo?: string;
  onToggle?: () => void;
}

export const PromotionalModal = ({
  isMobile,
  imageSrc,
  linkWrapper,
  open = true,
  redirectTo = '#',
  onToggle
}: PromotionalModalProps): React.ReactElement<PromotionalModalProps> => {
  const modalProps = {
    adjusted: true,
    isOpen: open,
    maxWidth: isMobile ? '300px' : '434px',
    padding: '0',
    toggle: onToggle,
    toggleOutside: onToggle
  }

  const pictureSize = {
    height: isMobile ? '440' : '590',
    width: isMobile ? '300' : '434'
  }

  return (
    <Modal
      {...modalProps}
    >
      <Picture
        anchor
        height={pictureSize.height}
        linkWrapper={linkWrapper}
        objectFit='fill'
        src={imageSrc}
        url={redirectTo}
        width={pictureSize.width}
      />
    </Modal>
  )
}
export { PromotionalModal as default }
