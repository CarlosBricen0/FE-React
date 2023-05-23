import React from 'react'
import classNames from 'classnames'
import styles from './picture.module.css'

export interface NextImageProps{
    alt?: string;
    border?: string;
    borderRadius?: string;
    fill?: string;
    grayscale?: boolean;
    height?: string;
    layout?: string;
    minHeight?: string;
    objectFit?: string;
    otherProps?: object;
    priority?:boolean;
    ref?: React.LegacyRef<HTMLInputElement>;
    src?: string;
    style?: object;
    title?:string;
    unoptimized?: boolean;
    val?: void;
    width?: string;
    loader?: ({src}) => void;
}

export interface ImageNextJsProps{
  alt?: string;
  customClassName?: string;
  customProps?: NextImageProps;
  nextImage: React.FunctionComponent;
  type?:string;
  handleImgRef?: (ref?: HTMLElement) => void;
}

export const ImageNextJs = React.forwardRef(function ImageNextJs({
  alt,
  customClassName,
  customProps,
  handleImgRef,
  nextImage,
  type
}: ImageNextJsProps, ref?: React.LegacyRef<HTMLInputElement>){
  let src = customProps?.['src']
  if(customProps?.['src'].startsWith('//')){
    src = `https:${customProps?.['src']}`
  }

  return <div
    className={
      classNames(styles.picture, customClassName, {
        [styles[`picture__${type}`]]: type,
        [styles['picture--image--grayscale']]: customProps?.grayscale
      })
    }
    ref={handleImgRef}
    style={{
      border: customProps?.border,
      borderRadius: customProps?.borderRadius,
      maxWidth: customProps?.width,
      minHeight:customProps?.minHeight,
      height: customProps?.height,
      width: customProps?.width,
      position:'relative'
    }}
  >
    {React.createElement<NextImageProps>(
      nextImage,
      {
        alt: alt || customProps?.title,
        unoptimized: true,
        priority:customProps?.priority,
        fill:'fill',
        layout:'fill',
        ref: ref,
        src,
        ...{ ...customProps?.otherProps, val: customProps?.val }
      }
    )}
  </div>
})
