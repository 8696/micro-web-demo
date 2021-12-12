import { Table, Tag, Space } from 'antd'
import { useHistory } from 'react-router-dom'
export default () => {
  const history = useHistory()
  const toUpdate = () => {
    history.push('/system/update')
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text: any) => <a>{text}</a>
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age'
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address'
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (tags: any) => (
        <>
          {tags.map((tag: any) => {
            let color = tag.length > 5 ? 'geekblue' : 'green'
            if (tag === 'loser') {
              color = 'volcano'
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            )
          })}
        </>
      )
    },
    {
      title: 'Action',
      key: 'action',
      render: (text: any, record: any) => (
        <Space size='middle'>
          <a onClick={toUpdate}>Update {record.name}</a>
          <a>Delete</a>
        </Space>
      )
    }
  ]

  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer']
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser']
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher']
    }
  ]

  return (
    <div style={{ padding: '30px' }}>
      <Table columns={columns} dataSource={data} />
    </div>
  )
}
