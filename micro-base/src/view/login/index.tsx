import { setToken } from '@/helper/token'
import { toAppPage } from '@/helper/bom'
import { useHistory } from 'react-router-dom'
import { parse as parseQueryString } from 'qs'
import { isUndefined } from '@/helper/type'
import style from './index.module.less'
import { Button } from 'antd'

export default () => {

  const history = useHistory()

  const login = () => {
    setToken(new Date().toString())
    /**
     * @description 不支持重复注册应用、在注册一次后 props 数据传递，不在支持修改，所以这里采用刷新的方向跳转至登录
     * */
    const query = parseQueryString(history.location.search.replace(/^\?/, ''))
    toAppPage(isUndefined(query.url) ? '/' : query.url as string)
  }
  return (
    <div className={style.login}>
      <Button onClick={() => login()} size='large' type='primary'>登录</Button>
    </div>
  )
}
