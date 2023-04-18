import { StoreZoneFilterCommune, StoreZoneFilterRegion } from './StoreZoneFilter/StoreZoneFilter'

export interface LocalsFinderItem {
  address: string;
  commune: string;
  coordinates: LocalsFinderItemCoordinates;
  openingHoursJson: Record<number, LocalsFinderItemOpenHour>;
  region: string;
  storeName: string;
}

export interface LocalsFinderItemCoordinates {
  lat: number;
  lon: number;
}

export interface LocalsFinderItemNearby {
  local: LocalsFinderStore;
  position: LocalsFinderStorePosition;
}

export interface LocalsFinderItemOpenHour {
  close: string;
  open: string;
  timeZone: string;
}

export interface LocalsFinderStore {
  address: string;
  closed: boolean;
  closedAt: string;
  commune: string;
  details: string[][];
  key: string;
  name: string;
  position: LocalsFinderStorePosition;
  region: string;
  title: string;
  url: string;
}

export interface LocalsFinderStorePosition {
  lat: number;
  lng: number;
}

export interface UseLocalsSortProps {
  items: LocalsFinderItem[];
  filters?: {
    commune: string;
    location: GeolocationPosition;
    region: string;
  }
}

export enum OpeningHoursLabels {
  Week = 'Lunes a viernes',
  Saturday = 'Sábado',
  Sunday = 'Domingo',
  Holyday = 'Feriados'
}

export const getLocalClosed = (hours: Record<number, { open: string, close: string }>) => {
  const date = new Date(Date.now())
  const dateDay = date.getDay()
  const dateHour = date.getHours().toString().padStart(2, '0')
  const dateMinutes = date.getMinutes().toString().padStart(2, '0')

  const dateHours = hours[dateDay - 1]

  const pattern = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/ //NOSONAR

  const isCloseTime = pattern.test(dateHours.close)
  const isOpenTime = pattern.test(dateHours.close)

  const isOpen = (
    isOpenTime &&
    isCloseTime &&
    `${dateHour}:${dateMinutes}` > dateHours.open &&
    `${dateHour}:${dateMinutes}` < dateHours.close
  )

  return {
    closedAt: isCloseTime ? dateHours.close : null,
    closedStatus: !isOpen
  }
}

export const getLocalDetailHours = (hours: { open: string, close: string }): string => {
  const pattern = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/ //NOSONAR

  if (
    !hours ||
    !pattern.test(hours.close) ||
    !pattern.test(hours.open)
  ) {
    return 'Cerrado'
  }

  return `${hours.open} a ${hours.close} hrs.`
}

export const getLocalDetail = (openingHours: Record<number, LocalsFinderItemOpenHour>) => {
  const week = {
    close: null,
    open: null
  }

  for (const key in openingHours) {
    const { close, open } = openingHours[key]

    if (key < '5') {
      week.close = week.close > close || close === 'Cerrado' ? week.close : close
      week.open = week.open < open || open === 'Cerrado' ? week.open : open
    }
  }

  return [
    [OpeningHoursLabels.Week, getLocalDetailHours(week)],
    [OpeningHoursLabels.Saturday, getLocalDetailHours(openingHours[5])],
    [OpeningHoursLabels.Sunday, getLocalDetailHours(openingHours[6])],
    [OpeningHoursLabels.Holyday, getLocalDetailHours(openingHours[7])]
  ]
}

export const getLocalDistance = (a: LocalsFinderStorePosition, b: LocalsFinderStorePosition) => {
  return Math.pow(a.lat - b.lat, 2) + Math.pow(a.lng - b.lng, 2)
}

export const sortLocalsFinderItems = (curr: LocalsFinderItem, next: LocalsFinderItem) => {
  return next.coordinates.lat - curr.coordinates.lat
}

export const sortLocalsFinderItemsByDistance = (location: GeolocationPosition) => {
  return (curr: LocalsFinderStore, next: LocalsFinderStore) => {
    const currDistance = getLocalDistance({ lat: location.coords.latitude, lng: location.coords.longitude }, curr.position)
    const nextDistance = getLocalDistance({ lat: location.coords.latitude, lng: location.coords.longitude }, next.position)
    return currDistance - nextDistance
  }
}

export const updateCommunes = (communes: StoreZoneFilterCommune[], commune: StoreZoneFilterCommune) => {
  const noCommune = communes.every(communePrev => {
    return commune.commune != communePrev.commune
  })

  if (noCommune) {
    communes.push({
      commune: commune.commune,
      region: commune.region
    })
  }
}

export const updateNearbyLocal = (location: GeolocationPosition, local: LocalsFinderStore, nearby: LocalsFinderItemNearby) => {
  const { position: localPosition } = local
  const { coords: locationPosition } = location
  const { position: nearbyPosition } = nearby

  const distance = (a: LocalsFinderStorePosition, b: LocalsFinderStorePosition) => {
    return Math.pow(a.lat - b.lat, 2) + Math.pow(a.lng - b.lng, 2)
  }

  const nearbySum = distance(nearbyPosition, { lat: locationPosition.latitude, lng: locationPosition.longitude })
  const localsSum = distance(localPosition, { lat: locationPosition.latitude, lng: locationPosition.longitude })

  if (localsSum < nearbySum) {
    nearby.position = local.position
    nearby.local = local
  }
}

export const updateRegions = (regions: StoreZoneFilterRegion[], region: StoreZoneFilterRegion) => {
  const noRegion = regions.every(regionPrev => {
    return region.region != regionPrev.region
  })

  if (noRegion) {
    regions.push({
      region: region.region
    })
  }
}

export const useLocalsFinder = ({
  items,
  filters
}: UseLocalsSortProps) => {
  const communes = []
  const locals = []
  const regions = []

  items.sort(sortLocalsFinderItems)

  items.forEach((item, index) => {
    updateCommunes(communes, item)
    updateRegions(regions, item)

    const equalCommune = filters?.commune === item.commune || !filters?.commune
    const equalRegion = filters?.region === item.region || !filters?.region

    if (equalCommune && equalRegion) {
      const closed = getLocalClosed(item.openingHoursJson)
      const details = getLocalDetail(item.openingHoursJson)

      locals.push({
        key: index,
        address: `${item.address}, ${item.commune}`,
        closed: closed.closedStatus,
        closedAt: closed.closedAt,
        comuna: item.commune,
        coordinates: {
          lat: item.coordinates.lat,
          lng: item.coordinates.lon
        },
        details,
        position: {
          lat: item.coordinates.lat,
          lng: item.coordinates.lon
        },
        region: item.region,
        title: item.storeName,
        url: `https://www.google.com/maps/search/?api=1&query=${item.commune}+${item.address}+${item.storeName}`
      })
    }
  })

  if (filters.location) {
    locals.sort(sortLocalsFinderItemsByDistance(filters.location))
  }

  return {
    communes,
    locals,
    regions
  }
}
