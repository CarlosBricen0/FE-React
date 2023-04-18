import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MultipleSelector } from './MultipleSelector'
import { optionsMultipleChecked, optionsOnlyOneChecked } from '../../../__mocks__/MultipleSelector'
import styles from './MultipleSelector.module.css'

export default {
  title: 'Molecules/MultipleSelector',
  component: MultipleSelector
} as ComponentMeta<typeof MultipleSelector>

const MultipleChecked: ComponentStory<typeof MultipleSelector> =
(args) => {
  return <MultipleSelectorStory args={args} onlyOneChecked={false}/>
}

const OneChecked: ComponentStory<typeof MultipleSelector> =
(args) => {
  return <MultipleSelectorStory args={args} onlyOneChecked={true} />
}

export const MultipleSelectorTemplate = MultipleChecked.bind({})
MultipleSelectorTemplate.args = {
  options: optionsMultipleChecked,
  showResult: false,
  placeholderSearch: 'Buscar marca'
}

export const OnlyOneChecked = OneChecked.bind({})
OnlyOneChecked.args = {
  options: optionsOnlyOneChecked,
  showResult: false,
  placeholderSearch: 'Buscar marca'
}

const ShowResultInfo = ({listChecked}:{listChecked: Array<object>}) => {
  return <div
    className={styles.showResult}
  >
    <text >List checked:</text>
    <div style={{marginTop: '8px'}}>
      {listChecked?.map((option) => {
        return <div key={option['value']} style={{padding: '5px'}}>
          <li>{option['value']}</li>
        </div>}
      ) }
    </div>
  </div>
}
const MultipleSelectorStory = ({args, onlyOneChecked=false}: {args:object, onlyOneChecked: boolean}) => {
  const [listChecked, setListChecked] = useState([])
  const onConfirmation = listChecked => {
    setListChecked(listChecked)
  }
  return <div style={{position:'relative'}}>
    <MultipleSelector
      {...args}
      onConfirmation={onConfirmation}
      onlyOneChecked={onlyOneChecked}
    />
    {args?.['showResult'] && <ShowResultInfo listChecked={listChecked} />}
  </div>
}
