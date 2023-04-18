import {
  useEffect,
  useRef,
  useState
} from 'react'
import {
  Icon,
  Text,
  Pill
} from '../../atoms'
import {
  Column,
  Row,
  Spacer
} from '../../layout'

export interface OnClickProps{
  itemName: string;
  type: string;
}
export interface FilterProps{
    numberResult?: number;
    type: string;
    value: string;
}
export interface FiltersPillsProps{
    enterFilter: Array<FilterProps>;
    textInfo?: string;
    onClickItemRemove: ({ type, itemName }: OnClickProps ) => void;
    onRemoveAll: () => void;
}

export const FiltersPills =({
  enterFilter,
  textInfo = 'Filtros aplicados:',
  onClickItemRemove,
  onRemoveAll
}:FiltersPillsProps) =>{
  const containerRef = useRef(null)
  const [haveScroll, setHaveScroll] = useState(false)
  const [isPrev, setIsPrev] = useState(false)
  const [isNext, setIsNext] = useState(true)

  const handleChangePills = (type: string) => {
    let left = 0

    const frame = () => {
      left += 55
      const valueScrollLeft = containerRef['current']['scrollLeft']
      const newValue = type == 'next' ? valueScrollLeft + left : valueScrollLeft - left
      containerRef['current']['scrollLeft'] = newValue

      if (left >= 500) {
        clearInterval(id)
        handleValidateShows()
      }
    }

    const id = setInterval(frame, 10)
  }

  const handleValidateShows = () => {
    const havePrev = containerRef.current?.scrollLeft != 0
    setIsPrev(havePrev)

    const haveNext = Math.floor(
      containerRef?.current?.scrollWidth - containerRef?.current?.scrollLeft
    ) > containerRef?.current?.offsetWidth + 35
    setIsNext(haveNext)
  }

  const handleClickPill = ({type, itemName}) => {
    onClickItemRemove({type, itemName})
  }

  useEffect(() => {
    const allowScroll = containerRef?.current?.scrollWidth > containerRef?.current?.clientWidth
    setHaveScroll(allowScroll)
    handleValidateShows()
  }, [enterFilter])

  return (
    <Row alignItems='center' position='relative'>
      {haveScroll && isPrev &&
        <Column
          margin='0 0 3px'
          maxWidth='32px'
          onClick={() => {
            return handleChangePills('before')
          }}
        >
          <Icon
            clickable='pointer'
            color='#666666'
            customSize={20}
            name='ArrowBackNavigate'
          />
        </Column>
      }
      <Row
        alignItems='center'
        overflow='hidden'
        padding='0 35px 0 0'
        ref={containerRef}
      >
        <Row
          margin='0px 12px 0px 0px'
          marginWidth={12}
          maxWidth='max-content'
          minWidth='max-content'
        >
          <Text fontSize='lg' fontWeight='semibold'>{textInfo}</Text>
        </Row>
        {enterFilter?.map(item => {
          return (
            <Row
              alignItems='center'
              key={item?.value}
              maxWidth='max-content'
            >
              <Pill item={item} onClick={handleClickPill} />
              <Spacer.Vertical size={8} />
            </Row>
          )
        })}
        <Row
          clickable='pointer'
          maxWidth='max-content'
          minWidth='max-content'
          onClick={onRemoveAll}
        >
          <Text
            clickable='pointer'
            color='primary'
            fontWeight='regular'
          >
            Borrar todos
          </Text>
        </Row>
      </Row>
      {haveScroll && isNext &&
        <Column
          absoluteDefault='topRight'
          alignItems='end'
          background='linear-gradient(
                  90deg, rgba(255, 255, 255, 0)
                  -66.67%, rgba(255, 255, 255, 0.17)
                  -9.27%, rgb(249, 249, 249) 46.81%)'
          justifyContent='center'
          maxWidth='60px'
          minHeight='37px'
          onClick={() => {
            return handleChangePills('next')
          }}
          position='absolute'
        >
          <Icon
            clickable='pointer'
            color='#666666'
            customSize={20}
            name='ArrowRightNavigate'
          />
        </Column>
      }
    </Row>
  )
}