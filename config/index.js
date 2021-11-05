module.exports = {
  development: {
    url: 'http://localhost:4400/',
    apiURL: '/api',
  },
  beta: {
    url: '/',
    apiURL: '/api',
  },
  release: {
    url: '/',
    apiURL: '/api',
  },
  dev: {
    host: 'localhost',
    port: 4400,
  },
  dev_remote: {
    host: 'pin.local.com',
    port: 4400,
  },
  mock: {
    port: 4499,
  },
  proxy: {
    // 代理目标链接
    target: 'http://127.0.0.1:4499',
  },
  // 配置 ant 主题皮肤
  lessModifyVars: {
    'primary-color': '#4d80fc',
    'font-size-base': '12px',
  }
}
