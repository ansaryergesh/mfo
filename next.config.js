const withImages = require('next-images')
module.exports = withImages({
  webpack(config, options) {
    return config
  },
  env: {
    KEY: 'key',
    BIO_KEY: 'PeeKMaNIX9dNL2pB2433rs7zwrs28gGZ'
  }
})
