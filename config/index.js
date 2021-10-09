module.exports = {
  dev: {
    host: "localhost",
    port: 8800
  },
  mock: {
    express: {
      port: 6649
    },
  },
  proxy: {
    // 代理目标链接
    // target: 'http://10.170.180.145', // swagger
    target: 'http://xxx.xxx.local', // 预发
    targetName: 'crowd.com',
  },
  // 配置 ant 主题皮肤
  lessModifyVars: {
    'primary-color': '#4d80fc',
    'font-size-base': '12px'
  },
  dev_remote: {
    host: 'pin.local.com',
    port: 8800
  }
};
