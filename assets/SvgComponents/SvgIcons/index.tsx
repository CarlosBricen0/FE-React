import { MouseEventHandler, CSSProperties } from 'react'

export * as Icons from './MapIndex'

export interface SvgComponentProps {
  color: string;
  id?: string;
  role?: string;
  site?: 'unimarc' | 'alvi';
  sizemap: number;
  strokeWidth?: string;
  style?: CSSProperties;
  viewBox?: string;
  onClick?: () => void;
  onMouseOver?: MouseEventHandler;
}
