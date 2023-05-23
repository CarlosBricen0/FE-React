import React from 'react'
import {
  Container,
  Column,
  Row,
  Spacer
} from '../../layout/index'
import {
  Text,
  Icon
} from '../../atoms/index'
import { IconProps } from '../../atoms/Icon/Icon'
import { Icons } from '../../../assets/SvgComponents/SvgIcons'

export type TextSize = 'base' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '5xl' | '6xl' | '9xl' | '10xl';
export type Truncate = 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100;

export interface IconBoxProps {
  customClass?: string;
  detail?: string;
  detailRole?: string;
  icon?: keyof (typeof Icons);
  iconSize?: IconProps['sizes'];
  title?: string;
  titleRole?: string;
  truncate?: Truncate;
  iconMargin?: string
  detailFontSize?: TextSize;
  titleFontSize?: TextSize;
}

export const IconBox = ({
  customClass = '',
  detail,
  icon,
  iconSize = 'lg',
  title,
  truncate,
  iconMargin,
  detailFontSize = 'base',
  titleFontSize = 'base'
}: IconBoxProps): React.ReactElement => {
  return (
    <Container>
      <Row>
        <Column
          customClassName={customClass}
          customWidth='10'
          margin={iconMargin}
        >
          <Icon
            color='black'
            name={icon}
            sizes={iconSize}
          />
        </Column>
        <Column>
          <Text fontSize={titleFontSize} fontWeight='semibold'>{title}:</Text>
          <Spacer.Horizontal size={4} />
          <Text fontSize={detailFontSize} truncate={truncate}>{detail}</Text>
        </Column>
      </Row>
    </Container>
  )
}