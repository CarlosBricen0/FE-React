import React, { useState } from 'react'
import {
  Container,
  Row,
  Spacer
} from '../../layout/index'
import { 
  Size, 
  Text, 
  TitleProps 
} from '../../atoms/index'
import { AcordeonTitle } from './AcordeonTitle'
import { Icons } from '../../../assets/SvgComponents/SvgIcons'
import { ChildrenBaseContainerProps } from '../../layout/BaseContainer/BaseContainer'

export interface AcordeonProps {
  alignItemsIcon?: 'start' | 'end';
  children?: React.ReactNode;
  containerProps?: ChildrenBaseContainerProps;
  containerOpenProps?: ChildrenBaseContainerProps;
  fontWeightText?: TitleProps['fontWeight'];
  heightIcon?:string;
  maxWidthText?:string;
  minWidthText?:string;
  openState?:boolean;
  positionText?: 'top' | 'bottom';
  showLine?:boolean;
  sizeButton?:Size;
  titleClose?: string;
  titleOpen?: string;
  titleProps?: Record<string, unknown>;
  underline?: typeof Text.arguments.underline;
}

export const Acordeon = ({
  alignItemsIcon='start',
  children,
  containerProps,
  containerOpenProps,
  fontWeightText = 'regular',
  heightIcon = 'auto',
  maxWidthText = '180px',
  minWidthText = '180px',
  openState = false,
  showLine=false,
  positionText = 'top',
  sizeButton='medium',
  titleClose = 'Ocultar tus productos',
  titleOpen = 'Mostrar tus productos',
  titleProps,
  underline = 'none'
}: AcordeonProps): React.ReactElement<AcordeonProps> => {

  const [isOpen, setIsOpen] = useState(openState)
  const icon: keyof (typeof Icons) = isOpen ? 'DropDownOpen' : 'DropDownClose'
  const titleAcordeon = isOpen ? titleOpen : titleClose

  const handleIsOpen = (): void =>{
    setIsOpen(!isOpen)
  }

  const AcordeonPropsGlobal = {
    alignItemsIcon,
    fontWeightText,
    handleIsOpen,
    heightIcon,
    icon,
    isOpen,
    maxWidthText,
    minWidthText,
    showLine,
    sizeButton,
    titleAcordeon,
    underline,
    ...titleProps
  }
  
  return (
    <Container 
      clickable='pointer' 
      tagName='section' 
      {...containerProps}
    >
      <Row
        clickable='pointer'
        isWrap={true}
        tagName='article'
      >
        
        { positionText === 'bottom' && 
          <AcordeonTitle
            {...AcordeonPropsGlobal}
          />
        }

        {isOpen &&
          <Container 
            clickable='pointer' 
            isWrap 
            {...containerOpenProps}
          >
            <Row clickable='pointer'>
              {children}
            </Row>
            <Spacer.Horizontal size={16} />
          </Container>
        }
        
        { positionText === 'top' &&
          <AcordeonTitle
            {...AcordeonPropsGlobal}
          />
        }

      </Row>
    </Container>
  )
}