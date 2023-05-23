import React, { useEffect, useRef } from 'react'

export interface DraggableProps {
  children: React.ReactNode;
  moveX?: boolean;
  moveY?: boolean;
  maxY?: number;
  maxX?: number;
  minY?: number;
  minX?: number;
}

export const Draggable = ({ 
  children,
  moveY = false,
  moveX = false,
  minX,
  minY,
  maxX,
  maxY
}: DraggableProps): React.ReactElement => {
  const elemRef = useRef(null)
  const dragProps = useRef<{
    dragStartLeft: number;
    dragStartTop: number;
    dragStartX: number;
    dragStartY: number;
  }>()

  useEffect(() => {
    if (elemRef.current) {
      elemRef.current.style.left = `${minX | 0}px`
      elemRef.current.style.top = `${minY | 0}px`
    }
  }, [minX, minY])

  useEffect(() => {
    return () => {
      window.removeEventListener('mousemove', startDragging, false)
      window.removeEventListener('mouseup', stopDragging, false)
    }
  }, [])

  const initialiseDrag = event => {
    const { target, clientX, clientY } = event
    const { offsetTop, offsetLeft } = target
    const { left, top } = elemRef.current.getBoundingClientRect()

    dragProps.current = {
      dragStartLeft: left - offsetLeft,
      dragStartTop: top - offsetTop,
      dragStartX: clientX,
      dragStartY: clientY
    }

    window.addEventListener('mousemove', startDragging, false)
    window.addEventListener('mouseup', stopDragging, false)
  }

  const stopDragging = () => {
    window.removeEventListener('mousemove', startDragging, false)
    window.removeEventListener('mouseup', stopDragging, false)
  }

  const handleChange = ({ touches }) => {
    const { clientX, clientY } = touches[0]

    handleValidation({ valueX: clientX, valueY: clientY })
  }

  const startDragging = ({ clientX, clientY }) => {
    const valueX = dragProps.current.dragStartLeft + clientX - dragProps.current.dragStartX
    const valueY = dragProps.current.dragStartTop + clientY - dragProps.current.dragStartY

    handleValidation({ valueX, valueY })
  }

  const handleValidation = ({ valueX, valueY }) => {

    if (moveX) {
      if (maxX && maxX > valueX) {
        valueX = maxX
      } else if (minX && minX < valueX) {
        valueX = minX
      }

      elemRef.current.style.left = `${valueX}px`
    }

    if (moveY) {
      if (maxY && maxY > valueY) {
        valueY = maxY
      } else if (minY && minY < valueY) {
        valueY = minY
      }

      elemRef.current.style.top = `${valueY}px`
    }
  }

  return (
    <div
      onMouseDown={initialiseDrag}
      onTouchMove={handleChange}
      ref={elemRef}
      style={{
        width: '100%',
        position: 'fixed',
        touchAction: 'none'
      }}
    >
      {children}
    </div >
  )

}