import { useEffect, useRef } from 'react'
import { Icons } from '../../../assets/SvgComponents/SvgIcons'
import {
  getGlobalStyle,
  BigScreen,
  SmallScreen
} from '../../../helpers'
import { Site } from '../../../shared/interfaces/Site'
import {
  Row,
  Column,
  Container
} from '../../layout'
import { ChildrenBaseContainerProps } from '../../layout/BaseContainer/BaseContainer'
import { InputIcon, InputIconProps } from '../../molecules'
import { DropDownSearch, DropDownSearchProps } from './DropDownSearch/DropDownSearch'

export interface SearchProps {
  backgroundGradientIconSearch?: string;
  backgroundIconSearch?: string;
  backgroundSearch?: string;
  borderSearch?: string;
  clearButton?: boolean;
  colorIcon?: string;
  containerProps?: ChildrenBaseContainerProps;
  dropDownSearch?: DropDownSearchProps;
  iconArrowSearch?: keyof (typeof Icons);
  iconArrowSize?: number;
  iconSearch?: keyof (typeof Icons);
  iconWidth?: string;
  inputAdornmentRef?: React.MutableRefObject<HTMLDivElement>;
  isLoggedIn?: boolean;
  isMobile?: boolean;
  isVisibleDropDownSearch?: boolean;
  linkWrapper?: React.FunctionComponent;
  searchPlaceholder?: string;
  site?: Site;
  sizeLogoMobile?: number;
  validationStatus?: string;
  valueInputSearch?: string;
  onBlurSearch?: (e?: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeSearch?: (e?: React.ChangeEvent<HTMLInputElement>) => void;
  onClearInput?: (e?: React.ChangeEvent<HTMLInputElement>, refAdornm?: unknown) => void;
  onClickSearch?: () => void;
  onCloseSearch?: (e?: React.ChangeEvent<HTMLInputElement>) => void;
  onFocusSearch?: (e?: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPressSearch?: (e?: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const Search = ({
  backgroundGradientIconSearch,
  backgroundIconSearch = getGlobalStyle('--color-primary-red'),
  backgroundSearch = getGlobalStyle('--color-base-transparent'),
  borderSearch = `2px solid ${getGlobalStyle('--color-base-white')}`,
  clearButton = false,
  colorIcon = 'white',
  containerProps,
  dropDownSearch,
  iconArrowSearch,
  iconArrowSize,
  iconSearch = 'SearchCart',
  iconWidth = '15',
  inputAdornmentRef,
  isLoggedIn,
  isMobile,
  isVisibleDropDownSearch = false,
  linkWrapper,
  searchPlaceholder = '¿Qué productos necesitas hoy?',
  site = 'unimarc',
  validationStatus,
  valueInputSearch,
  onBlurSearch,
  onChangeSearch,
  onClearInput,
  onClickSearch,
  onCloseSearch,
  onFocusSearch,
  onKeyPressSearch
}: SearchProps): React.ReactElement<SearchProps> => {
  const unimarcSite = site === 'unimarc'
  const columnSearchRef = useRef(null)
  const fontSizePlaceholderMovil = unimarcSite ? 'base' : 'md'
  const sizeIconSearch = unimarcSite ? 20 : 21
  const sizeWrapperSearch = unimarcSite ? '40px' : '35px'

  const inputSearchProps: InputIconProps = {
    background: getGlobalStyle('--color-base-white'),
    backgroundGradientIconSearch: backgroundGradientIconSearch,
    backgroundIcon: backgroundIconSearch,
    border: borderSearch,
    borderRadius: getGlobalStyle('--border-radius-lg'),
    clearButton,
    colorIcon: colorIcon,
    customSizeIcon: 20,
    fontSize: 'base',
    icon: iconSearch,
    iconArrowSize: iconArrowSize,
    iconBorderRadius: getGlobalStyle('--border-radius-lg'),
    iconWidth: iconWidth,
    inputAdornmentRef,
    padding: '7px 10px',
    placeholder: searchPlaceholder,
    placeholderFocus: 'placeholder',
    site,
    value: valueInputSearch,
    onClearInput,
    onClickSearch,
    onFocusSearch,
    onChangeSearch,
    onKeyPressSearch
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (columnSearchRef.current && !columnSearchRef.current.contains(event.target)) {
        onCloseSearch()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [columnSearchRef])

  return (
    <>
      <BigScreen>
        <Row
          customWidth='100'
          ref={columnSearchRef}
          {...containerProps}
        >
          <Column backgroundColor={backgroundSearch} borderRadius='8px 8px 0 0'>
            <Container padding='8px'>
              <InputIcon
                {...inputSearchProps}
                backgroundGradientIconSearch={backgroundGradientIconSearch}
                customSizeIcon={24}
                fontSize='md'
                iconWidth={iconWidth}
                onBlurSearch={onBlurSearch}
                padding='7px 16px'
              />
            </Container>
            {isVisibleDropDownSearch &&
              <DropDownSearch
                {...dropDownSearch}
                isLoggedIn={isLoggedIn}
                linkWrapper={linkWrapper}
                site={site}
                validationStatus={validationStatus}
              />
            }
          </Column>
        </Row>
      </BigScreen>

      <SmallScreen>
        <>
          <Row >
            <InputIcon
              {...inputSearchProps}
              backgroundIcon={backgroundIconSearch}
              clearButton={false}
              customSizeIcon={sizeIconSearch}
              fontSize={fontSizePlaceholderMovil}
              height={sizeWrapperSearch}
              iconWidth={iconWidth}
              isMobile={isMobile}
            />
          </Row>
          {isVisibleDropDownSearch &&
            <DropDownSearch
              {...{
                ...dropDownSearch,
                backgroundIcon: backgroundIconSearch,
                iconArrowSearch,
                iconArrowSize,
                inputSearchProps,
                onCloseArrowBack: onCloseSearch
              }}
              isLoggedIn={isLoggedIn}
              isMobile={isMobile}
              linkWrapper={linkWrapper}
              site={site}
              validationStatus={validationStatus}
            />
          }
        </>
      </SmallScreen>
    </>
  )
}