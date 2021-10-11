module.exports = {
  development: {
    url: 'http://localhost:8800/',
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
    port: 8800,
  },
  dev_remote: {
    host: 'pin.local.com',
    port: 8800,
  },
  mock: {
    port: 8899,
  },
  proxy: {
    // 代理目标链接
    target: 'http://127.0.0.1:8899',
  },
  // 配置 ant 主题皮肤
  lessModifyVars: {
    'primary-color': '#4d80fc',
    'font-size-base': '12px',
  }
}
