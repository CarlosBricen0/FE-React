import {
  BigScreen,
  SmallScreen,
  getGlobalStyle
} from '../../../../helpers'
import {
  Column,
  Container,
  Row,
  Spacer
} from '../../../layout'
import { HeadSearch, HeadSearchProps } from './HeadSearch'
import { BodySearch, BodySearchProps } from './BodySearch'
import { BackboneSearch } from './BackboneSearch'
import { InputIcon, InputIconProps } from '../../../molecules'
import { Icon } from '../../../atoms'
import { Icons } from '../../../../assets/SvgComponents/SvgIcons'
import styles from './DropDownSearch.module.css'

export interface DropDownSearchProps {
  backgroundGradientButton?: string;
  bodySearch?: BodySearchProps;
  headSearch?: HeadSearchProps;
  iconArrowSearch?: keyof (typeof Icons);
  iconArrowSize?: number;
  inputSearchProps?: InputIconProps;
  isLoadingSearch?: boolean;
  isLoggedIn?: boolean;
  isMobile?: boolean;
  linkWrapper?: React.FunctionComponent;
  site?: 'unimarc' | 'alvi';
  validationStatus?: string;
  onCloseArrowBack?: () => void;
}

export const DropDownSearch = ({
  bodySearch,
  headSearch,
  iconArrowSearch = 'ArrowBack',
  iconArrowSize = 24,
  inputSearchProps,
  isLoadingSearch = false,
  isLoggedIn,
  isMobile,
  linkWrapper,
  site = 'unimarc',
  validationStatus,
  onCloseArrowBack
}: DropDownSearchProps): React.ReactElement<DropDownSearchProps> => {

  return (
    <>
      <BigScreen>
        <>
          <Container position='relative'>
            <Column
              backgroundColor={getGlobalStyle('--color-base-white')}
              borderRadius='0 0 8px 8px'
              customClassName={styles.scrollBar}
              maxHeight='32rem'
              overflow='scroll'
              padding='8px 14px'
              position='absolute'
            >
              {isLoadingSearch ?
                <BackboneSearch />
                :
                <>
                  <HeadSearch {...headSearch} site={site} />
                  <BodySearch
                    {...bodySearch}
                    isLoggedIn={isLoggedIn}
                    linkWrapper={linkWrapper}
                    site={site}
                    validationStatus={validationStatus}
                  />
                </>
              }
            </Column>
          </Container>
        </>
      </BigScreen>

      <SmallScreen>
        <Container position='fixed'>
          <Column
            backgroundColor={getGlobalStyle('--color-base-white')}
            borderRadius='0 0 8px 8px'
            customHeight='100vh'
            overflow='scroll'
            padding='8px 14px'
            position='absolute'
          >
            <Row>
              <Spacer.Horizontal size={24} />
            </Row>
            <Row alignItems='center'>
              <Icon
                clickable='pointer'
                color={getGlobalStyle('--color-icons-black')}
                customSize={iconArrowSize}
                name={iconArrowSearch}
                onClick={onCloseArrowBack}
              />
              <Spacer.Vertical size={8} />
              <InputIcon {...inputSearchProps} autofocus={true} />
            </Row>
            <Row>
              <Spacer.Horizontal size={16} />
            </Row>
            {isLoadingSearch ?
              <BackboneSearch />
              :
              <>
                <HeadSearch {...headSearch} site={site} />
                <BodySearch
                  {...bodySearch}
                  isLoggedIn={isLoggedIn}
                  isMobile={isMobile}
                  linkWrapper={linkWrapper}
                  site={site}
                  validationStatus={validationStatus}
                />
              </>
            }
          </Column>
        </Container>
      </SmallScreen>
    </>
  )
}