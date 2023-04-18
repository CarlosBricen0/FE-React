import { Icons } from '../../../assets/SvgComponents/SvgIcons'
import { Icon } from '../../atoms'
import { Spacer } from '../../layout'
import Styles from './Chip.module.css'

export interface ChipProps extends React.HTMLProps<HTMLDivElement> {
  backgroundColor: string;
  borderRadius?: string;
  color: string;
  fontSize?: number;
  label: string;
  icon?: keyof (typeof Icons);
  padding?: string;
  positionIcon?: 'left' | 'right';
  provider?: string;
}

export const Chip = ({
  label,
  icon,
  backgroundColor,
  borderRadius,
  color,
  fontSize,
  padding = '3px 5px',
  positionIcon,
  provider = '',
  ...props
}: ChipProps): React.ReactElement<ChipProps> => {
  const styles = {
    backgroundColor,
    borderRadius,
    color,
    fontSize,
    padding
  }

  const ourProductLabel = () => {
    if (provider === '') {
      return label
    }

    return (
      <div className={Styles.ourLabel}>
        {provider}
      </div>
    )
  }

  return (
    <div
      className={Styles.chip}
      style={styles}
      {...props}
    >
      {positionIcon == 'left' && (
        <>
          <Icon color={color} name={icon} />
          <Spacer.Vertical size={4} />
        </>
      )}
      {ourProductLabel()}
      {positionIcon == 'right' && (
        <>
          <Spacer.Vertical size={4} />
          <Icon color={color} name={icon} />
        </>
      )}
    </div >
  )
}