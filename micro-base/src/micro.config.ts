type MicroConfigType = {
  /** 应用名称 | 这里 activeRule、子应用路由的 basePath 都将使用这个*/
  name: string;
  /** 是否是默认应用 | true 时页面默认跳转、/ 根也自动重定向这边 */
  default?: boolean;
  /** 入口地址 | 共同部署直接填写 /xxx/index.html 即可、单独部署需要填写域名 */
  entry: string
}

export const microApps: MicroConfigType[] = [
  {
    name: 'react-app-01',
    entry: process.env.NODE_ENV === 'production'
      ? '/react-app-01/index.html'
      : 'http://localhost:8882',
    default: true
  },
  {
    name: 'react-app-02',
    entry: process.env.NODE_ENV === 'production'
      ? '/react-app-02/index.html'
      : 'http://localhost:8883'
  },
  {
    name: 'vue-app-01',
    entry: process.env.NODE_ENV === 'production'
      ? '/vue-app-01/index.html'
      : 'http://localhost:8884'
  },
  {
    name: 'angular-app-01',
    entry: process.env.NODE_ENV === 'production'
      ? '/angular-app-01/index.html'
      : 'http://localhost:8885'
  }
]

export const getMicroDefaultApp = (): MicroConfigType | null => {
  return microApps.find(item => item.default) || null
}
