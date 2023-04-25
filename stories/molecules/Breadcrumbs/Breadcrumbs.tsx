import React from 'react'
import { Row, Container } from '../../layout'
import { Link, Text } from '../../atoms'
import { choices } from '../../../tokens'

import styles from './Breadcrumbs.module.css'
import { BigScreen } from '../../../helpers'

interface BreadType {
  label: string;
  url: string;
  oneClick?: (props?: string) => void;
}

interface SizeProp {
  size: typeof Text.arguments.fontSize;
}

export interface BreadcrumbsProps {
  color?: string;
  links: Array<BreadType>;
  linkWrapper?: React.FunctionComponent;
  afterClick?: (props?: string) => void;
}

export const Breadcrumbs = ({
  color,
  links,
  linkWrapper,
  afterClick,
}: BreadcrumbsProps): React.ReactElement<BreadcrumbsProps> => {

  return (
    <BigScreen>
      <Container alignItems='center' isWrap>
        {links?.map((link, index) => {
          const isLastChild = (links?.length - 1) === index
          const LinkFontsize = ({ size }: SizeProp) => {
            return link?.oneClick ?
              (
                <Link
                  color={color}
                  customClassName='bread-link'
                  fontSize={size}
                  href={link?.url}
                  onClick={() => {
                    afterClick?.(link?.url)
                  }}
                  preventDefault={false}
                  underline='none'
                  wrapper={linkWrapper}
                >
                  {link?.label}
                </Link>
              ) :
              (
                <Text fontSize={size}>
                  {link?.label}
                </Text>
              )
          }

          return (
            <Row
              customClassName={styles.breadcrumbsItems}
              key={index}
              maxWidth='max-content'
            >
              <LinkFontsize size='md' />
            </Row>
          )
        })}
      </Container>
    </BigScreen>
  )
}