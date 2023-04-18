import React, { useRef } from 'react'
import {
  Row,
  Column,
  Container
} from '../../layout/index'
import {
  Input,
  InputProps
} from '../../atoms/index'
import { getGlobalStyle } from '../../../helpers'

export interface InputAdornmentProps extends Omit<InputProps, 'border'> {
  background?: string;
  border?: string;
  id?: string;
  inputAdornmentEnd?: React.ReactNode | string;
  inputAdornmentStart?: React.ReactNode | string;
  inputWidth?: string;
  padding?: string,
  placeholderColor?: string;
  titleInput?: string;
  type?: string;
  width?: string;
}

export const InputAdornment = React.forwardRef(function InputAdornment({
  background = getGlobalStyle('--color-base-white'),
  border,
  borderRadius = '8px',
  customClassName,
  fontSize = 'base',
  height,
  id,
  inputAdornmentEnd,
  inputAdornmentStart,
  inputWidth = '100%',
  padding,
  placeholder,
  placeholderColor,
  textAlign = 'left',
  titleInput,
  type,
  width = '100',
  ...props
}: InputAdornmentProps, ref): React.ReactElement<InputAdornmentProps> {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <Container
      customClassName={customClassName}
      ref={ref}
    >
      <Row
        alignItems='center'
        background={background}
        border={border}
        borderRadius={borderRadius}
        customHeight={height}
        customWidth={width}
        justifyContent='between'
        onClick={() => {
          inputRef?.current?.focus()
        }}
        padding={padding}
      >
        {inputAdornmentStart && (
          <Column
            clickable='pointer'
            maxWidth='min-content'
            padding='0 5px 0 0'
          >
            {inputAdornmentStart}
          </Column>
        )}
        <Input
          background='transparent'
          fontSize={fontSize}
          id={id}
          placeholder={placeholder}
          placeholderColor={placeholderColor}
          ref={inputRef}
          textAlign={textAlign}
          title={titleInput}
          type={type ? type : 'text'}
          width={inputWidth}
          {...props}
        />
        {inputAdornmentEnd && (
          <Column
            clickable='pointer'
            maxWidth='min-content'
            padding='0 0 0 5px'
          >
            {inputAdornmentEnd}
          </Column>
        )}
      </Row>
    </Container>
  )
})