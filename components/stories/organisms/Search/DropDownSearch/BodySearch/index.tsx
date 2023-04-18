import { ShelfSearch, ShelfSearchProps } from '../ShelfSearch/ShelfSearch'
import {
  Column,
  Row,
  Spacer
} from '../../../../layout'
import { Divider, Text } from '../../../../atoms'
import {
  BigScreen,
  SmallScreen,
  getGlobalStyle
} from '../../../../../helpers'

export interface BodySearchProps {
  data: ShelfSearchProps[];
  isLoggedIn?: boolean;
  isMobile?: boolean;
  linkWrapper?: React.FunctionComponent;
  quantityButtonProps: ShelfSearchProps['quantityButtonProps'];
  site?: string;
  validationStatus?: string;
  handleOnClickShelfSearch?: ShelfSearchProps['handleOnClickShelfSearch'];
  handleSearchImpressions?: (props?: object) => void;
}

export const BodySearch = ({
  data,
  isLoggedIn,
  isMobile,
  linkWrapper,
  site = 'unimarc',
  validationStatus,
  handleSearchImpressions,
  ...props
}: BodySearchProps): React.ReactElement<BodySearchProps> => {
  if (!data || data?.length == 0) return null
  const customFontSize = site == 'unimarc' ? 'sm' : 'md'

  const productsCollection = []
  const productsPush = ({ ref, product }) => {
    productsCollection.push({ ref, product })
    if (data.length != productsCollection.length) return

    handleSearchImpressions(productsCollection)
  }

  return (
    <>
      <Column>
        <BigScreen>
          <>
            <Spacer.Horizontal size={8} />
            <Divider color={getGlobalStyle('--color-neutral-gray')} verticalMargin={6} />
            <Spacer.Horizontal size={4} />
            <Text fontSize={customFontSize} fontWeight='semibold'>
              Productos
            </Text>
            <Spacer.Horizontal size={8} />
          </>
        </BigScreen>

        <SmallScreen>
          <>
            <Row>
              <Spacer.Horizontal size={8} />
            </Row>
            <Divider color={getGlobalStyle('--color-neutral-gray')} verticalMargin={12} />
            <Text fontSize='md' fontWeight='semibold'>
              Productos
            </Text>
            <Row>
              <Spacer.Horizontal size={12} />
            </Row>
          </>
        </SmallScreen>
        {data?.map(item => {
          return (
            <ShelfSearch
              isLoggedIn={isLoggedIn}
              isMobile={isMobile}
              key={item.itemId}
              linkWrapper={linkWrapper}
              productRef={productsPush}
              site={site}
              validationStatus={validationStatus}
              {...{
                ...item,
                ...props,
                quantityButtonProps: {
                  ...props?.quantityButtonProps,
                  ...item?.quantityButtonProps
                }
              }}
            />
          )
        })}
      </Column>
    </>
  )
}