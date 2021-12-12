import './index.less'
import { useCallback, useEffect, useState } from 'react'
import { Button, message } from 'antd'

import { getMicroEvent } from '@/micro/event'

export default () => {

  const [isListening, setIsListening] = useState(false)

  const onMicroMessageHandle = useCallback((data?: any) => {
    data?.time && message.success(data?.time).then()
  }, [])

  const openMicroListen = useCallback(() => {
    setIsListening(true)
    getMicroEvent()?.on('main-message', onMicroMessageHandle)
  }, [onMicroMessageHandle])

  const removeMicroListen = useCallback(() => {
    setIsListening(false)
    getMicroEvent()?.removeListener('main-message', onMicroMessageHandle)
  }, [onMicroMessageHandle])

  const emitMicroMessage = () => {
    getMicroEvent()?.emit('sub-message', {
      time: `来自子应用数据：${new Date().toString()}`
    })
  }

  useEffect(() => {
    openMicroListen()
    return () => {
      removeMicroListen()
    }
  }, [openMicroListen, removeMicroListen])
  return (
    <div className='event'>
      <Button type='primary' disabled={isListening} onClick={openMicroListen}>开启监听</Button>
      &nbsp;&nbsp;
      <Button type='primary' disabled={!isListening} onClick={removeMicroListen}>关闭监听</Button>
      &nbsp;&nbsp;
      <Button type='primary' onClick={emitMicroMessage}>向主应用发送数据</Button>
    </div>
  )
}
