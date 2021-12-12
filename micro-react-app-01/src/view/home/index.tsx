import './index.less'

import { useEffect } from 'react'

export default () => {
  useEffect(() => {
    console.log('home page')
  }, [])

  return (
    <div className='home'>
      <h1>This is a home page</h1>
    </div>
  )
}
