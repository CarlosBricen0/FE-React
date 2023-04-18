import React from 'react'
import { getGlobalStyle } from '../../../../../helpers'
import { Icon, IconProps } from '../../../../atoms'
import { Container, Row } from '../../../../layout'

export interface ShelfSideButtonProps {
  customClassName?: string;
  disabled?: boolean;
  icon?: IconProps['name'];
  iconColor?: IconProps['color'];
  size?: string;
  onClick?: (e?: React.MouseEvent) => void;
}

export const ShelfSideButton = ({
  customClassName,
  disabled,
  icon,
  iconColor = getGlobalStyle('--color-neutral-gray-dark'),
  size = '30px',
  onClick,
  ...props
}: ShelfSideButtonProps): React.ReactElement<ShelfSideButtonProps> => {
  const computedIconColor = disabled ? getGlobalStyle('--color-primary-disabled') : iconColor

  const handleClick = (e: React.MouseEvent) => {
    if (disabled) return
    onClick?.(e)
  }

  const handleKeyDown = (e?: React.KeyboardEvent<HTMLDivElement>) => {
    if (disabled) return
    const keyD = (e.key !== undefined && e.key !== 'Unidentified') ? e.key : e.code
    if ( (keyD === 'Enter' || keyD === '13') || (['Spacebar', ' '].indexOf(keyD) >= 0 || keyD === '32')) {
      e.preventDefault()
      e.target.dispatchEvent(new MouseEvent('click', {bubbles: true}))
    }
  }

  return (
    <Row
      alignItems='center'
      backgroundColor={getGlobalStyle('--color-base-white')}
      borderRadius='100%'
      boxShadow={getGlobalStyle('--box-shadow-lg')}
      className={customClassName}
      clickable='pointer'
      customHeight={size}
      justifyContent='center'
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      padding='5px'
      position='relative'
      role='button'
      tabIndex={0}
      width={size}
      {...props}
    >
      <Container
        alignItems='center'
        clickable='pointer'
        customHeight='100%'
        justifyContent='center'
        position='absolute'
        width='100%'
      >
        <Icon
          clickable='pointer'
          color={computedIconColor}
          name={icon}
          sizes='2xs'
        />
      </Container>
    </Row>
  )
}