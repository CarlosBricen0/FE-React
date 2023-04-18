import React from 'react'
import classNames from 'classnames'
import styles from './ToggleSwitch.module.css'
import Text, { FontSize } from '../Text/Text'

export interface ToggleSwitchProps {
  customClass?: string;
  fontWeight?: 'regular' | 'semibold' | 'medium' | 'bold';
  leftLabel?: string;
  name?: string;
  rightLabel?: string;
  textPosition?: 'center' | 'end'
  textSize?: FontSize;
  type?: 'checkbox';
  value: boolean;
  onClick: () => void;
}

export const ToggleSwitch = ({
  customClass,
  type = 'checkbox',
  value = true,
  leftLabel = '',
  rightLabel = '',
  name = 'toggle',
  textPosition,
  textSize = 'md',
  fontWeight,
  onClick
}: ToggleSwitchProps): React.ReactElement => {
  return (
    <>
      <label className={classNames(styles.toggle, customClass)}>
        <input
          checked={value}
          className={styles.toggleInput}
          id={styles.toggleInput}
          name={name}
          onChange={onClick}
          type={type}
        />

        <div className={styles.toggleInner} >
          <Text
            customClassName={classNames(styles.rightClass, {
              [styles[`text-position-${textPosition}`]]: textPosition
            })}
            fontSize={textSize}
            fontWeight={fontWeight}
          >
            {rightLabel}
          </Text>

          <Text
            customClassName={classNames(styles.leftClass, {
              [styles[`text-position-${textPosition}`]]: textPosition
            })}
            fontSize={textSize}
            fontWeight={fontWeight}
          >
            {leftLabel}
          </Text>
        </div>
        
      </label>
    </>
  )
}

export default ToggleSwitch