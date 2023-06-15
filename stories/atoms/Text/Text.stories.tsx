import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { Text } from './Text'
import { getGlobalStyle } from '../../../helpers'

export default {
  title: 'Atoms/Text',
  component: Text
} as Meta<typeof Text>

const Template: StoryFn<typeof Text> = (args) => { return <Text {...args} ></Text> }

export const base = Template.bind({})
base.argTypes = {
  textAlign: {
    control:'select',
    options:[ 'left' , 'center' , 'right' , 'justify']
  },
  fontSize: { 
    control: 'select',
    description: 'Font sizes for Text component',
    options: ['base' ,'2xs' ,'xs' ,'sm' ,'md' ,'lg' ,'xl' ,'2xl' ,'3xl' ,'5xl' ,'6xl' ,'9xl' ,'10xl'] 
  },
  customColor: { control: 'color', options: getGlobalStyle('--color-base-black') },
  fontWeight:{
    control:'select',
    options:['regular' , 'medium', 'semibold' , 'bold']
  } ,
  children: {
     control : 'text' ,
     defeaultValue:'asdasd'
    },
  truncate: {
    control:{
      type:'number',
      min:1,
      max:100
    }
  },
}
