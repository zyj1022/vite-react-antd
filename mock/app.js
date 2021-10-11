const { server, setData, start } = require('./utils')

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

start()
