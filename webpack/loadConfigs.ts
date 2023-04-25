export const loadConfigs = (configs) => {
  return (storybookConfig) => {
    configs.forEach((config) => { return config(storybookConfig) })
    return storybookConfig
  }
}

