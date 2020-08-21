module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  'env': {
    'development': {
      'plugins': ['dynamic-import-node']
    },
    'production': {
      'plugins': ['transform-remove-console'] // 去除生产环境的console
    },
  }
}
