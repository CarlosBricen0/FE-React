import { 
  useEffect, 
  useRef, 
  useState 
} from 'react'
import classNames from 'classnames'
import {
  BigScreen,
  getGlobalStyle,
  SmallScreen
} from '../../../../../helpers'
import { Input } from '../../../../atoms'
import { Row } from '../../../../layout'
import { ChildrenBaseContainerProps } from '../../../../layout/BaseContainer/BaseContainer'
import styles from './CodeInput.module.css'

export interface CodeInputProps extends Omit<ChildrenBaseContainerProps, 'onChange'> {
  onChange?: (value: string) => void;
}

function cleanerCode(rawCode: string) {
  if (!rawCode) {
    return ''
  }

  return rawCode.replace(/\D/g, '')
}

export const CodeInput = ({
  onChange
}: CodeInputProps) : React.ReactElement<CodeInputProps> => {
  const [codeState, setCodeState] = useState(['', '', '', '', '', ''])

  const codeInputsRef = useRef<HTMLInputElement[]>([null, null, null, null, null, null])

  useEffect(() => {
    const code = Object.values(codeState).join('')
    onChange?.(code)
  }, [codeState])

  const setFocus = (index: number, direction: 'forward' | 'backward') : void => {
    const nextIndex = (direction === 'forward' ? index + 1 : index - 1) % (codeState.length)
    if (nextIndex >= codeState.length || nextIndex < 0) return
    if (index === codeState.length - 1 && direction === 'forward') return
    codeInputsRef.current[nextIndex].focus()
  }

  const handleChange = (event: React.FormEvent<HTMLInputElement>) : void => {
    const index = parseInt(event.currentTarget.name)
    
    const rawValue = event.currentTarget.value.trim().slice(event.currentTarget.value.length - 1, event.currentTarget.value.length)
    const value = cleanerCode(rawValue)

    const newCodeState = [...codeState]
    newCodeState[index] = value

    setCodeState(newCodeState)

    if (!value) {
      return
    }

    const direction = value ? 'forward' : 'backward'
    setFocus(index, direction)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) : void => {
    const rawValue = event.currentTarget.value.trim()

    if (event.keyCode === 8 && !rawValue) {
      const index = parseInt(event.currentTarget.name)
      setFocus(index, 'backward')
    }
  }

  const handlePasteFirst = (event: React.ClipboardEvent<HTMLInputElement>) : void => {
    event.preventDefault()
    const rawCode = event.clipboardData.getData('Text') || ''
    const code = cleanerCode(rawCode)
    const focusedIndex = parseInt(event.currentTarget.name)
    const codeArray = code.split('')
    let newCode = [...codeState]
    newCode = newCode.map((code, index) => {
      if (index < focusedIndex) {
        return code
      }
      return codeArray[index - focusedIndex] || code
    })
    setCodeState(newCode)
    let nextFocus = focusedIndex + code.length - 2
    if (nextFocus >= codeState.length) nextFocus = codeState.length - 2
    setFocus(nextFocus, 'forward')
  }

  const assignInputRef = (index: number, ref: HTMLInputElement) => {
    codeInputsRef.current[index] = ref
  }

  return (
    <Row
      alignItems='center'
      gap={8}
      justifyContent='center'
    >
      <BigScreen>
        <>
          {codeState.map((value, index) => {return (
            <Input
              borderRadius={getGlobalStyle('--border-radius-2sm')}
              className={classNames(styles[`input__${index}`], styles['input'])}
              height='80px'
              key={index}
              maxLength={1}
              name={index.toString()}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              onPaste={handlePasteFirst}
              ref={(el) => {return assignInputRef(index, el)}}
              type='number'
              value={value}
              width='80px'
            />
          )})}
        </>
      </BigScreen>
      <SmallScreen>
        <>
          {codeState.map((value, index) => {return (
            <Input
              borderRadius={getGlobalStyle('--border-radius-2sm')}
              className={classNames(styles['input'])}
              height='50px'
              key={index}
              maxLength={1}
              name={index.toString()}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              onPaste={handlePasteFirst}
              ref={(el) => {return assignInputRef(index, el)}}
              type='number'
              value={value}
              width='50px'
            />
          )})}
        </>
      </SmallScreen>
    </Row>
  )
}