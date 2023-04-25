import { Icons } from '../../../assets/SvgComponents/SvgIcons'
import {
  FontSize,
  Icon,
  Text
} from '../../atoms'
import { Row } from '../../layout'

export interface ValidationTextProps {
  color?: string;
  fontSize?: FontSize;
  gap?: string | number;
  iconName?: keyof (typeof Icons);
  iconSize?: number;
  text?: string;
}

export const ValidationText = ({
  color,
  fontSize = 'sm',
  gap = 4,
  iconName = 'Dot',
  iconSize = 8,
  text
}: ValidationTextProps) => {
  return (
    <Row alignItems='center' gap={gap}>
      {
        iconName && (
          <Icon
            color={color}
            customSize={iconSize}
            name={iconName}
          />
        )
      }

      <Text customColor={color} fontSize={fontSize}>
        {text}
      </Text>
    </Row>
  )
}
