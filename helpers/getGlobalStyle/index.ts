export const getGlobalStyle = (style: string): string => {
  return `var(${style})`
}
