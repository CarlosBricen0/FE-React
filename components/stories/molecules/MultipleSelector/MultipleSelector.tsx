import React,
{
  useEffect,
  useRef,
  useState
} from 'react'
import classNames from 'classnames'
import {
  Column,
  Container,
  Row
} from '../../layout'
import {
  Button,
  Icon,
  Text
} from '../../atoms'
import { getGlobalStyle } from '../../../helpers'
import { InputIcon } from '../InputIcon/InputIcon'
import { ListOptions } from './ListOptions'
import styles from './MultipleSelector.module.css'

export interface OnOnClickCheck{
  e: React.MouseEvent<HTMLLIElement, MouseEvent>;
  key:number;
  value: string;
}
export interface Option {
  checked: boolean;
  numberResult: number;
  value: string;
}
export interface MultipleSelectorOptions {
  onlyOneChecked?: boolean;
  options?: Array<Option>;
  placeholderSearch?: string;
  title?: string;
  onConfirmation?: (props: Array<object>) => void;
}

export const MultipleSelector = ({
  onlyOneChecked = false,
  options = [],
  placeholderSearch = 'Buscar marca',
  title = 'Marcas',
  onConfirmation
}: MultipleSelectorOptions): React.ReactElement<MultipleSelectorOptions> => {
  const [mainOptions, setMainOptions] = useState(options)
  const [textSearch, setTextSearch] = useState('')
  const [focusSearch, setFocusSearch] = useState(false)
  const [temporalOptions, setTemporalOptions] = useState(options)
  const [statusButton, setStatusButton] = useState(true)
  const [showOptions, setShowOptions] = useState(false)
  const inputAdornmentRef = useRef(null)
  const onCloseRef = useRef(null)

  const maxWithComponents = '230px'

  const onClickCheckBox = ({e, key, value} : OnOnClickCheck) => {
    let newList = [...temporalOptions]
    let optionList = [...mainOptions]
    const checked = !temporalOptions[key]?.checked
    const changeOption = { ...temporalOptions[key], checked }
    if(onlyOneChecked){
      optionList = optionList?.map(option => {
        return {...option, checked: false}
      })
      newList = temporalOptions?.map(option => {
        return {...option, checked: false}
      })
    }
    const indexMainOption = mainOptions?.findIndex(option => {
      return option.value === value
    })
    optionList[indexMainOption] = newList[key] = changeOption
    setMainOptions([...optionList])
    setTemporalOptions([...newList])
    e.preventDefault()
  }

  const onSubmit = () => {
    const listCheked = mainOptions?.filter(option => {return option.checked})
    setShowOptions(false)
    if(onConfirmation) onConfirmation(listCheked)
  }

  const onClickClearSearch = () => {
    inputAdornmentRef.current.children[0].children[0].value = ''
    setTextSearch('')
  }

  const handleShowOptions = () => {
    setShowOptions(!showOptions)
  }

  useEffect(() => {
    setMainOptions(options)
    setTemporalOptions(options)
  },[JSON.stringify(options)])

  useEffect(() => {
    const buttonStatus = temporalOptions?.length > 0 && temporalOptions?.some(option => {
      return option?.checked === true
    })
    setStatusButton(buttonStatus)
  },[temporalOptions])

  useEffect(() => {
    const newList = [...mainOptions]
    const filter = newList?.length > 0 && newList?.filter( option => {
      const brand = option?.value?.toLowerCase()
      return brand?.includes(textSearch?.toLowerCase())
    })
    setTemporalOptions(filter)
  },[textSearch])

  useEffect(() => {
    const clickOutside = (e: MouseEvent) => {
      if(onCloseRef?.current?.contains(e?.target)) { return }
      setShowOptions(false)
    }
    document.body.addEventListener('mousedown', clickOutside)
    return () => {
      document.body.removeEventListener('mousedown', clickOutside)
    }
  }, [showOptions])

  return (
    <Container
      isWrap
      maxWidth={maxWithComponents}
      ref={onCloseRef}
    >
      <Row
        alignItems='center'
        borderColor={getGlobalStyle('--color-neutral-gray')}
        borderEdge='right'
        clickable='pointer'
        justifyContent='between'
        maxWidth={maxWithComponents}
        onClick={handleShowOptions}
        padding='0 32px 0 0'
      >
        <Text
          clickable='pointer'
          customColor={getGlobalStyle('--color-text-black')}
          type='span'
        >
          {title}
        </Text>
        <Icon
          clickable='pointer'
          color={getGlobalStyle('--color-icons-black')}
          customSize={16}
          name={!showOptions ? 'DropDownClose' : 'DropDownOpen'}
        />
      </Row>
      <Column
        borderRadius='8px'
        className={classNames(styles.optionsContainer, {
          [styles[`display--options`]]: showOptions,
          [styles[`hide--options`]]: !showOptions
        })}
        height='306px'
        maxWidth={maxWithComponents}
      >
        <Column>
          <Row padding='12px'>
            <InputIcon
              border='1px solid #666666'
              borderRadius='20px'
              colorIcon='#666666'
              customPadding='5px'
              customSizeIcon={textSearch?.length > 0 ? 17: 21}
              fontSize='md'
              height='35px'
              icon={textSearch?.length > 0 ? 'Close': 'SearchCart'}
              id='search'
              inputAdornmentRef={inputAdornmentRef}
              onBlurSearch={() => {return setFocusSearch(false)}}
              onChangeSearch={(e) => {return setTextSearch(e?.target?.value)}}
              onClickSearch={onClickClearSearch}
              onFocusSearch={() => {return setFocusSearch(true)}}
              placeholder={placeholderSearch}
              placeholderColor={focusSearch ? 'gray': null}
            />
          </Row>
          <Row
            className={styles.listOptions}
            maxHeight='178px'
            maxWidth={maxWithComponents}
          >
            <ListOptions onClickCheckBox={onClickCheckBox} temporalOptions={temporalOptions} />
          </Row>
          <Row
            alignItems='center'
            justifyContent='center'
            padding='11px 12px 13px 12px'
          >
            <Button
              borderRadius='24px'
              height='45px'
              label='Confirmar'
              onClick={onSubmit}
              status={statusButton ? 'initial': 'disabled'}
              width='216px'
            />
          </Row>
        </Column>
      </Column>
    </Container>
  )
}