export interface UseDropdownMaxHeightProps {
  gap?: number;
  height?: number;
  maxOptions: number;
  padding?: number;
}

export const useDropdownMaxHeight = ({
  gap = 8,
  height = 35,
  maxOptions,
  padding = 12
}: UseDropdownMaxHeightProps) => {
  const maxHeight = (height * maxOptions) + (padding * 2) + (gap * Math.max(maxOptions - 1, 0))

  return {
    maxHeight
  }
}