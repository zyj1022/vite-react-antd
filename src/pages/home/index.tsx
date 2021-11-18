import React from 'react'
import { Observer } from 'mobx-react-lite'
import { Button } from 'antd'

import { useStore } from '@/stores'

const Home: React.FC = () => {
  const { common } = useStore()
  return (
    <Observer>
      {() => (
        <div className="container">
          <button
            w-bg="blue-500 hover:blue-400"
            w-text="white"
            w-p="y-2 x-4"
            w-border="2 rounded blue-600 hover:blue-400">
            Windi CSS - Button
          </button>
          <h2>Home {common.count}</h2>
          <p>
            <Button type="primary" onClick={() => common.increment()}>
              {common.name}++
            </Button>
          </p>
          <p>
            <Button type="primary" onClick={() => common.decrement()}>
              {common.name}--
            </Button>
          </p>
          <p>{/* <img src="/images/ye.png" alt="" /> */}</p>
          <p>
            <Button type="primary" onClick={() => common.getUser()}>
              Get测试: {common?.user?.name}
            </Button>
          </p>
          <p>
            <Button
              type="primary"
              onClick={() =>
                common.getTest({
                  id: '1212123',
                })
              }>
              POST测试: {common?.test?.code}
            </Button>
          </p>
        </div>
      )}
    </Observer>
  )
}

export default Home
