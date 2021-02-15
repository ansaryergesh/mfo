const withImages = require('next-images')
module.exports = withImages({
  webpack(config, options) {
    return config
  },

  env: {
    BASE_URL: 'http://localhost:8000/api'
  }
})

// module.exports = {
  // webpack: (config, { isServer }) => {
  //   // Fixes npm packages that depend on `fs` module
  //   if (!isServer) {
  //     config.node = {
  //       fs: 'empty'
  //     }
  //   }

  //   return config
  // },
//   rules: [

//   ]
// }