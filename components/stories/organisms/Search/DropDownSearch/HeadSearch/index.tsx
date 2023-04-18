import { Text } from '../../../../atoms'
import { SuggestionRow } from '..'
import { BigScreen, SmallScreen } from '../../../../../helpers/mediaQueries'

export interface HeadSearchProps {
  site?: string;
  suggestionsTitle?: string;
  suggestionsData?: { text: string, onClick: () => void }[]
}

export const HeadSearch = ({
  site = 'unimarc',
  suggestionsTitle = 'Más buscados',
  suggestionsData
}: HeadSearchProps): React.ReactElement<HeadSearchProps> => {
  const customFontSize = site == 'unimarc' ? 'sm' : 'md'

  return (
    <>
      <BigScreen>
        <Text fontSize={customFontSize} fontWeight='semibold'>
          {suggestionsTitle}
        </Text>
      </BigScreen>

      <SmallScreen>
        <Text fontSize='md' fontWeight='semibold'>
          {suggestionsTitle}
        </Text>
      </SmallScreen>

      {suggestionsData?.map(({ text, onClick }) => {
        return (
          <SuggestionRow
            key={text}
            onClickSuggestion={onClick}
            suggestion={text}
          />
        )
      })}
    </>
  )
}