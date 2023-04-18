import React from 'react'
import { Text } from '../../atoms'
import { Spacer } from '../../layout'

export interface FormatProps {
  degrees?: string;
  container?: string;
  volume?: string;
  format?: string;
}

export const ShelfFormat = ({
  container,
  degrees,
  format,
  volume
}: FormatProps): React.ReactElement<FormatProps> => {

  if (volume && degrees) {
    const cleanedDegrees = degrees.replace(/[a-zA-Z]+/, '')
    return (
      <Text color='gray' fontSize='sm'>
        {`${volume} - ${container} - ${cleanedDegrees}`}
      </Text>
    )
  }

  if (format) {
    return (
      <Text color='gray' fontSize='sm'>
        {format}
      </Text>
    )
  }

  return <Spacer.Horizontal size={16} />
}