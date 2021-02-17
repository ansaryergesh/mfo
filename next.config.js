const withImages = require('next-images')
module.exports = withImages({
  webpack(config, options) {
    return config
  },

  env: {
    BASE_URL: 'http://37.18.30.37/api'
  }
})
