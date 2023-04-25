import { ReactNode } from 'react'
import { Text, TextProps } from '../../atoms'
import { Column } from '../../layout'

export interface FieldProps {
  children?: ReactNode;
  error?: string;
  errorProps?: Omit<TextProps, 'children'>;
  gap?: number;
  label?: string;
  labelProps?: Omit<TextProps, 'children'>;
}

export const Field = ({
  children,
  error,
  errorProps,
  gap = 12,
  label,
  labelProps
}: FieldProps) => {
  return (
    <Column gap={gap}>
      <Text
        fontSize='md'
        fontWeight='semibold'
        {...labelProps}
      >
        {label}
      </Text>

      {children}

      <Text
        fontSize='md'
        fontWeight='semibold'
        {...errorProps}
      >
        {error}
      </Text>
    </Column>
  )
}
