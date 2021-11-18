import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import React, { FC } from 'react'
import ReactDOM from 'react-dom'
import 'virtual:windi.css'

import App from './App'

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
