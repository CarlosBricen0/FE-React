import { ButtonStatus, Color } from '../../atoms'
import { Modal } from '../../molecules'
import { BigScreen, SmallScreen } from '../../../helpers/mediaQueries'
import { getGlobalStyle } from '../../../helpers'
import { TitleProps } from '../../atoms/Title/Title'
import ContentModal from './helpers/ContentModal'
import { Site } from '../../../shared/interfaces/Site'
import { DataResponseCart } from '../ModalWithoutStock/ModalWithoutStock'

export interface FailModalProps {
  alviSite?: boolean;
  arrFail?: DataResponseCart;
  backgroundColor?: string;
  boldButton?: string;
  buttonStatus?: ButtonStatus;
  buttonText?: string;
  buttonWidth?: string;
  colorTitle?: string;
  content?: string;
  contentColor?: Color;
  contentPosition?: TitleProps['textAlign'];
  isOpen?: boolean;
  isOpenModalOutStock?: boolean;
  labelSecondary?: string;
  showButton?: boolean;
  site?: Site;
  sizeTitle?: string;
  title?: string;
  titleColor?: string;
  titlePosition?: TitleProps['textAlign'];
  unimarcSite?: boolean;
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
  site = 'unimarc',
  title,
  titlePosition,
  action,
  handleKeepAddress,
  handleModal = () => { return },
  onClick
}: FailModalProps): React.ReactElement => {
  const unimarcSite = site === 'unimarc'
  const alviSite = site === 'alvi'
  const backgroundColor = getGlobalStyle(unimarcSite ? '--color-primary-red-header' : '--color-alvi-primary-blue-gradient')
  const boldButton = getGlobalStyle(unimarcSite ? '--font-weight-bold' : '--font-weight-semibold')
  const buttonWidth = unimarcSite ? '100%' : '280px'
  const contentColor = unimarcSite ? 'black' : 'neutral-alvi'
  const sizeTitle = getGlobalStyle(unimarcSite ? '--font-size-titles-xs' : '--font-size-titles-sm')
  const titleColor = colorTitle ? colorTitle : getGlobalStyle('--color-base-black')
  const widthContentModal = '328px'
  const heightButton = showButton ? '346px' : '280px'
  const minHeightModal: string = alviSite ? heightButton : 'initial'

  const contentModalProps = {
    alviSite,
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
    site,
    sizeTitle,
    title,
    titleColor,
    titlePosition,
    unimarcSite,
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
          site={site}
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
          site={site}
          toggle={null}
          toggleOutside={handleModal}
        >
          <ContentModal {...contentModalPropsMobile} />
        </Modal>
      </SmallScreen>
    </>
  )
}