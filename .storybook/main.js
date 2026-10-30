const path = require('path');
module.exports = {
  stories: ['../stories/**/*.stories.@(ts|tsx|js|jsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions', '@storybook/addon-a11y'],
  framework: { name: '@storybook/react-webpack5', options: {} },
  typescript: { reactDocgen: false },
  webpackFinal: async (config) => {
    config.resolve.alias = { ...config.resolve.alias, react: path.resolve(__dirname, '../node_modules/react'), 'react-dom': path.resolve(__dirname, '../node_modules/react-dom') };
    for (const rule of config.module.rules) { if (rule.test && rule.test.toString() === /\.css$/.toString()) rule.exclude = /\.module\.css$/; }
    config.module.rules.push({ test: /\.module\.css$/, use: ['style-loader', {loader:'css-loader', options: {modules:true}}] });
    return config;
  }
};
