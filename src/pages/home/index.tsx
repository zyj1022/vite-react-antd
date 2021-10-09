import React from 'react'
import { Button } from 'antd'
import { observer, Observer } from 'mobx-react-lite'
import { useStore } from '../../stores'

const Home: React.FC = () => {
  const { common } = useStore()
  return (
    <Observer>
      {() => (
        <div>
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
          <p>
            <img src="/images/logo.svg" />
          </p>
        </div>
      )}
    </Observer>
  )
}

export default Home
