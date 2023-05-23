import { ButtonStatus, Color } from '../../atoms'
import { Modal } from '../../molecules'
import { BigScreen, SmallScreen } from '../../../helpers/mediaQueries'
import { getGlobalStyle } from '../../../helpers'
import { TitleProps } from '../../atoms/Title/Title'
import ContentModal from './helpers/ContentModal'
import { DataResponseCart } from '../ModalWithoutStock/ModalWithoutStock'
import React from 'react'

export interface FailModalProps {
  arrFail?: DataResponseCart;
  backgroundColor?: string;
  boldButton?: string;
  buttonStatus?: ButtonStatus;
  buttonText?: string;
  buttonWidth?: string;
  colorTitle?: string;
  content?: string;
  containerPadding?:string;
  contentColor?: Color;
  contentPosition?: TitleProps['textAlign'];
  isOpen?: boolean;
  isOpenModalOutStock?: boolean;
  labelSecondary?: string;
  showButton?: boolean;
  sizeTitle?: string;
  title?: string;
  titleColor?: string;
  titlePosition?: TitleProps['textAlign'];
  action?: () => void;
  handleKeepAddress?: () => void;
  handleModal?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
  onClick?: () => void;
  saveAddress?: () => void;
}

export const FailModal = ({
  buttonStatus,
  buttonText,
  colorTitle,
  content,
  contentPosition,
  isOpen = true,
  labelSecondary = 'Conservar mi dirección',
  showButton,
  title,
  titlePosition,
  action,
  handleKeepAddress,
  handleModal = () => { return },
  onClick
}: FailModalProps): React.ReactElement => {
  const backgroundColor = getGlobalStyle('--color-alvi-primary-blue-gradient')
  const boldButton = getGlobalStyle('--font-weight-semibold')
  const buttonWidth =  '280px'
  const contentColor =  'black' 
  const sizeTitle = getGlobalStyle('--font-size-titles-sm')
  const titleColor = colorTitle ? colorTitle : getGlobalStyle('--color-base-black')
  const widthContentModal = '328px'
  const minHeightModal: string = 'initial'

  const contentModalProps = {
    backgroundColor,
    boldButton,
    buttonStatus,
    buttonText,
    buttonWidth,
    colorTitle,
    content,
    contentColor: contentColor as Color,
    contentPosition,
    isOpen: true,
    labelSecondary,
    showButton,
    sizeTitle,
    title,
    titleColor,
    titlePosition,
    widthContentModal,
    action,
    handleKeepAddress,
    handleModal: () => { return },
    onClick
  }
  const contentModalPropsMobile = {
    ...contentModalProps,
    buttonText: 'Cambiar dirección',
    labelSecondary: labelSecondary
  }
  return (
    <>
      <BigScreen>
        <Modal
          errorModal={true}
          hiddenX
          isOpen={isOpen}
          maxWidth={widthContentModal}
          minHeight={minHeightModal}
          toggle={() => { return }}
          toggleOutside={handleModal}
        >
          <ContentModal {...contentModalProps} />
        </Modal>
      </BigScreen>

      <SmallScreen>
        <Modal
          errorModal={true}
          hiddenX
          isOpen={isOpen}
          maxWidth={widthContentModal}
          minHeight={minHeightModal}
          toggle={() => { return }}
          toggleOutside={handleModal}
        >
          <ContentModal {...contentModalPropsMobile} />
        </Modal>
      </SmallScreen>
    </>
  )
}