export const getGeolocationPermissionIsGranted = async () => {
  try {
    if (navigator.geolocation) {
      const permission = await navigator.permissions.query({ name: 'geolocation' }) // NOSONAR

      if (permission.state === 'granted') {
        return true
      }
    }

    return false
  } catch (error) {
    throw error.message
  }
}
