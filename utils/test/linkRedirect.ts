export const linkRedirect = () => {
  global.window = Object.create(window)
  Object.defineProperty(window, 'location', {
    value: {
      href: 'localhost'
    },
    writable: true
  })
  Object.defineProperty(window, 'crypto', {
    value: {
      getRandomValues: () => { return 10 }
    }
  })
}