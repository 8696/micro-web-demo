
export const toLoginPage = (): void => {
  window.location.href = '/login?url=' + window.location.href
}

export const toAppPage = (url: string): void => {
  window.location.href = url
}
