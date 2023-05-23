import React, {
  CSSProperties,
  useMemo,
  useState
} from 'react'
import classNames from 'classnames'
import styles from './picture.module.css'
import { ImageNextJs, NextImageProps } from './ImageNextJs'
import { Link } from '../Links/Link'

interface PictureProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  anchor?: boolean;
  border?: string;
  borderRadius?: string;
  customClassName?: string;
  draggable?: boolean;
  grayscale?: boolean;
  hasURL?: boolean;
  height: string;
  lineHeight?: string | number;
  linkWrapper?: React.FunctionComponent;
  minHeight?: string;
  nextImage?: React.FunctionComponent;
  objectFit?: CSSProperties['objectFit']
  priority?: boolean;
  removeTagPicture?: boolean;
  title?: string;
  type?: string;
  url?: string;
  width: string;
  onClick?: () => void;
  catchImgRef?: (props?: object) => void;
}

export const Picture = ({
  anchor = false,
  border,
  borderRadius,
  customClassName,
  draggable,
  grayscale,
  hasURL = false,
  height,
  lineHeight,
  linkWrapper,
  minHeight,
  nextImage,
  objectFit,
  priority = false,
  removeTagPicture = false,
  title,
  type = '',
  url = '',
  width,
  catchImgRef,
  onClick,
  ...props
}: PictureProps): React.ReactElement => {
  const [imgRef, setImgRef] = useState(null)
  const altText = props?.alt || title
  const setRef = (ref: HTMLElement) => {
    ref && setImgRef(ref)
  }

  const handleImgVal = useMemo(() => {
    imgRef && catchImgRef && catchImgRef(imgRef)
  }, [imgRef])

  hasURL = url ? true : hasURL
  const imageHTMLelement = () => {
    return (
      <img
        alt={altText}
        className={classNames({
          [styles['picture--image--grayscale']]: grayscale,
          [styles['picture--non--click']]: !hasURL
        })}
        draggable={draggable}
        height={height}
        loading='eager'
        ref={setRef}
        style={{
          height: height,
          minHeight,
          maxWidth: width,
          borderRadius,
          border,
          objectFit
        }}
        title={title}
        width={width}
        {...{ ...props, val: handleImgVal }}
      />
    )
  }

  const {src , ...other} = props

  if (nextImage) {
    const customProps: NextImageProps = {
      grayscale,
      priority,
      border,
      borderRadius,
      height,
      minHeight,
      objectFit,
      otherProps: {...other},
      src: src,
      title,
      val: handleImgVal,
      width
    }

    if (linkWrapper) {
      return (
        <Link
          href={url}
          onClick={onClick}
          wrapper={linkWrapper}
        >
          <ImageNextJs
            alt={altText}
            customClassName={customClassName}
            customProps={customProps}
            handleImgRef={setRef}
            nextImage={nextImage}
            type={type}
          />
        </Link>
      )
    }
    return <ImageNextJs
      alt={altText}
      customClassName={customClassName}
      customProps={customProps}
      handleImgRef={setRef}
      nextImage={nextImage}
      type={type}
    />
  }
  const handleHasUrl = ():React.ReactElement => {
    return (
      anchor && hasURL ? (
        <a href={url} onClick={onClick}>
          {imageHTMLelement()}
        </a>
      ) :
        imageHTMLelement()
    )
  }
  if(removeTagPicture){
    return (
      handleHasUrl()
    )
  }

  return (
    <picture
      className={
        classNames(styles.picture, customClassName, {
          [styles[`picture__${type}`]]: type
        })
      }
      style={{ lineHeight }}
    >
      { handleHasUrl()}
    </picture>
  )
}