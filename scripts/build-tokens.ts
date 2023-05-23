import fs from 'fs'
import { decisions } from '../tokens'
import { toKebabCase } from '../utils'

const cleanLines = (string = '') => {return string.trim().replace(/^\n\n/gm, '\n')}

function transformTokens(parentKey, object) {
  const objectKeys = Object.keys(object)

  return objectKeys.reduce((transformedTokens, objectKey) => {
    const value = object[objectKey]
    const customProperty = parentKey
      ? toKebabCase(`${parentKey}-${objectKey}`)
      : toKebabCase(`${objectKey}`)

    if (Array.isArray(value)) {
      return `${transformedTokens}\n  --${customProperty}: ${value.join(', ')};`
    } else if (typeof value === 'object') {
      return `${transformedTokens}\n${transformTokens(customProperty, value)}`
    }

    const label = `--${parentKey}-${toKebabCase(objectKey)}`
    return `${transformedTokens}\n  ${label}: ${value};`
  }, '')
}

function buildTokens() {
  const transformedDecisions = transformTokens(null, decisions)
  const customProperties = `${transformedDecisions}`

  const data = `:root {\n  ${cleanLines(customProperties)}\n}\n`

  fs.writeFile('./assets/styles/tokens.css', data, 'utf8', (error) => {
    if (error) throw error
  })
}

buildTokens()
