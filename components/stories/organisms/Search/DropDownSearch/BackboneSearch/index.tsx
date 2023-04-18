import React from 'react'

import { Backbone, Divider } from '../../../../atoms'
import { Column, Row, Spacer } from '../../../../layout'
import { BigScreen, SmallScreen } from '../../../../../helpers/mediaQueries'
import { getGlobalStyle } from '../../../../../helpers'

export const BackboneSearch = (): React.ReactElement => {
  return (
    <Column>
      <BigScreen>
        <Column>
          <Row customWidth='30'>
            <Backbone borderRadius={getGlobalStyle('--border-radius-sm')} height={12} />
          </Row>
          <Spacer.Horizontal size={8} />
          {[1, 2, 3, 4, 5].map(value => {
            return (
              <React.Fragment key={value}>
                <Spacer.Horizontal size={12} />
                <Row customWidth='70'>
                  <Backbone borderRadius={getGlobalStyle('--border-radius-sm')} height={10} />
                </Row>
              </React.Fragment>
            )
          })}
        </Column >
      </BigScreen>

      <SmallScreen>
        <Column>
          <Spacer.Horizontal size={12} />
          <Row customWidth='30'>
            <Backbone borderRadius={getGlobalStyle('--border-radius-sm')} height={12} />
          </Row>
          <Spacer.Horizontal size={8} />
          {[1, 2, 3, 4, 5].map(value => {
            return (
              <React.Fragment key={value}>
                <Spacer.Horizontal size={16} />
                <Row customWidth='70'>
                  <Backbone borderRadius={getGlobalStyle('--border-radius-sm')} height={12} />
                </Row>
              </React.Fragment>
            )
          })}
        </Column >
      </SmallScreen>

      <Divider verticalMargin={15} />
      <Spacer.Horizontal size={4} />
      <Row customWidth='30'>
        <Backbone borderRadius={getGlobalStyle('--border-radius-sm')} height={12} />
      </Row>
      <Spacer.Horizontal size={8} />
      <Column >
        {[1, 2, 3, 4, 5].map(value => {
          return (
            <React.Fragment key={value}>
              <Spacer.Horizontal size={8} />
              <Row>
                <Row customWidth='18'>
                  <Backbone height={60} />
                </Row>
                <Spacer.Vertical size={12} />
                <Column>
                  <Row customWidth='60'>
                    <Backbone borderRadius={getGlobalStyle('--border-radius-sm')} height={12} />
                  </Row>
                  <Spacer.Horizontal size={16} />
                  <Row justifyContent='between'>
                    <Row customWidth='30'>
                      <Backbone borderRadius={getGlobalStyle('--border-radius-sm')} height={20} />
                    </Row>
                    <Row customWidth='15'>
                      <Backbone borderRadius={getGlobalStyle('--border-radius-sm')} height={16} />
                    </Row>
                  </Row>
                  <Spacer.Horizontal size={24} />
                </Column>
              </Row>
            </React.Fragment>
          )
        })}
      </Column>
    </Column >
  )
}