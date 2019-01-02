import styled from 'styled-components'
import { Button } from 'baseui/button'

export const RoundedButton = styled(Button)`
  border-radius: 20px !important;
  width: 130px;
`

export const WebThreeBanner = styled.div`
  width: 100vw;
  height: 54px;
  background: #2196F3;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .5s ease;
`

export const DownloadMetamaskButton = styled.button`
  border: 1px solid #fff;
  margin-left: 24px;
  padding: .6em .9em;
  color: #fff;
  font-size: 14px;
  cursor: pointer;

  background-color: #2196F3;
  border-radius: 2em;
  transition: background-color .4s ease;
}
`