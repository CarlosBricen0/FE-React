import { cssModules } from "../webpack/cssModules";
import { loadConfigs } from "../webpack/loadConfigs";

module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(ts|tsx|js|jsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-actions"
  ],
  typescript: { reactDocgen: false },
  webpackFinal: loadConfigs([cssModules])
}
