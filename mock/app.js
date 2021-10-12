const { server, setData, start } = require('./utils')

/**
 * https://www.fastify.io/docs/latest/Request/
 */

server.post('/api/getTest', async (request, reply) => {
  const data = { code: '121344', name: '全站' }
  return setData(request, data);
})

server.get('/api/getUser', async (request, reply) => {
  const data = {
    name: "test",
    pin: "test",
  };
  return setData(request, data);
})

server.get('/api/detail/:id', async (request, reply) => {
  const data = { code: '121344', name: '20220' }
  return setData(request, data);
})

start()
