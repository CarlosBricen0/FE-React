import '../assets/styles/globals.css'
import '../assets/styles/tokens.css'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  parameters: {
    controls: { expanded: true },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}