import { Column, Row } from '../../layout'
import { Checkbox, Text } from '../../atoms'
import { OnOnClickCheck,Option } from './MultipleSelector'
import styles from './MultipleSelector.module.css'

interface ListOptionsProps{
  temporalOptions: Array<Option>;
  onClickCheckBox: ({ e, key, value }: OnOnClickCheck) => void;
}

export const ListOptions = ({ temporalOptions, onClickCheckBox } : ListOptionsProps) => {
  return <ul className={styles.ul} role='list'>
    {temporalOptions?.length > 0 && temporalOptions.map((option,key) => {
      return (
        <li
          className={styles.list}
          data-testid={option?.value}
          key={`li-option-${option?.value}`}
          onClick={ (e) => {
            onClickCheckBox({
              e,
              key,
              value: option?.value
            })
          }}
          role='listitem'
          value={option?.value}
        >
          <Row alignItems='center' clickable='pointer'>
            <Column borderRadius='3px' maxWidth='min-content'>
              <Checkbox
                customClass={styles.checkboxSelect}
                iconColor='white'
                id={`multiple-selector-${option?.value}`}
                nameIcon='Check'
                onClick={() => { return }}
                type='checkbox'
                value={option?.checked}
              />
            </Column>
            <Column margin='0 0 0 8px'>
              <Text clickable='pointer' fontSize='md'>
                {`${option?.value}`}
                {option?.numberResult > 0 && ` (${option?.numberResult})` }
              </Text>
            </Column>
          </Row>
        </li>)
    })}
  </ul>
}