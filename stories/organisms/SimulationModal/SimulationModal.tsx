import { useEffect, useState } from 'react'
import { BigScreen, SmallScreen } from '../../../helpers'
import { ButtonStatus } from '../../atoms'
import { Column } from '../../layout'
import { Modal } from '../../molecules'
import { ContentModalSimulation } from './ContentModalSimulation'

export interface SimulationItem {
  brandName: string;
  id: string;
  image: string;
  measurementUnit: string;
  name: string;
  sellingPrice: string;
  quantity: string;
}

export interface SimulationModalProps {
  buttonStatus?: ButtonStatus;
  content?: string;
  isOpen?: boolean;
  labelPrimary?: string;
  labelSecondary?: string;
  items?: SimulationItem[];
  title?: string;
  action?: () => void;
  handleKeepAddress?: () => void;
  handleModal?: () => void;
}

export const SimulationModal = ({
  buttonStatus,
  content,
  isOpen = true,
  labelPrimary,
  labelSecondary,
  items = [],
  title,
  action,
  handleKeepAddress,
  handleModal = () => { return }
}: SimulationModalProps): React.ReactElement => {
  const [screenHeight, setScreenHeight] = useState(`${(window.innerHeight * 0.94).toString()}px`)

  useEffect(() => {
    const resizeEvent = () => {
      setScreenHeight(`${(window.innerHeight * 0.94).toString()}px`)
    }
    window.addEventListener('resize', resizeEvent)
    return () => {
      window.removeEventListener('resize', resizeEvent)
    }
  }, [window.innerHeight])

  const contentModalSimulationProps = {
    buttonStatus,
    content,
    labelPrimary,
    labelSecondary,
    items,
    title,
    action,
    handleKeepAddress
  }

  const contentModalSimulationPropsMobile = {
    ...contentModalSimulationProps,
    isMobile: true
  }

  return (
    <>
      <BigScreen>
        <Modal
          hiddenX
          isOpen={isOpen}
          maxWidth='495px'
          minHeight='550px'
          toggleOutside={handleModal}
        >
          <ContentModalSimulation {...contentModalSimulationProps}/>
        </Modal>
      </BigScreen>
      <SmallScreen>
        <Modal
          fullScreen
          hiddenX
          isOpen={isOpen}
          marginFullScreen='1vh 0 0 0'
          minHeightFullScreen={screenHeight}
          padding='20px 12px'
          toggle={handleKeepAddress}
          toggleOutside={handleKeepAddress}
        >
          <Column customHeight={screenHeight} maxWidth='100vw'>
            <ContentModalSimulation {...contentModalSimulationPropsMobile}/>
          </Column>
        </Modal>
      </SmallScreen>
    </>
  )
}