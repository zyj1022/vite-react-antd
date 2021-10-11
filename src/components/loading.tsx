import { Spin } from 'antd'
import styled from 'styled-components'

const Loading = styled(Spin)`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 100000;

  .ant-spin-dot {
    margin: auto;
  }
`

export default Loading
