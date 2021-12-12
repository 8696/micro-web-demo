export const getUserInfo = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        username: '龙锦文',
        loginTime: new Date().getTime()
      })
    }, 500)
  })
}
