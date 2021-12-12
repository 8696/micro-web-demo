import './index.less'

import { Collapse, Button, message, Drawer } from 'antd'

const { Panel } = Collapse
import { Descriptions } from 'antd'
import { useState } from 'react'

export default () => {
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`

  const [visible, setVisible] = useState(false)
  const showDrawer = () => {
    setVisible(true)
  }
  const onClose = () => {
    setVisible(false)
  }
  return (
    <div style={{ padding: '30px' }}>
      <Descriptions title='User Info'>
        <Descriptions.Item label='UserName'>Zhou Maomao</Descriptions.Item>
        <Descriptions.Item label='Telephone'>1810000000</Descriptions.Item>
        <Descriptions.Item label='Live'>Hangzhou, Zhejiang</Descriptions.Item>
        <Descriptions.Item label='Remark'>empty</Descriptions.Item>
        <Descriptions.Item label='Address'>
          No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
        </Descriptions.Item>
      </Descriptions>
      <hr/>
      <Collapse defaultActiveKey={['1']} >
        <Panel header='This is panel header 1' key='1'>
          <p>{text}</p>
        </Panel>
        <Panel header='This is panel header 2' key='2'>
          <p>{text}</p>
        </Panel>
        <Panel header='This is panel header 3' key='3'>
          <p>{text}</p>
        </Panel>
      </Collapse>
      <hr/>
      <Button type='primary' onClick={() => message.success(new Date().toString())}>message</Button>
      &nbsp;
      &nbsp;
      <Button type='primary' onClick={() => showDrawer()}>drawer</Button>
      <Drawer title='Basic Drawer' placement='right' onClose={onClose} visible={visible}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </div>
  )
}
