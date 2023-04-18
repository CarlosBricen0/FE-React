import { Row, Column, Spacer} from '../../../../layout'
import { Icon, Text } from '../../../../atoms'
import { BigScreen, SmallScreen } from '../../../../../helpers/mediaQueries'
import { getGlobalStyle } from '../../../../../helpers'

interface SuggestionRowProps {
  suggestion?: string;
  onClickSuggestion?: () => void;
}

export const SuggestionRow = ({
  suggestion = 'suggestion',
  onClickSuggestion
}: SuggestionRowProps): React.ReactElement<SuggestionRowProps> => {
  return (
    <>
      <BigScreen>
        <Column onClick={onClickSuggestion}>
          <Spacer.Horizontal size={12} />
          <Row
            alignItems='center'
            clickable='pointer'
            justifyContent='between'
          >
            <Text
              clickable='pointer'
              fontSize='sm'
              underline='hover'
            >
              {suggestion}
            </Text>
            <Icon
              clickable='pointer'
              color='black'
              name='ArrowRight'
              sizes='xs'
            />
          </Row>
        </Column>
      </BigScreen>

      <SmallScreen>
        <Column onClick={onClickSuggestion}>
          <Spacer.Horizontal size={24} />
          <Row
            alignItems='center'
            clickable='pointer'
            justifyContent='between'
          >
            <Text
              clickable='pointer'
              fontSize='md'
              underline='hover'
            >
              {suggestion}
            </Text>
            <Icon
              clickable='pointer'
              color={getGlobalStyle('--color-icons-gray')}
              customSize={16}
              name='ArrowRight'
            />
          </Row>
        </Column>
      </SmallScreen>
    </>
  )
}