import React from 'react'
import { Container, Row } from '../../layout'
import { Icon, Text } from '../../atoms'
import styles from './FiltersBar.module.css'

export interface FilterBarProps {
  filterQuantity?: number;
  orderByName?: string;
  showFilterBtn?: boolean;
  onClickShowFilter?: () => void;
  onClickShowOrder?: () => void;
}

export const FiltersBar = ({
  filterQuantity = 0,
  orderByName = 'Recomendados',
  showFilterBtn = false,
  onClickShowFilter,
  onClickShowOrder
}: FilterBarProps): React.ReactElement => {

  const filterQuantityLabel = () => {
    if (filterQuantity === 0) {
      return 'Sin filtros'
    }

    if (filterQuantity === 1) {
      return '1 filtro'
    }

    return `${filterQuantity} filtros`
  }

  return (
    <Container gap={10}>
      {showFilterBtn && (
        <Row className={styles.buttonContainer}>
          <button
            className={styles.buttonBar}
            onClick={onClickShowFilter}
            type='button'
          >
            <Container isWrap>
              <Row customClassName={styles.pointer} justifyContent='center'>
                <Icon
                  clickable='pointer'
                  customSize={20}
                  name='FilterBar'
                />
                <Text
                  customClassName={`${styles.text} ${styles.pointer}`}
                  fontSize='md'
                  type='p'
                >
                Filtros
                </Text>
              </Row>
              <Row customClassName={styles.pointer} justifyContent='center'>
                <Text
                  customClassName={styles.pointer}
                  fontSize='md'
                  type='span'
                >
                  {filterQuantityLabel()}
                </Text>
              </Row>
            </Container>
          </button>
        </Row>
      )}
      <Row className={styles.buttonContainer}>
        <button
          className={styles.buttonBar}
          onClick={onClickShowOrder}
          type='button'
        >
          <Container isWrap>
            <Row customClassName={styles.pointer} justifyContent='center'>
              <Icon
                clickable='pointer'
                customSize={20}
                name='OrderBar'
              />
              <Text
                customClassName={`${styles.text} ${styles.pointer}`}
                fontSize='md'
                type='p'
              >
                Ordenar
              </Text>
            </Row>
            <Row customClassName={styles.pointer} justifyContent='center'>
              <Text
                customClassName={styles.pointer}
                fontSize='md'
                type='span'
              >
                {orderByName}
              </Text>
            </Row>
          </Container>
        </button>
      </Row>
    </Container>
  )
}