import classNames from 'classnames'
import React, { useState } from 'react'
import {
  BigScreen,
  getGlobalStyle,
  SmallScreen
} from '../../../helpers'
import {
  Backbone,
  Icon,
  Link,
  Picture,
  Text,
  Title
} from '../../atoms'
import {
  Column,
  Container,
  Row,
  Vertical
} from '../../layout'
import styles from './DropdownWithRound.module.css'

export interface DataBody {
  image: string;
  name: string;
  href: string;
}

export interface DropdownWithRoundProps {
  customLabelDropdown?: string;
  dataBody: DataBody[] | [];
  isOpen: boolean;
  linkWrapper?: React.FunctionComponent;
  numberPerRow?: number;
  showMore?: boolean;
  title: string;
  handleChangeDropDown?: () => void;
  handleOnClickCard?: () => void;
}

interface HeaderDropdownProps {
  classNameWithAnimateIcon: string;
  labelDropdown: string;
  showMore?: boolean;
  title: string;
  handleChangeDropDown?: () => void;
}

const HeaderDropdown = ({
  classNameWithAnimateIcon,
  labelDropdown,
  showMore = true,
  title,
  handleChangeDropDown
}: HeaderDropdownProps): React.ReactElement => {
  return (
    <Column padding='19px 20px'>
      <Row alignItems='center' justifyContent='between'>
        <Title fontWeight='semibold'>{title}</Title>
        {showMore && (
          <Row
            alignItems='center'
            clickable='pointer'
            customClassName={classNameWithAnimateIcon}
            customWidth='max-content'
            justifyContent='center'
            onClick={handleChangeDropDown}
          >
            <Text
              clickable='pointer'
              color='neutral-dark'
              fontWeight='semibold'
              underline='always'
            >
              {labelDropdown}
            </Text>
            <Vertical size={8} />
            <Icon
              clickable='pointer'
              color={getGlobalStyle('--color-neutral-gray-dark')}
              name='DropDownClose'
            />
          </Row>
        )}
      </Row>
    </Column>
  )
}

interface ItemRoundProps {
  customWithEachItem: string;
  data: DataBody;
  isErrorImg: boolean;
  isMobile?: boolean;
  linkWrapper?: React.FunctionComponent;
  setIsErrorImg: React.Dispatch<React.SetStateAction<boolean>>;
  handleOnClickCard?: () => void;
}

const ItemRound = ({
  customWithEachItem,
  data,
  isErrorImg,
  isMobile,
  linkWrapper,
  setIsErrorImg,
  handleOnClickCard
}: ItemRoundProps): React.ReactElement => {
  const sizeCircle: number = isMobile ? 100 : 200
  const marginContainer: string = isMobile ? '0px 12px 0px 0px' : '40px 0px 0px 0px'
  const sizeTitleItem = isMobile ? 'md' : 'xl'

  return (
    <Column
      alignItems='center'
      customWidth={customWithEachItem}
      justifyContent='center'
      margin={marginContainer}
      minWidth={`${sizeCircle}px`}
      onClick={handleOnClickCard}
    >
      <Column
        alignItems='center'
        backgroundColor={getGlobalStyle('--color-neutral-anti-flash')}
        borderRadius='50%'
        justifyContent='center'
        maxHeight={`${sizeCircle}px`}
        maxWidth={`${sizeCircle}px`}
        minHeight={`${sizeCircle}px`}
        minWidth={`${sizeCircle}px`}
      >
        <Link
          customClassName={styles[`link${sizeCircle}`]}
          href={data.href}
          underline='none'
          wrapper={linkWrapper}
        >
          {isErrorImg || !data.image ? (
            <Row clickable='pointer' maxWidth={`${sizeCircle}px`} >
              <Backbone borderRadius='50%' height={sizeCircle} />
            </Row>
          ) : (
            <Picture
              alt={data.name}
              borderRadius='50%'
              hasURL
              height='100%'
              onError={() => {
                setIsErrorImg(true)
              }}
              src={data.image}
              width='100%'
            />
          )}
        </Link>
      </Column>
      <Link href={data.href} underline='none' >
        <Row justifyContent='center' padding='9px 12px 0'>
          <Text
            clickable='pointer'
            color='black'
            fontSize={sizeTitleItem}
            textAlign='center'
            truncate={20}
          >
            {data?.name}
          </Text>
        </Row>
      </Link>
    </Column>
  )
}

export const DropdownWithRound = ({
  customLabelDropdown,
  dataBody,
  isOpen,
  linkWrapper,
  numberPerRow = 5,
  showMore,
  title,
  handleChangeDropDown,
  handleOnClickCard
}: DropdownWithRoundProps) => {
  const [isErrorImg, setIsErrorImg] = useState<boolean>(false)
  const defaultLabelDropdown: string = isOpen ? 'Ver menos' : 'Ver todos'
  const labelDropdown: string = customLabelDropdown || defaultLabelDropdown
  const customWithEachItem: string = (100 / numberPerRow).toString()
  const classNameWithAnimateIcon: string = classNames(styles['icon-dropdown'], {
    [styles['icon-dropdown--open']]: isOpen
  })

  const headerProps: HeaderDropdownProps = {
    classNameWithAnimateIcon,
    labelDropdown,
    title,
    handleChangeDropDown
  }

  const BodyDropdown = ({ isMobile }: { isMobile?: boolean }) => {
    const itemsProps: Omit<ItemRoundProps, 'data'> = {
      customWithEachItem,
      isErrorImg,
      isMobile,
      linkWrapper,
      handleOnClickCard,
      setIsErrorImg
    }

    return (
      <Container
        isWrap={!isMobile}
        justifyContent={isMobile ? 'start' : 'center'}
        overflow={isMobile ? 'scroll' : 'auto'}
        padding={isMobile ? '12px' : '0px 20px'}
      >
        {dataBody?.map((data, index) => {
          if (!isMobile && !isOpen && index > numberPerRow - 1) return null
          return (
            <ItemRound
              {...itemsProps}
              data={data}
              key={index}
            />
          )
        })}
      </Container >
    )
  }

  return (
    <>
      <BigScreen>
        <>
          <HeaderDropdown showMore={showMore} {...headerProps} />
          <BodyDropdown />
        </>
      </BigScreen>
      <SmallScreen>
        <>
          <HeaderDropdown showMore={false} {...headerProps} />
          <BodyDropdown isMobile />
        </>
      </SmallScreen>
    </>
  )
}