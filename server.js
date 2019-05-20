const next = require('next')
const routes = require('./routes')
const app = next({dev: process.env.NODE_ENV !== 'production'})
const handler = routes.getRequestHandler(app)

const {createServer} = require('http')
app.prepare().then(() => {
  console.log('> Ready on http://localhost:3000');
  createServer(handler).listen(3000)
})
