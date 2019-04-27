const path = require('path')

const browsers = `
  last 3 Chrome versions,
  last 3 Firefox versions,
  last 2 Safari versions,
  last 3 Edge versions,
  last 2 iOS versions,
  last 2 ChromeAndroid versions,
  IE >= 11,
  > 1%
`

module.exports = ({ env = process.env.NODE_ENV }) => ({
  plugins: {
    'postcss-preset-env': {
      preserve: false,
      browsers,
      // features list:
      // https://github.com/csstools/postcss-preset-env/blob/master/lib/ids-by-execution-order.js
      features: {
        'custom-properties': true,
        'custom-media-queries': true,
        'nesting-rules': true,
      },
    },
    'postcss-calc': {},
  },
})
