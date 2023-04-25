import React, { createElement } from 'react'
import classNames from 'classnames'

import styles from './Link.module.css'

export type FontWeight = 'regular' | 'semibold' | 'medium' | 'bold' | 'normal'
export type FontSizeLink = 'base' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'

interface LinkWrapperProps {
  href: string;
  passHref?: boolean;
  prefetch?: boolean;
}

interface LinkProps extends React.HTMLProps<HTMLAnchorElement> {
  children?: React.ReactNode;
  clickable?: boolean;
  color?: string;
  customClassName?: string;
  customWidth?: string;
  fontSize?: FontSizeLink;
  fontWeight?: FontWeight;
  href: string;
  id?: string;
  label?: string;
  linkRef?: React.Ref<HTMLAnchorElement>;
  newTarget?: boolean;
  preventDefault?: boolean;
  wrapper?: React.FunctionComponent;
  underline?: 'none' | 'hover' | 'always';
  onClick?: () => void;
}

export const Link = ({
  children,
  clickable = true,
  color,
  customClassName,
  customWidth = 'initial',
  fontSize = 'base',
  fontWeight = 'regular',
  href = '#',
  id,
  label = 'Unimarc',
  linkRef,
  newTarget = false,
  preventDefault = true,
  underline = 'always',
  onClick,
  wrapper,
  ...props
}: LinkProps): React.ReactElement => {
  const currentWidth = /max-/.test(customWidth) ? 'max-content' : `${customWidth}%`
  const isInternalPath = href?.startsWith('/')
  const handleOnClick = (e?: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (!onClick) return
    if (preventDefault && !wrapper) {
      e.preventDefault()
    }
    onClick()
  }

  const linkDefault = ({ path }: { path?: string } = {}) => {
    const hasHref = path ? { href: path } : {}

    return createElement(
      'a',
      {
        className: classNames(
          styles.link,
          customClassName,
          styles[`link--${underline}`],
          styles[`link--${fontWeight}`],
          styles[`link--${fontSize}`],
          {
            [styles[`link--clickable--${clickable}`]]: !clickable
          }
        ),
        ...hasHref,
        id,
        onClick: handleOnClick,
        ref: linkRef,
        rel: 'noreferrer',
        role: 'link',
        style: {
          color,
          width: currentWidth
        },
        target: newTarget ? '_blank' : '',
        ...props
      },
      children ? children : label
    )
  }

  if (wrapper && isInternalPath) {
    return createElement<LinkWrapperProps>(
      wrapper,
      {
        href,
        passHref: true,
        prefetch: false
      },
      linkDefault()
    )
  }

  return linkDefault({ path: href })
}