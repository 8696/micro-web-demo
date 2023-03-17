import './index.less'

import { useEffect } from 'react'
import { Modal } from 'antd'
import { useMemoizedFn, useMount } from 'ahooks'
export default () => {
  useEffect(() => {
    console.log('home page')
  }, [])

  const LOCAL_GIT_TIP_KEY = 'GIT_TIP'

  const showGitTis = useMemoizedFn(() => {
    Modal.confirm({
      title: '提示',
      content: '如果对你有帮助，请到github给个star吧️',
      okText: '现在去',
      cancelText: '不在提示',
      centered: true,
      onOk() {
        window.open('https://github.com/8696/micro-web-demo')
        window.localStorage.setItem(LOCAL_GIT_TIP_KEY, '1')
      },
      onCancel() {
        window.localStorage.setItem(LOCAL_GIT_TIP_KEY, '1')
      }
    })
  })
  useMount(() => {
    window.localStorage.getItem(LOCAL_GIT_TIP_KEY) !== '1' && showGitTis()
  })

  return (
    <div className='home'>
      <h1>This is a home page</h1>
    </div>
  )
}
