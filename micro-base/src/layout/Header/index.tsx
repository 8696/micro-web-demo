import { clearToken } from '@/helper/token'
import style from './index.module.less'
import { toLoginPage } from '@/helper/bom'
import { Button, message } from 'antd'
import microEvent from '@/micro/event'
import { useCallback, useEffect, useState } from 'react'

export default () => {
  const logout = () => {
    clearToken()
    toLoginPage()
  }

  const [isListening, setIsListening] = useState(false)

  const onMicroMessageHandle = useCallback((data?: any) => {
    data?.time && message.warning(data?.time).then()
  }, [])

  const openMicroListen = useCallback(() => {
    setIsListening(true)
    microEvent.on('sub-message', onMicroMessageHandle)
  }, [onMicroMessageHandle])

  const removeMicroListen = useCallback(() => {
    setIsListening(false)
    microEvent.removeListener('sub-message', onMicroMessageHandle)
  }, [onMicroMessageHandle])

  const emitMicroMessage = () => {
    microEvent.emit('main-message', {
      time: `来自主应用数据：${new Date().toString()}`
    })
  }
  useEffect(() => {
    openMicroListen()
    return () => {
      removeMicroListen()
    }
  }, [removeMicroListen, openMicroListen])

  return (
    <div className={style.headerMain}>
      <div className={style.fn}>
        <span>通信测试</span>
        &nbsp;&nbsp;
        <Button type='primary' disabled={isListening} onClick={openMicroListen}>开启监听</Button>
        &nbsp;&nbsp;
        <Button type='primary' disabled={!isListening} onClick={removeMicroListen}>关闭监听</Button>
        &nbsp;&nbsp;
        <Button type='primary' onClick={emitMicroMessage}>向子应用发送数据</Button>
      </div>
      <div className={style.userName}>
        <img className={style.avatar} src={require('@/asset/image/avatar.png')} alt=''/>
        <span className={style.name}>龙锦文</span>
        <span className={style.logout} onClick={logout}>退出</span>
      </div>
    </div>
  )
}
