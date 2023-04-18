import { getGlobalStyle } from '../../../helpers'
import { Icon, Text } from '..'
import { Icons } from '../../../assets/SvgComponents/SvgIcons'
import { OnClickProps } from '../../molecules/FiltersPills/FiltersPills'
import styles from './Pill.module.css'

export interface Item{
  value: string;
  numberResult?: number;
  type: string;
}
export interface PillProps{
  item: Item;
  iconName?: keyof (typeof Icons);
  onClick: ({ type, itemName }: OnClickProps ) => void;
}

export const Pill = ({
  iconName = 'Close',
  item,
  onClick
}: PillProps) => {

  const handleClick = () => {
    onClick({type: item?.type, itemName: item?.value})
  }

  return (
    <div className={styles.pill}>
      <Text
        color='gray'
        fontSize='md'
        fontWeight='regular'
        type='span'
      >
        {item?.value}
        {Boolean(item?.numberResult) && ` (${item?.numberResult})`}
      </Text>
      <Icon
        clickable='pointer'
        color={getGlobalStyle('--color-icons-gray')}
        name={iconName}
        onClick={handleClick}
      />
    </div>
  )
}