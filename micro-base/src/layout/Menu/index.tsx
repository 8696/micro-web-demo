
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
        <img src={require('@/asset/image/react-logo.svg').default}  alt=''/>
        <span>Micro web</span>
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
      </Menu>
    </div>
  )
}
