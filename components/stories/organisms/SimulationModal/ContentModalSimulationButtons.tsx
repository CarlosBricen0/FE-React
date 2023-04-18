import React from 'react'
import { getGlobalStyle } from '../../../helpers'
import { Button, ButtonStatus } from '../../atoms'
import {
  Column,
  Row,
  Spacer
} from '../../layout'
import styles from './SimulationModal.module.css'

interface ContentModalSimulationButtonsProps {
  buttonStatus?: ButtonStatus;
  isMobile?: boolean;
  labelPrimary?: string;
  labelSecondary?: string;
  action?: () => void;
  handleKeepAddress?: () => void;
}

export const ContentModalSimulationButtons = ({
  buttonStatus,
  isMobile,
  labelPrimary = 'Aceptar',
  labelSecondary,
  action,
  handleKeepAddress
}: ContentModalSimulationButtonsProps) => {

  return (
    <Row
      className={styles.spacerShadow}
      justifyContent='between'
      margin={isMobile ? '0 0 0 -12px' : '0'}
      minWidth={isMobile ? '100vw' : '495px'}
      padding={isMobile ? '24px 24px 0px 24px' : '16px 16px 0px 16px'}
      position='relative'
    >
      {isMobile ? (
        <>
          {labelSecondary ? (
            <>
              <Row>
                <Button
                  borderRadius='24px'
                  fontWeight={getGlobalStyle('--font-weight-semibold')}
                  height='45px'
                  label={labelPrimary}
                  minWidth='223.5px'
                  onClick={handleKeepAddress}
                  status={buttonStatus}
                  width='100%'
                />
              </Row>
              <Spacer.Horizontal size={8}/>
              <Row>
                <Button
                  borderRadius={getGlobalStyle('--border-radius-lg')}
                  fontWeight={getGlobalStyle('--font-weight-semibold')}
                  height='45px'
                  label={labelSecondary}
                  minWidth='223.5px'
                  onClick={action}
                  status={buttonStatus}
                  type='secondary'
                  width='100%'
                />
              </Row>
            </>
          ) : (
            <Button
              borderRadius={getGlobalStyle('--border-radius-lg')}
              fontWeight={getGlobalStyle('--font-weight-semibold')}
              label={labelPrimary}
              minWidth='223.5px'
              onClick={handleKeepAddress}
              status={buttonStatus}
              type={labelSecondary ? 'secondary' : 'primary'}
              width='100%'
            />
          )}
        </>
      ) : (
        <Column>
          {labelSecondary ? (
            <Row justifyContent='between'>
              <Column maxWidth='max-content'>
                <Button
                  borderRadius={getGlobalStyle('--border-radius-lg')}
                  fontWeight={getGlobalStyle('--font-weight-semibold')}
                  label={labelPrimary}
                  minWidth='223.5px'
                  onClick={handleKeepAddress}
                  status={buttonStatus}
                  type='secondary'
                  width='100%'
                />
              </Column>
              <Column maxWidth='max-content'>
                <Row>
                  <Button
                    borderRadius='24px'
                    fontWeight={getGlobalStyle('--font-weight-semibold')}
                    label={labelSecondary}
                    minWidth='223.5px'
                    onClick={action}
                    status={buttonStatus}
                    width='100%'
                  />
                </Row>
              </Column>
            </Row>
          ) : (
            <Button
              borderRadius={getGlobalStyle('--border-radius-lg')}
              fontWeight={getGlobalStyle('--font-weight-semibold')}
              label={labelPrimary}
              minWidth='223.5px'
              onClick={handleKeepAddress}
              status={buttonStatus}
              type={labelSecondary ? 'secondary' : 'primary'}
              width='100%'
            />
          )}
        </Column>
      )}
    </Row>
  )
}