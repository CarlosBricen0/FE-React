import React from 'react'
import { Row, Column } from '../../layout'
import { Icon } from '../../atoms'
import { Icons } from '../../../assets/SvgComponents/SvgIcons'
import { InputAdornment } from '../InputAdornment/InputAdornment'
import { getGlobalStyle } from '../../../helpers'

type FontSize = 'base' | 'xs' | 'sm' | 'md' | 'lg'
type TextAlignInput = 'left' | 'center' | 'right' | 'justify'
export interface InputIconProps {
  autofocus?: boolean;
  background?: string;
  backgroundGradientIconSearch?: string;
  backgroundIcon?: string;
  border?: string;
  borderRadius?: string;
  clearButton?: boolean;
  colorIcon?: string;
  customPadding?: string;
  customSizeIcon?: number;
  fontSize?: FontSize;
  height?: string;
  icon?: keyof (typeof Icons);
  iconArrowSize?: number;
  iconBorderRadius?: string;
  iconWidth?: string;
  id?:string;
  inputAdornmentRef?: React.MutableRefObject<HTMLDivElement>;
  inputCustomClass?: string;
  inputWidth?: string;
  isMobile?: boolean;
  padding?: string,
  placeholder?: string;
  placeholderColor?: string;
  placeholderFocus?: string;
  textAlignInput?: TextAlignInput;
  titleSearch?: string;
  value?: string;
  width?: string;
  onBlurSearch?: (e?: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPressSearch?: (e?: React.KeyboardEvent<HTMLInputElement>) => void;
  onChangeSearch?: (e?: React.ChangeEvent<HTMLInputElement>) => void;
  onClearInput?: (e?: React.ChangeEvent<HTMLInputElement>) => void;
  onClickSearch?: () => void;
  onFocusSearch?: (e?: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputIcon = ({
  autofocus = false,
  background = getGlobalStyle('--color-base-white'),
  backgroundGradientIconSearch,
  backgroundIcon = getGlobalStyle('--color-base-transparent'),
  border,
  borderRadius = getGlobalStyle('--border-radius-2xs'),
  clearButton = false,
  colorIcon = '#000',
  customPadding,
  customSizeIcon = 20,
  fontSize = 'base',
  height = '40px',
  icon = 'SearchCart',
  iconBorderRadius = '8px',
  iconWidth = '15',
  id,
  inputAdornmentRef,
  inputCustomClass,
  inputWidth = '100%',
  padding = '10px',
  placeholder,
  placeholderColor,
  placeholderFocus,
  textAlignInput = 'left',
  titleSearch = 'titleSearch',
  value,
  width = '100',
  onBlurSearch,
  onChangeSearch,
  onClearInput,
  onClickSearch,
  onKeyPressSearch,
  onFocusSearch
}: InputIconProps): React.ReactElement<InputIconProps> => {
  const alviHeight = '40px'

  const ClearIcon = () => {
    return (
      <Column
        alignItems='start'
        borderRadius='8px'
        clickable='pointer'
        customHeight='100%'
        customWidth={iconWidth}
        justifyContent='center'
        onClick={onClearInput}
      >
        <Icon
          clickable='pointer'
          color={getGlobalStyle('--color-icons-gray')}
          customSize={16}
          name='Close'
        />
      </Column>
    )
  }

  return (
    <Row
      alignItems='center'
      backgroundColor={background}
      border={border}
      borderRadius={borderRadius}
      customHeight={height}
      customWidth={width}
      justifyContent='center'
      padding={customPadding}
    >
      <Column className={inputCustomClass} padding={padding}>
        <form
          aria-label='Search bar form'
          id='search-product'
          onSubmit={(e) => {e.preventDefault()}}
        >
          <InputAdornment
            autoFocus={autofocus}
            fontSize={fontSize}
            id={id}
            inputAdornmentEnd={clearButton && <ClearIcon />}
            onBlur={onBlurSearch}
            onChange={onChangeSearch}
            onFocus={(e) => {
              if (e.target.value) {
                onFocusSearch(e)
              }
            }}
            onKeyDown={onKeyPressSearch}
            placeholder={placeholder}
            placeholderColor={placeholderColor}
            placeholderFocus={placeholderFocus}
            ref={inputAdornmentRef}
            textAlign={textAlignInput}
            title={titleSearch}
            value={value}
            width={inputWidth}
          />
        </form>
      </Column>
      <Column
        alignItems='center'
        background={backgroundGradientIconSearch}
        backgroundColor={backgroundIcon}
        borderRadius={iconBorderRadius}
        clickable='pointer'
        customHeight='100%'
        customWidth={iconWidth}
        justifyContent='center'
        onClick={onClickSearch}
      >
        <Icon
          clickable='pointer'
          color={colorIcon}
          customSize={customSizeIcon}
          name={icon}
        />
      </Column>
    </Row>
  )
}
