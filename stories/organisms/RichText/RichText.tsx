import React from 'react'
import { v4 as uuid } from 'uuid'
import { getGlobalStyle } from '../../../helpers'
import {
  Column,
  Row,
  Spacer
} from '../../layout'
import {
  Divider,
  Text,
  Title
} from '../../atoms'
import styles from './richText.module.css'

export interface LinkProps {
  underline?: boolean;
  color?: string;
}
export interface SizeHeadingType {
  desktop?: string;
  mobile?: string;
}
export interface HeadingStyleProps {
  size: SizeHeadingType;
  heading: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  bold: string;
  center: boolean;
}

export interface RichTextProps {
  richTextData: Array<object>;
  headingStyles?: Array<HeadingStyleProps>;
  link?: LinkProps;
  isMobile?: boolean;
}

interface TextRenderProps {
  richTextObject: object;
}

const defaultValues = {
  size: {
    desktop: getGlobalStyle('--font-size-md'),
    mobile: getGlobalStyle('--font-size-sm')
  },
  bold: 'bold',
  center: false
}

const headingConstantProps = {
  'heading-1': {
    size: {
      desktop: getGlobalStyle('--font-size-3xl'),
      mobile: getGlobalStyle('--font-size-xl')
    },
    heading: 'h1',
    bold: 'semibold',
    center: true
  },
  'heading-2': {
    ...defaultValues,
    size: {
      desktop: getGlobalStyle('--font-size-2xl'),
      mobile: getGlobalStyle('--font-size-lg')
    },
    heading: 'h2'
  },
  'heading-3': {
    ...defaultValues,
    size: {
      desktop: getGlobalStyle('--font-size-xl'),
      mobile: getGlobalStyle('--font-size-md')
    },
    heading: 'h3'
  },
  'heading-4':  {
    ...defaultValues,
    heading: 'h4'
  },
  'heading-5':  {
    ...defaultValues,
    heading: 'h5'
  },
  'heading-6':  {
    ...defaultValues,
    heading: 'h6'
  }
}

