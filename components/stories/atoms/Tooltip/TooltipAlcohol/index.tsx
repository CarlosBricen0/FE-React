
import {
  Column,
  Container,
  Row
} from '../../../layout'
import {
  Text,
  Icon,
  Color,
  FontSize
} from '../../../atoms'
import { Tooltip } from '../Tooltip'

type Position = 'absolute' | 'relative' | 'fixed' | 'initial' | 'sticky'

export interface TooltipAlcoholProps{
  backgroundColor: string;
  borderRadius?: string;
  boxShadow?: string;
  closeIcon?: boolean;
  fontSize? : FontSize;
  iconColor: string;
  iconSize?: number;
  leftMobile?: string;
  margin?: string;
  maxWidth: string;
  padding?: string;
  position?: Position;
  rightMobile?: string;
  text: string;
  textColor?: Color;
  topMobile?: string;
  onClose?: () => void;
}

export const TooltipAlcohol = ({
  backgroundColor,
  borderRadius,
  boxShadow = '1px 1px 3px var(--color-neutral-gray-silver)',
  closeIcon = false,
  fontSize = 'md',
  iconColor,
  iconSize = 20,
  leftMobile = '',
  margin,
  maxWidth,
  padding = '16px',
  position = 'sticky',
  rightMobile = '7px',
  text = 'Test',
  textColor = 'black',
  topMobile = '92px',
  onClose
}: TooltipAlcoholProps): React.ReactElement => {

  return (
    <Tooltip
      alignAllItems='center'
      background={backgroundColor}
      borderRadius={borderRadius}
      bottom=''
      boxShadow={boxShadow}
      closeColor={iconColor}
      closeIcon={closeIcon}
      left={leftMobile}
      margin={margin}
      maxWidth={maxWidth}
      onClick={onClose}
      padding={padding}
      position={position}
      positionContainer='sticky'
      right={rightMobile}
      text=''
      textComponent={
        <Container >
          <Row alignItems='center'>
            <Column margin='0 10px 0 0' maxWidth='max-content'>
              <Icon
                color={iconColor}
                customSize={iconSize}
                name='Info'
              />
            </Column>
            <Column>
              <Text
                color={textColor}
                fontSize={fontSize}
              >
                {text}
              </Text>
            </Column>
          </Row>

        </Container>
      }
      top={topMobile}
      type='bottom'
      width={maxWidth}
    />
  )
}