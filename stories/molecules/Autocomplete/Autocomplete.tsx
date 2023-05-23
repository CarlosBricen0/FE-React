import { Input, InputProps } from '../../atoms'
import { Row } from '../../layout'

export interface AutocompleteProps extends InputProps {
  list: string;
  options?: string[];
}

export const Autocomplete = ({ options, list, ...props }: AutocompleteProps) => {
  const hasOptions = options && options.length > 1
  const hasValue = !!props.value
  return (
    <Row>
      <Input list={hasOptions ? list : null} {...props} />

      {
        hasValue &&
        hasOptions &&
        <datalist id={list}>
          {
            options.map((item, key) => {
              return (
                <option key={key} value={item}>
                  {item}
                </option>
              )
            })
          }
        </datalist>
      }
    </Row>
  )
}
