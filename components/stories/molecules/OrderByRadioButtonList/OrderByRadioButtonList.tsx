import React from 'react'
import { Container, Row } from '../../layout'
import { SelectByOptions } from '../SelectOrderBy/SelectOrderBy'
import { Divider, Text } from '../../atoms'
import styles from './OrderByRadioButtonList.module.css'

export const OrderByRadioButtonList = ({
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
  selected = 'Recomendados',
  onClick = () => { return undefined }
}:SelectByOptions) => {
  const isDisabled = false

  const isRadioSelected = (value: string): boolean => {
    return selected === value
  }

  const onChangeRadioClick = (e: React.ChangeEvent<HTMLInputElement>): void => {
    onClick(e?.currentTarget?.value)
  }

  return (
    <Container isWrap>
      {options.map((option, key) => {
        return (
          <Row isWrap key={option.orderKey}>
            <Row justifyContent='between'>
              <Text fontSize='md' type='div'>
                {option.value}
              </Text>
              <div>
                <input
                  checked={isRadioSelected(option.value)}
                  className={styles.radioSelect}
                  disabled={isDisabled}
                  key={key}
                  name={option.value}
                  onChange={onChangeRadioClick}
                  type='radio'
                  value={option.value}
                />
              </div>
            </Row>
            <Divider thickness={0} verticalMargin={10}/>
          </Row>
        )
      })}
    </Container>
  )
}