const path = require('path');
const { loadConfigFromFile, mergeConfig } = require('vite')

module.exports = {
  stories: [
    "../src/components/**/*.stories.tsx"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "storybook-addon-pseudo-states"
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite"
  },
  features: {
    storyStoreV7: true
  }
}