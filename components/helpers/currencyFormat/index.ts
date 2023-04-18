interface CurrencyFormat {
  number: number;
  bool?: boolean;
}

export const currencyFormat = ({
  number,
  bool = true
}: CurrencyFormat): string => {

  let formatNumber = 0

  // If true then divide number
  if (bool) {
    formatNumber = number / 100
  }
  // Else just assign it
  else {
    formatNumber = number
  }

  const formatterPeso = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    minimumFractionDigits: 0
  })

  if (formatNumber >= 0) {
    return formatterPeso.format(formatNumber)
  }

  return '- ' + formatterPeso.format(Math.abs(formatNumber))
}