module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
      ['import', {
          libraryName: 'vant',
          libraryDirectory: 'es',
          style: true
      }, 'vant'],
      "@babel/plugin-transform-runtime",
      "@babel/plugin-proposal-class-properties",
      [
          "@babel/plugin-transform-modules-commonjs", {
              "strictMode": false
          }
      ]
  ]
}
