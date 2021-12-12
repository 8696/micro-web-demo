import './index.less'

import { Card } from 'antd'
export default () => {
  return (
    <div className='box'>
      <Card title='图片' style={{ width: 600 }}>
        <div style={{ textAlign: 'center' }}>
          <img src={require('@/asset/image/antd-logo.svg').default} alt='' />
        </div>
      </Card>
      <Card title='背景图片' style={{ width: 600 }}>
        <div className='back-img' />
      </Card>
      <Card title='行内背景图片' style={{ width: 600 }}>
        <div className='back-img' style={{
          backgroundImage: `url(${require('@/asset/image/antd-logo.svg').default})` }}
        />
      </Card>
    </div>
  )
}

