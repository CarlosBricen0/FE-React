import React from 'react'
import classNames from 'classnames'
import { getGlobalStyle } from '../../../helpers'
import { Icon, Link, Text } from '../../atoms'
import {
  Column,
  Row,
  Spacer
} from '../../layout'
import { ChildrenBaseContainerProps } from '../../layout/BaseContainer/BaseContainer'
import style from './index.module.css'

export interface PaginationProps {
  backgroundCurrent?: string;
  currentPage: number;
  isVisableButtonLeft?: boolean;
  isVisableButtonRight?: boolean;
  isVisableButtons?: boolean;
  items: Array<number | string>;
  linkWrapper?: React.FunctionComponent;
  maxWidth?: string;
  path?: string;
  redirect?: boolean;
  urlParams?: string;
  handleNextPage?: () => void
  handleOnClick: (value?: number) => void
  handlePrevPage?: () => void
}

export const Pagination = ({
  backgroundCurrent = getGlobalStyle('--color-background-primary'),
  currentPage = 0,
  isVisableButtonLeft = false,
  isVisableButtonRight = false,
  isVisableButtons = false,
  items,
  linkWrapper,
  maxWidth = 'max-content',
  path,
  redirect = true,
  urlParams = '',
  handleNextPage,
  handleOnClick,
  handlePrevPage
}: PaginationProps): React.ReactElement => {
  const buttonProps: ChildrenBaseContainerProps = {
    alignItems: 'center',
    border: `1px solid ${getGlobalStyle('--color-neutral-gray-dark')}`,
    borderRadius: '50%',
    clickable: 'pointer',
    justifyContent: 'center',
    margin: '0 2px 0 2px',
    maxWidth: 'max-content',
    minHeight: '32px',
    minWidth: '32px'
  }

  const getUrl = (item) => {
    if (urlParams) {
      return `${path}?${urlParams}&page=${item}`
    }
    return `${path}?page=${item}`
  }

  const borderWhite = `1px solid ${getGlobalStyle('--color-base-white')}`

  const ItemPagination = ({ item }: { item: number }) => {
    const itemCurrentPage = item === currentPage
    return (
      <Link
        href={getUrl(item)}
        onClick={() => {
          handleOnClick(item)
        }}
        preventDefault={!redirect}
        underline='none'
        wrapper={linkWrapper}
      >
        <Column
          {...buttonProps}
          backgroundColor={itemCurrentPage ? backgroundCurrent : 'tranparent'}
          border={borderWhite}
          customClassName={classNames(
            style['no-select'],
            style['item--base'],
            { [style['animation--select']]: itemCurrentPage }
          )}
        >
          <Text
            clickable='pointer'
            color={itemCurrentPage ? 'white' : 'black'}
            fontSize='lg'
            fontWeight={itemCurrentPage ? 'bold' : 'semibold'}
          >
            {item}
          </Text>
        </Column>
      </Link>
    )
  }

  const ItemDotted = () => {
    return (
      <Column
        {...buttonProps}
        border={borderWhite}
        customClassName={style['no-select']}
      >
        ...
      </Column>
    )
  }

  return (
    <Column
      alignItems='center'
      justifyContent='center'
      maxWidth={maxWidth}
    >
      <Row justifyContent='between'>
        {isVisableButtons && isVisableButtonLeft
          ? (
            <Link
              href={getUrl(currentPage - 1)}
              onClick={handlePrevPage}
              preventDefault={!redirect}
              underline='none'
              wrapper={linkWrapper}
            >
              <Column {...buttonProps}>
                <Icon
                  clickable='pointer'
                  color={getGlobalStyle('--color-icons-gray')}
                  name='ArrowBackNavigate'
                />
              </Column>
            </Link>
          )
          : (
            <Column maxWidth='max-content'>
              <Spacer.Vertical size={32} />
            </Column>
          )
        }
        <Column>
          <Row
            justifyContent='center'
            padding='0 12px'
          >
            {items?.map(item => {
              if (typeof item !== 'number') return <ItemDotted key={item} />
              return <ItemPagination item={item} key={item} />
            })}
          </Row>
        </Column>
        {
          isVisableButtons && isVisableButtonRight
            ? (
              <Link
                href={getUrl(currentPage + 1)}
                onClick={handleNextPage}
                preventDefault={!redirect}
                underline='none'
                wrapper={linkWrapper}
              >
                <Column {...buttonProps} >
                  <Icon
                    clickable='pointer'
                    color={getGlobalStyle('--color-icons-gray')}
                    name='ArrowRightNavigate'
                  />
                </Column>
              </Link>
            )
            : (
              <Column maxWidth='max-content'>
                <Spacer.Vertical size={32} />
              </Column>
            )
        }
      </Row >
    </Column >
  )
}
