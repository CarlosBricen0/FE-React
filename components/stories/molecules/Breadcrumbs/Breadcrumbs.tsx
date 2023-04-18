import React from 'react'
import { Row, Container } from '../../layout'
import { Link, Text } from '../../atoms'
import { choices } from '../../../tokens'

import styles from './Breadcrumbs.module.css'
import { BigScreen } from '../../../helpers'

interface BreadType {
  label: string;
  oneClick?: (props?: string) => void;
  url?: string;
}

interface LinkProps {
  color: typeof Text.arguments.color;
  fontWeight: typeof Text.arguments.fontWeight;
}

interface SizeProp {
  size: typeof Text.arguments.fontSize;
}

export interface BreadcrumbsProps {
  colorAlvi?: boolean;
  links: Array<BreadType>;
  linkWrapper?: React.FunctionComponent;
  afterClick?: (props?: string) => void;
}

export const Breadcrumbs = ({
  links,
  afterClick,
  colorAlvi,
  linkWrapper
}: BreadcrumbsProps): React.ReactElement<BreadcrumbsProps> => {

  const { color: { brand }, colorAlvi : { brandAlvi } } = choices

  const colorLastChild = colorAlvi ? brandAlvi.midnightBlue : brand.tabasco
  const basePropsAlvi = colorAlvi ? { color: 'blue', fontWeight: 'semibold' } : { color: 'tabasco', fontWeight: 'semibold' } 

  return (
    <BigScreen>
      <Container alignItems='center' isWrap>
        {links?.map((link, index) => {
          const isLastChild = (links?.length - 1) === index
          const colorLink = isLastChild ? colorLastChild : brand.doveGray
          const baseProps: LinkProps = isLastChild ? basePropsAlvi : { color: 'gray', fontWeight: 'regular' }
          const LinkFontsize = ({ size }: SizeProp) => {
            return link?.oneClick ?
              (
                <Link
                  {...baseProps}
                  color={colorLink}
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
                <Text {...baseProps} fontSize={size}>
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