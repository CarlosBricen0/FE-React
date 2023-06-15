import { cssModules } from "../webpack/cssModules";
import { loadConfigs } from "../webpack/loadConfigs";
module.exports = {
  stories: ["../stories/**/*.stories.mdx", "../stories/**/*.stories.@(ts|tsx|js|jsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-actions", "@storybook/addon-controls"],
  typescript: {
    reactDocgen: true
  },
  core: {
    builder: 'webpack5',
  },
  webpackFinal: loadConfigs([cssModules]),
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },
  docs: {
    autodocs: true
  ,
  typescript: {
    check: true,
    reactDocgen: 'react-docgen-typescript',
  },
}
};