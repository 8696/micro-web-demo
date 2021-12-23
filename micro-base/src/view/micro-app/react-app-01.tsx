import { useMemo } from 'react'
import { getMicroApp } from '@/micro.config'
import microAppZoe from '@micro-zoe/micro-app'
import microEvent from '@/micro/event'
export default () => {
  const microApp = useMemo(() => {
    microAppZoe.setData('react-app-01', { microEvent })
    return getMicroApp('react-app-01')
  }, [])
  return (
    <div style={{ maxHeight: '100%', overflow: 'auto' }}>
      <micro-app name={microApp?.name} url={microApp?.entry} baseroute={`/${microApp?.name}`}/>
    </div>
  )
}
