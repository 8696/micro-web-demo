
import { Menu } from 'antd'
import style from './index.module.less'
import { Link, useHistory, useLocation } from 'react-router-dom'
import {
  DesktopOutlined
} from '@ant-design/icons'
import { useEffect, useState } from 'react'

export default () => {
  const history = useHistory()
  const location = useLocation()
  const [selectedKeys, setSelectedKeys] = useState<string[]>([])

  useEffect(() => {
    setSelectedKeys([location.pathname.split('/')[1]])
  }, [location.pathname])

  const goHome = () => {
    history.replace('/')
  }

  return (
    <div className={style.menuMain}>
      <div className={style.menuLogo} onClick={goHome}>
        <img src={require('@/asset/image/micro-app.png')}  alt=''/>
        <span>MicroApp</span>
      </div>
      <Menu
        selectedKeys={selectedKeys}
        mode='inline'
        theme='dark'
        style={{ height: 'calc(100% - 50px)' }}
      >
        <Menu.Item key='react-app-01' icon={<DesktopOutlined />}>
          <Link to='/react-app-01/home'>React App 01</Link>
        </Menu.Item>
        <Menu.Item key='react-app-02' icon={<DesktopOutlined />}>
          <Link to='/react-app-02/home'>React App 02</Link>
        </Menu.Item>
        <Menu.Item key='vue-app-01' icon={<DesktopOutlined />}>
          <Link to='/vue-app-01/home'>Vue app</Link>
        </Menu.Item>
        <Menu.Item key='system' icon={<DesktopOutlined />}>
          <Link to='/system'>内置页面</Link>
        </Menu.Item>
        <Menu.Item key='github' icon={<DesktopOutlined />}>
          <a href='https://github.com/8696/micro-web-demo/tree/micro-app-jd' target='_blank' rel='noreferrer'>GitHub</a>
        </Menu.Item>
        <Menu.Item key='qiankun' icon={<DesktopOutlined />}>
          <a href='http://micro.icode.link' target='_blank' rel='noreferrer'>qiankun版本</a>
        </Menu.Item>
      </Menu>
    </div>
  )
}
