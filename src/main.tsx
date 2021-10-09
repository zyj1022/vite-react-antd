import React, { FC } from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import zhCN from 'antd/es/locale/zh_CN'
import { ConfigProvider } from 'antd'

const Root: FC = () => {
  return (
    <React.StrictMode>
      <ConfigProvider locale={zhCN}>
        <App />
      </ConfigProvider>
    </React.StrictMode>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'))
