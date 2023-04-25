import { useState } from 'react'
import { InputAdornment } from '..'
import { getGlobalStyle } from '../../../helpers'
import { Icon, SizeIcon } from '../../atoms'
import { InputAdornmentProps } from '../InputAdornment/InputAdornment'

export interface PasswordInputProps extends InputAdornmentProps {
  initialShow?: boolean;
  sizesIcon?: SizeIcon;
  customSize?: number;
}

export const PasswordInput = ({
  initialShow = false,
  sizesIcon = 'sm',
  customSize,
  ...props
}: PasswordInputProps) => {
  const [show, setShow] = useState(initialShow)

  const handleToggle = () => {
    setShow(!show)
  }

  const iconName = show ? 'Eye' : 'EyeSlash'

  return (
    <InputAdornment
      {...props}
      inputAdornmentEnd={
        props.inputAdornmentEnd ?
          props.inputAdornmentEnd
          :
          <Icon
            clickable='pointer'
            color={getGlobalStyle('--color-icons-gray')}
            customSize={customSize}
            data-testid='password-input-toggle'
            name={iconName}
            onClick={handleToggle}
            sizes={sizesIcon}
          />
      }
      type={show ? 'text' : 'password'}
    />
  )
}