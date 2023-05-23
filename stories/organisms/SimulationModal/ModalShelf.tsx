import React from 'react'
import { Picture, Text } from '../../atoms'
import { Column, Row, Spacer } from '../../layout'
import { SimulationItem } from './SimulationModal'
import styles from './SimulationModal.module.css'

export const ModalShelf = ({item}: {item: SimulationItem}) => {
  const itemQuantity = `${item?.quantity} ${item?.measurementUnit}`
  return (
    <>
      <Row key={item?.id}>
        <Column maxWidth='20%'>
          <Picture
            alt={item?.name}
            border='none'
            borderRadius='none'
            className={styles.outOfStock}
            height='70px'
            src={item?.image}
            width='70px'
          />
        </Column>
        <Column>
          <Row>
            <Text fontSize='md' fontWeight='semibold'>{item?.brandName}</Text>
          </Row>
          <Row>
            <Text fontSize='md' >{item?.name}</Text>
          </Row>
          <Row>
            <Text color='neutral-dark' fontSize='sm'>{itemQuantity}</Text>
          </Row>
          <Row>
            <Text fontSize='sm' fontWeight='semibold'>Cantidad: {itemQuantity}</Text>
          </Row>
          <Spacer.Horizontal size={8}/>
          <Row>
            <Text fontSize='md' fontWeight='semibold'>{item?.sellingPrice}</Text>
          </Row>
        </Column>
      </Row>
    </>
  )
}