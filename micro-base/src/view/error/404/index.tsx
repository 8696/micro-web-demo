import style from './index.module.less'
import { Button } from 'antd'
import { useHistory } from 'react-router-dom'

export default () => {
  const history = useHistory()
  const toHome = () => {
    history.replace('/')
  }
  console.warn('---------')
  console.warn('Micro 404')
  console.warn('---------')
  return (
    <>
      <div className={style.e404}>
        <div className={style.text}>Not found</div>
        <Button type='primary' onClick={toHome}>回首页</Button>
      </div>
    </>
  )
}
