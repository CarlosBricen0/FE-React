import React, { useState } from 'react'
import { Text, Icon } from '../../atoms'
import {
  Column,
  Container,
  Row
} from '../../layout'
import { getGlobalStyle } from '../../../helpers'
import { useDropdownMaxHeight, useDropdownOutside } from './helpers'

export interface DropdownProps {
  arrow?: boolean;
  arrowColor?: string;
  maxOptions?: number;
  options?: string[];
  placeholder?: string;
  onChange?: (selected?: string) => void;
  value?: string;
}

export const Dropdown = ({
  arrow = true,
  arrowColor = getGlobalStyle('--color-text-gray-light'),
  maxOptions = 4,
  options = [],
  placeholder = 'Selecciona una opción',
  onChange,
  value
}: DropdownProps) => {
  const [open, setOpen] = useState<boolean>()

  const { maxHeight } = useDropdownMaxHeight({ maxOptions })

  const handleDropdownItemClick = (option: string) => {
    return () => {
      setOpen(false)

      if (option === value) {
        onChange(placeholder)
      } else {
        onChange(option)
      }
    }
  }

  const handleDropdownIconClick = () => {
    setOpen(!open)
  }

  const handleDropdownClickOutside = () => {
    setOpen(false)
  }

  const ref = useDropdownOutside<HTMLDivElement>(handleDropdownClickOutside)

  return (
    <Container position='relative' ref={ref}>
      <Row
        alignItems='center'
        clickable='pointer'
        justifyContent='between'
        onClick={handleDropdownIconClick}
        role='dropdown'
      >
        <Text clickable='pointer' fontSize='md'>
          {value || placeholder}
        </Text>

        {
          arrow && (
            <Icon
              clickable='pointer'
              color={arrowColor}
              name='DropDownClose'
            />
          )
        }
      </Row>

      {
        open && (
          <Container
            absoluteDefault={null}
            padding='32px 0 0'
            position='absolute'
            zIndex='1'
          >
            <Column
              backgroundColor={getGlobalStyle('--color-background-white')}
              borderRadius={getGlobalStyle('--border-radius-2sm')}
              boxShadow='0px 6px 10px rgba(27, 33, 56, 0.15)'
              gap='8px'
              maxHeight={`${maxHeight}px`}
              overflow='auto'
              padding='12px'
            >
              {
                options?.map((option, index) => {
                  return (
                    <Container
                      alignItems='center'
                      backgroundColor={option === value ? getGlobalStyle('--color-background-gray-light') : getGlobalStyle('--color-background-white')}
                      borderRadius='2px'
                      clickable='pointer'
                      key={index}
                      minHeight='35px'
                      onClick={handleDropdownItemClick(option)}
                      padding='0 8px'
                    >
                      <Text
                        clickable='pointer'
                        fontSize='md'
                        lineHeight='19px'
                      >
                        {option}
                      </Text>
                    </Container>
                  )
                })
              }
            </Column>
          </Container>
        )
      }
    </Container>
  )
}
