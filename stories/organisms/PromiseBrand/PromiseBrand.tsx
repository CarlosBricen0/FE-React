import React from 'react'
import {
  Divider,
  Icon,
  Link,
  Text
} from '../../atoms'
import {
  Column,
  Row,
  Container,
  Spacer
} from '../../layout'
import { BigScreen, SmallScreen } from '../../../helpers/mediaQueries'
import { Icons } from '../../../assets/SvgComponents/SvgIcons'
import { getGlobalStyle } from '../../../helpers'
import styles from './PromiseBrand.module.css'

export interface PromiseBrandData {
  description?: string;
  icon?: keyof (typeof Icons);
  id?: number;
  label?: string;
  link?: string;
  title?: string;
}

export interface PromiseBrandProps {
  data: PromiseBrandData[];
  background?: string;
  customStyle?: React.CSSProperties;
}

export const PromiseBrand = ({
  data = [],
  background = getGlobalStyle('--color-background-white')
}: PromiseBrandProps): React.ReactElement => {
  return (
    <Container
      backgroundColor={background}
      className={styles['promiseBrandShadow']}
      maxWidth='1166px'
      tagName='section'
    >
      <Row
        alignItems='center'
        isWrap
        justifyContent='around'
      >
        {data && data.map((item, i) => {
          return (
            <React.Fragment key={i}>
              <BigScreen>
                <Container maxWidth='260px' tagName='article'>
                  {(
                    item?.link &&
                    item?.icon &&
                    item?.description &&
                    item?.title
                  ) &&
                    <Link href={item.link} underline='none'>
                      <Row justifyContent='center' role={item.title} >
                        <Column
                          alignItems='center'
                          clickable='pointer'
                          isWrap
                          justifyContent='center'
                        >
                          <Spacer.Horizontal size={32} />
                          <Icon
                            clickable='pointer'
                            color={getGlobalStyle('--color-icons-gray')}
                            name={item.icon}
                            sizes='sm'
                          />
                          <Spacer.Horizontal size={8} />

                          <Text clickable='pointer' fontWeight='semibold'>{item.title}</Text>
                          <Spacer.Horizontal size={8} />
                          <Text
                            clickable='pointer'
                            fontSize='md'
                            textAlign='center'
                          >
                            {item.description}
                          </Text>
                          <Spacer.Horizontal size={32} />
                        </Column>
                      </Row>
                    </Link>
                  }
                </Container>
              </BigScreen>

              <SmallScreen>
                <Container tagName='article'>
                  {(
                    item?.link &&
                    item?.icon &&
                    item?.description &&
                    item?.title
                  ) &&
                    <Link
                      customWidth='100'
                      href={item.link}
                      underline='none'
                    >
                      <Container
                        isWrap
                        maxHeight='110px'
                        padding={'1% 6% 1% 6%'}
                        tagName='section'
                      >
                        {i > 0 && <Divider verticalMargin={0} />}
                        <Row isWrap role={item.title} >
                          <Column
                            alignItems='center'
                            customHeight={'75px'}
                            customWidth='10'
                            justifyContent='center'
                            tagName='article'
                          >
                            <Icon
                              color={getGlobalStyle('--color-icons-gray')}
                              name={item.icon}
                              sizes='sm'
                            />
                          </Column>

                          <Spacer.Vertical size={4} />

                          <Column
                            alignItems='start'
                            customHeight={'85px'}
                            customWidth='80'
                            justifyContent='center'
                            tagName='article'
                          >
                            <Text fontWeight='semibold' textAlign='left'>{item.title}</Text>
                            <Spacer.Horizontal size={4} />
                            <Text fontSize='md' textAlign='left'>{item.description}</Text>
                          </Column>
                        </Row>
                      </Container>

                    </Link>
                  }
                </Container>
              </SmallScreen>

            </React.Fragment>
          )
        })}
      </Row>
    </Container>
  )
}