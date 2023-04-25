import React from 'react'
import classNames from 'classnames'
import {
  Color,
  FontSize,
  Icon
} from '../../atoms'
import { Container, Row } from '../../layout'
import { getGlobalStyle } from '../../../helpers'
import styles from './Selector.module.css'
import { Icons } from '../../../assets/SvgComponents/SvgIcons'

export interface SelectorProps extends Omit<React.HTMLProps<HTMLSelectElement>, 'ref'> {
  appearance?: 'auto' | 'none';
  arrow?: boolean;
  arrowColor?: string;
  color?: Color;
  fontSize?: FontSize;
  iconName?: keyof (typeof Icons);
  iconSize?: number;
  id?: string;
  marginLess?: boolean;
  options: Array<number | string>;
  padding?: string;
  placeholder: string;
  onChange?: (e?: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Selector = React.forwardRef(function select({
  appearance = 'auto',
  arrow,
  arrowColor = getGlobalStyle('--color-text-gray-light'),
  color,
  fontSize = 'base',
  iconName = 'DropDownClose',
  iconSize = 16,
  id,
  marginLess,
  options = ['option1', 'option2', 'option3'],
  padding,
  placeholder = 'Selecciona una opción',
  ...props
}: SelectorProps, ref?: React.LegacyRef<HTMLSelectElement>): React.ReactElement<SelectorProps> {
  return (
    <Row>
      <select
        className={
          classNames(styles.select, {
            [styles[`select--appearance-${appearance}`]]: appearance,
            [styles[`select--font-size-${fontSize}`]]: fontSize,
            [styles[`select--margin-less`]]: marginLess,
            [styles[`select__text--${color}`]]: color
          })
        }
        defaultValue={placeholder}
        id={id}
        ref={ref}
        style={{padding}}
        {...props}
      >
        <option>{placeholder}</option>
        {options?.map((option, index) => {
          return <option key={index}>{option}</option>
        })
        }
      </select>
      <Container
        hidden={!arrow}
        margin='0 0 0 -16px'
        maxWidth='16px'
        padding={padding}
        zIndex={getGlobalStyle('--z-index-5')}
      >
        <Icon
          color={arrowColor}
          customSize={iconSize}
          name={iconName}
        />
      </Container>
    </Row>
  )
})