export const RichText = ({
  richTextData,
  headingStyles,
  link,
  isMobile = false
}: RichTextProps): React.ReactElement<RichTextProps> => {

  const headingsStyleValues = Object.keys(headingConstantProps)?.reduce((obj,key) => {
    const findHeadingStyle = headingStyles?.find((headingStyle) => {
      return headingStyle?.heading === headingConstantProps[key]?.heading
    })
    return { ...obj, [key]: findHeadingStyle || headingConstantProps[key]}
  }, {})
  const headingFontSize = isMobile ? 'mobile' : 'desktop'

  const assignListNodes = (contentInfo: Array<object>): object => {
    return contentInfo.map((li) => {
      const objLists: object = {}

      if (li?.['marks']?.length >= 1) {
        objLists['marks'] = li?.['marks']
      }

      if (li?.['data']?.uri) {
        return {
          ...objLists,
          url: li?.['data']?.uri,
          value: li?.['content']?.[0]?.value
        }
      }

      return {
        ...objLists,
        value: li?.['value']
      }
    })
  }

  const assignNodes = (contentNode: Array<object>): object => {
    const objData: object = {}

    if (contentNode?.['content']?.[0]?.['marks']?.length >= 1) {
      objData['marks'] = contentNode?.[0]?.['marks']
    }

    if (contentNode?.['marks']?.length >= 1) {
      objData['marks'] = contentNode?.['marks']
    }

    if (contentNode?.['data']?.uri) {
      objData['url'] = contentNode?.['data']?.uri
    }

    return {
      ...objData,
      value: contentNode?.['content']?.[0]?.value || contentNode?.['value']
    }
  }

  const transformContentDataText = (textTypeData: Array<object>) => {
    return textTypeData?.map?.((data) => {
      const contentInfo = (content) => {
        return content?.['content']?.map?.((contentData) => {

          if (data?.['nodeType'] === 'unordered-list' || data?.['nodeType'] === 'ordered-list') {
            return assignListNodes(contentData?.content[0]?.content)
          }

          return assignNodes(contentData)
        })
      }

      return {
        value: contentInfo(data),
        type: data?.['nodeType']
      }
    })
  }

  const mapRichTextData = Object.keys(richTextData[0]).map?.((key) => { return richTextData[0]?.[key] })
  const richText = transformContentDataText(mapRichTextData)

  const assignMarks = (valueMarks, textValue) => {
    let valueToAssign = textValue

    valueMarks?.map((mark) => {
      if (mark?.type === 'italic') {
        valueToAssign = `<em>${valueToAssign}</em>`
      }
      if (mark?.type === 'bold') {
        valueToAssign = `<strong>${valueToAssign}</strong>`
      }
      if (mark?.type === 'underline') {
        valueToAssign = `<u>${valueToAssign}</u>`
      }
    })

    return valueToAssign
  }

  const assignLink = (url, urlText) => {
    const linkUnderline = link?.underline || 'underline'
    const linkColor = link?.color || 'black'

    return (
      `<a href='${url}' style='text-decoration:${linkUnderline}; color:${linkColor}'>${urlText}</a>`
    )
  }

  const getMarks = (richMarks: object) => {
    return richMarks?.['value']?.map?.((val) => {
      let htmlValue = val?.value

      if (val?.marks) {
        htmlValue = assignMarks(val?.marks, htmlValue)
      }

      if (val?.url) {
        htmlValue = assignLink(val?.url, htmlValue)
      }

      return htmlValue
    })
  }

  const RenderHeadings = ({ richTextObject }: TextRenderProps) => {
    const hdStyle = headingsStyleValues[richTextObject?.['type']]
    const isH1Heading = richTextObject?.['type'] === 'heading-1'

    return (
      <Column
        customWidth='100'
        key={uuid()}
        tagName='article'
      >
        <Spacer.Horizontal size={12} />
        <Row justifyContent={hdStyle?.center ? 'center' : null}>
          <Title
            customFontSize={hdStyle?.size?.[headingFontSize]}
            fontWeight={hdStyle?.bold}
            headingLevel={hdStyle?.heading}
            text={richTextObject?.['value']?.[0]?.value}
          />
        </Row>
        {isH1Heading && <Spacer.Horizontal size={32} />}
      </Column>
    )
  }

  const RenderLists = ({ richTextObject }: TextRenderProps) => {
    const liElements = richTextObject?.['value']?.map?.((liArrElement) => {
      const listText = liArrElement?.map?.((liElement) => {
        let listHtml = liElement?.value

        if (liElement?.marks) {
          listHtml = assignMarks(liElement?.marks, liElement?.value )
        }
        if (liElement?.url) {
          listHtml = assignLink(liElement?.url, listHtml)
        }

        return listHtml
      }).join('')

      return (
        <li
          className={styles.list}
          dangerouslySetInnerHTML={{__html: listText}}
          key={uuid()}
        />
      )
    })

    return (
      <Column key={uuid()}>
        <Spacer.Horizontal size={8} />
        <Row className={styles.ulOl}>
          { richTextObject?.['type'] === 'unordered-list' ? (
            <ul>
              {liElements}
            </ul>
          ) : (
            <ol>
              {liElements}
            </ol>
          )}
        </Row>
        <Spacer.Horizontal size={8} />
      </Column>
    )
  }

  return (
    <>
      {richText?.map?.((richElement) => {
        const { type } = richElement

        if (type?.includes('heading-')) {
          return <RenderHeadings key={uuid()} richTextObject={richElement}/>
        }

        if (type === 'unordered-list' || type === 'ordered-list') {
          return <RenderLists key={uuid()} richTextObject={richElement} />
        }

        if (type === 'paragraph') {
          return (
            <Column key={uuid()}>
              <Text
                color='black'
                fontSize='lg'
                type='p'
              >
                <span dangerouslySetInnerHTML={{ __html: getMarks(richElement).join('') }}/>
              </Text>
            </Column>
          )
        }

        if (type === 'hr') {
          return <Divider key={uuid()}/>
        }

        if (type === 'blockquote') {
          return (
            <div className={styles.blockQuote} key={uuid()}>
              <Text
                color='black'
                fontSize='lg'
                type='p'
              >
                {getMarks(richElement).join('')}
              </Text>
            </div>
          )
        }

        return null
      })}
    </>
  )
}