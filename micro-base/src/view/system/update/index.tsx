import { Form, Input, InputNumber, Button } from 'antd'
import { useHistory } from 'react-router-dom'

export default () => {
  const layout = {
    labelCol: { span: 2 },
    wrapperCol: { span: 20 }
  }

  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!'
    },
    number: {
      range: '${label} must be between ${min} and ${max}'
    }
  }
  const history = useHistory()
  const onFinish = () => {
    history.replace('/system')
  }
  return (
    <div style={{ padding: '30px' }}>
      <Form {...layout} name='nest-messages' onFinish={onFinish} validateMessages={validateMessages}>
        <Form.Item name={['user', 'name']} label='Name' rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name={['user', 'email']} label='Email' rules={[{ type: 'email' }]}>
          <Input />
        </Form.Item>
        <Form.Item name={['user', 'age']} label='Age' rules={[{ type: 'number', min: 0, max: 99 }]}>
          <InputNumber />
        </Form.Item>
        <Form.Item name={['user', 'website']} label='Website'>
          <Input />
        </Form.Item>
        <Form.Item name={['user', 'introduction']} label='Introduction'>
          <Input.TextArea />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
