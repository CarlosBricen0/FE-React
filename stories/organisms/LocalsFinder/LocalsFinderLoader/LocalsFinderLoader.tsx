import React, { ReactNode } from 'react'
import {
  BigScreen,
  getGlobalStyle,
  SmallScreen
} from '../../../../helpers'
import {
  Backbone,
  Divider,
  Text
} from '../../../atoms'
import {
  Column,
  Container,
  Row
} from '../../../layout'

export interface LocalsFinderLoaderProps {
  children?: ReactNode;
}

export const LocalsFinderLoader = ({ children }: LocalsFinderLoaderProps) => {
  return (
    <>
      <BigScreen>
        <Row
          gap={18}
          margin='64px 0 16px'
          maxWidth='1315px'
        >
          <Column gap={16} maxWidth='398px'>
            <Column
              backgroundColor={getGlobalStyle('--color-base-white')}
              borderRadius={getGlobalStyle('--border-radius-2sm')}
              boxShadow={getGlobalStyle('--box-shadow-2xs')}
              gap={8}
              padding='16px'
            >
              <Container width={116}>
                <Backbone
                  borderRadius={getGlobalStyle('--border-radius-2xs')}
                  height={27}
                />
              </Container>

              <Divider color={getGlobalStyle('--color-neutral-gray')} verticalMargin={0} />

              <Container>
                <Backbone
                  borderRadius={getGlobalStyle('--border-radius-2xs')}
                  height={65}
                />
              </Container>

              <Container>
                <Backbone
                  borderRadius={getGlobalStyle('--border-radius-2xs')}
                  height={65}
                />
              </Container>

              <Container width={128}>
                <Backbone
                  borderRadius={getGlobalStyle('--border-radius-2xs')}
                  height={27}
                />
              </Container>
            </Column>

            <Container
              backgroundColor={getGlobalStyle('--color-base-white')}
              borderRadius={getGlobalStyle('--border-radius-2sm')}
              boxShadow={getGlobalStyle('--box-shadow-2xs')}
              padding='16px'
            >
              <Column gap={8}>
                <Container width={160}>
                  <Backbone
                    borderRadius={getGlobalStyle('--border-radius-2xs')}
                    height={27}
                  />
                </Container>

                <Divider color={getGlobalStyle('--color-neutral-gray')} verticalMargin={0} />

                {
                  Array.from(Array(3).keys()).map((index) => {
                    return (
                      <React.Fragment key={index}>
                        <Container width={150}>
                          <Backbone
                            borderRadius={getGlobalStyle('--border-radius-2xs')}
                            height={20}
                          />
                        </Container>

                        <Container width={190}>
                          <Backbone
                            borderRadius={getGlobalStyle('--border-radius-2xs')}
                            height={20}
                          />
                        </Container>

                        <Row justifyContent='between'>
                          <Container width={140}>
                            <Backbone
                              borderRadius={getGlobalStyle('--border-radius-2xs')}
                              height={20}
                            />
                          </Container>

                          <Container width={40}>
                            <Backbone
                              borderRadius={getGlobalStyle('--border-radius-2xs')}
                              height={20}
                            />
                          </Container>
                        </Row>

                        <Divider color={getGlobalStyle('--color-neutral-gray')} verticalMargin={0} />
                      </React.Fragment>
                    )
                  })
                }
              </Column>
            </Container>
          </Column>

          <Container
            backgroundColor={getGlobalStyle('--color-base-white')}
            borderRadius={getGlobalStyle('--border-radius-2sm')}
            boxShadow={getGlobalStyle('--box-shadow-2xs')}
            overflow='hidden'
          >
            {children}
          </Container>
        </Row>
      </BigScreen>

      <SmallScreen>
        <Column padding='22px 0 0'>
          <Row
            backgroundColor={getGlobalStyle('--color-base-white')}
            gap={8}
            padding='16px'
          >
            <Text
              fontSize='lg'
              fontWeight='semibold'
              lineHeight='22px'
            >
              Locales y horarios
            </Text>
          </Row>

          <Column gap={16} padding='16px'>
            <Container
              backgroundColor={getGlobalStyle('--color-base-white')}
              borderRadius={getGlobalStyle('--border-radius-2sm')}
              boxShadow={getGlobalStyle('--box-shadow-2xs')}
            >
              <Backbone borderRadius={getGlobalStyle('--border-radius-2xs')} height={200} />
            </Container>

            <Column gap={8}>
              {
                Array.from(Array(10).keys()).map((_e, index) => {
                  return (
                    <Container key={index}>
                      <Backbone borderRadius={getGlobalStyle('--border-radius-2xs')} height={93} />
                    </Container>
                  )
                })
              }

              <Container padding='8px 24px'>
                <Backbone borderRadius={getGlobalStyle('--border-radius-xl')} height={35} />
              </Container>
            </Column>
          </Column>
        </Column>
      </SmallScreen>
    </>
  )
}
