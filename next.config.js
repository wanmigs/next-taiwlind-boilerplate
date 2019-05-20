const path = require('path')
const withSass = require('@zeit/next-sass')
const withPlugins = require('next-compose-plugins');
const nextRuntimeDotenv = require('next-runtime-dotenv')
const withConfig = nextRuntimeDotenv({
  path: '.env',
  public: [
    'API_URL'
  ]
})

const nextConfig = {
  webpack (config, options) {
    config.resolve.alias['~'] = path.join(__dirname, '/')
    config.node = {
      fs: "empty"
    }
    return config
  }
};

module.exports = withConfig(
  withPlugins([
    [withSass],
  ], nextConfig)
)
