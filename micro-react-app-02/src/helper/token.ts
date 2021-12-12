const tokenKey: string = 'token'

export const setToken = (token: string): void => window.localStorage.setItem(tokenKey, token)

export const clearToken = (): void => window.localStorage.removeItem(tokenKey)

export const getToken = (): string => window.localStorage.getItem(tokenKey) || ''
