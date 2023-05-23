import {
  Column,
  Container,
  Row,
  Spacer
} from '../../../layout/index'
import {
  Button,
  ButtonProps,
  Icon,
  Title
} from '../../../atoms/index'
import { AcordeonProps } from '../Acordeon'
import { Icons } from '../../../../assets/SvgComponents/SvgIcons'

import styles from '../Acordeon.module.css'
import { getGlobalStyle} from '../../../../helpers'
import React from 'react'
import { ChildrenBaseContainerProps } from '../../../layout/BaseContainer/BaseContainer'

export interface AcordeonTitleProps extends AcordeonProps {
  containerProps?: ChildrenBaseContainerProps;
  buttonProps?: Partial<ButtonProps>;
  titleAcordeon: string;
  role?: string;
  isOpen?: boolean;
  showLine?:boolean;
  icon: keyof (typeof Icons);
  handleIsOpen: () => void;
  underline?: typeof Text.arguments.underline;
}

export const AcordeonTitle = ({
  alignItemsIcon,
  buttonProps,
  containerProps,
  fontWeightText,
  handleIsOpen,
  heightIcon,
  icon,
  maxWidthText,
  minWidthText,
  role = 'heading',
  showLine,
  sizeButton,
  titleAcordeon,
  underline = 'none'
}: AcordeonTitleProps): React.ReactElement => {
  const customWidthIcon = showLine ? '10' : '100'
  return (
    <Container
      className={styles.cursorPointer}
      onClick={handleIsOpen}  
      role={role}
      {...containerProps}
    >
      <Row alignItems='center' clickable='pointer'>
        <Column
          clickable='pointer'
          maxWidth={maxWidthText}
          minWidth={minWidthText}
        >
          <Title
            fontWeight={fontWeightText}
            headingLevel='h4'
          >
            <Button
              fontWeight={fontWeightText}
              label={titleAcordeon}
              size={sizeButton}
              type='semibold'
              {...buttonProps}
              underline={underline}
            />
          </Title>
        </Column>
        <Spacer.Vertical size={8} />
        {showLine && 
        ( 
          <Spacer.Horizontal backgroundColor={getGlobalStyle('--color-background-gray')} size={1} />
        )}
        
        <Column
          alignItems={alignItemsIcon}
          clickable='pointer'
          customHeight={heightIcon}
          customWidth={customWidthIcon}
          justifyContent='center'
        >
          <Icon
            clickable='pointer'
            color={getGlobalStyle('--color-icons-gray')}
            name={icon}
            sizes='xs'
          />
        </Column>
      </Row>
    </Container>
  )
}