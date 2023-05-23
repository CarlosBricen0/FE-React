import { getGlobalStyle } from '../../../../helpers'
import { Icon } from '../../../atoms'
import {
  Column,
  Container,
  Row,
  Spacer
} from '../../../layout'
import styles from './LikesButton.module.css'

export const LikesButtons = ({ isCart = false }: { isCart?: boolean }): React.ReactElement => {

  const zIndexLIkedButtons = isCart ? getGlobalStyle('--z-index-1') : ''

  return (
    <Container
      absoluteDefault='topRight'
      justifyContent='end'
      padding='12px'
      position='absolute'
      zIndex={zIndexLIkedButtons}
    >
      <Column maxWidth='40px'>
        <Row
          alignItems='center'
          backgroundColor={getGlobalStyle('--color-base-white')}
          borderRadius='50%'
          customClassName={styles.likeListButtons}
          justifyContent='center'
          maxWidth='30px'
          minHeight='30px'
        >
          <Icon
            clickable='pointer'
            color={getGlobalStyle('--color-neutral-gray-dark')}
            name='List'
            sizes='xs'
          />
        </Row>
        {isCart && <Spacer.Horizontal size={8} />}
        <Row
          alignItems='center'
          backgroundColor={getGlobalStyle('--color-base-white')}
          borderRadius='50%'
          customClassName={styles.likeListButtons}
          justifyContent='center'
          maxWidth='30px'
          minHeight='30px'
        >
          <Icon
            clickable='pointer'
            color={getGlobalStyle('--color-neutral-gray-dark')}
            name='Heart'
            sizes='xs'
          />
        </Row>
      </Column>
    </Container>
  )

}
