import { useMemo } from 'react'
import { getMicroApp } from '@/micro.config'

export default () => {
  const microApp = useMemo(() => {
    return getMicroApp('react-app-02')
  }, [])
  return (
    <div style={{ maxHeight: '100%', overflow: 'auto' }}>
      <micro-app name={microApp?.name} url={microApp?.entry} baseroute={`/${microApp?.name}`}/>
    </div>
  )
}
