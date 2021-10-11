const config: any = {
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
    express: {
      port: 6649,
    },
  },
  proxy: {
    // 代理目标链接
    target: 'http://xxx.xxx.local', // 预发
    targetName: 'xxx.com',
  },
  // 配置 ant 主题皮肤
  lessModifyVars: {
    'primary-color': '#4d80fc',
    'font-size-base': '12px',
  }
}

export default config
