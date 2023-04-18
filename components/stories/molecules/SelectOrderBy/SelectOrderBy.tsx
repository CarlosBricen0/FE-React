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
import { Icon, Text } from '../../atoms'
import { getGlobalStyle } from '../../../helpers'
import styles from './SelectOrderBy.module.css'

interface Option {
  orderKey: string;
  value: string;
}

export interface SelectByOptions {
  options?: Array<Option>;
  selected?: string;
  onClick?: (e: string) => void;
}

export const SelectOrderBy = ({
  options = [
    { orderKey: 'a', value: 'Recomendados' },
    { orderKey: 'b', value: 'Precio mayor a menor' },
    { orderKey: 'c', value: 'Precio menor a mayor' },
    { orderKey: 'd', value: 'De la A la Z' },
    { orderKey: 'e', value: 'De la Z a la A' },
    { orderKey: 'f', value: 'Más comprados' },
    { orderKey: 'g', value: 'Más nuevos' },
    { orderKey: 'h', value: 'Mejores descuentos' }
  ],
  onClick = () => { return undefined }
}: SelectByOptions): React.ReactElement<SelectByOptions> => {
  const [itemSelected, setItemSelected] = useState(options?.[0]?.value)
  const [showOptions, setShowOptions] = useState(false)
  const onCloseRef = useRef(null)

  const handleShowOptions = () => {
    setShowOptions(!showOptions)
  }

  useEffect(() => {
    const clickOutside = (e) => {
      if(onCloseRef?.current?.contains(e?.target)) {
        return
      }
      setShowOptions(false)
    }

    document.body.addEventListener('mousedown', clickOutside)
    return () => {
      document.body.removeEventListener('mousedown', clickOutside)
    }
  }, [showOptions])

  const onOptionClick = (e) => {
    setItemSelected(e?.target?.innerHTML)
    setShowOptions(false)
    onClick(e?.target?.innerHTML)
  }

  return (
    <Container isWrap>
      <Row>
        <Text
          customClassName={styles.textCursor}
          customColor={getGlobalStyle('--color-neutral-dusty-gray')}
          type='span'
        >
          Ordenar por
        </Text>
        <Text
          customClassName={styles.separator}
          customColor={getGlobalStyle('--color-neutral-dusty-gray')}
          type='span'
        >
          |
        </Text>
        <div
          className={styles.clickContainer}
          onClick={handleShowOptions}
          ref={onCloseRef}
        >
          <Text
            customClassName={`${styles.selectedText} ${styles.textCursor}`}
            fontWeight='semibold'
            type='div'
          >
            {itemSelected}
          </Text>
          <div className={styles.iconContainer}>
            <Icon
              color={getGlobalStyle('--color-neutral-black')}
              customSize={16}
              name={!showOptions ? 'DropDownCloseV2' : 'DropDownOpenV2'}
            />
          </div>
        </div>
      </Row>
      <Column
        borderRadius='8px'
        className={classNames(styles.optionsContainer, {
          [styles[`display--options`]]: showOptions,
          [styles[`hide--options`]]: !showOptions
        })}
        maxWidth='240px'
        width='100%'
      >
        <ul className={styles.ul}>
          {options?.map?.((option) => {
            return (
              <li
                className={styles.list}
                key={option.orderKey}
                onClick={onOptionClick}
                value={option?.value}
              >
                {option?.value}
              </li>)
          })}
        </ul>
      </Column>
    </Container>
  )
}