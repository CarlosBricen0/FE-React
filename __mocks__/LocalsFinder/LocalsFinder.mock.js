export const genLocal = (name) => {
  return {
    address: 'Calle Principal #1',
    commune: name,
    coordinates: {
      lat: 0,
      lon: 0
    },
    openingHoursJson: {
      0: {
        close: '21:00',
        open: '08:00',
        timeZone: 'America/Santiago'
      },
      1: {
        close: '21:00',
        open: '08:00',
        timeZone: 'America/Santiago'
      },
      2: {
        close: '21:00',
        open: '08:00',
        timeZone: 'America/Santiago'
      },
      3: {
        close: '21:00',
        open: '08:00',
        timeZone: 'America/Santiago'
      },
      4: {
        close: '21:00',
        open: '08:00',
        timeZone: 'America/Santiago'
      },
      5: {
        close: '21:00',
        open: '08:00',
        timeZone: 'America/Santiago'
      },
      6: {
        close: '21:00',
        open: '08:00',
        timeZone: 'America/Santiago'
      }
    },
    region: name,
    storeName: `Unimarc ${name}`
  }
}
