import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { HttpResponseType } from '@/type/http.type'
import axios from 'axios'

export default class Http {
  request(config: AxiosRequestConfig): Promise<HttpResponseType.FulfilledType> {
    return new Promise((resolve, reject) => {
      axios
        .create({
          baseURL: process.env.REACT_APP_URL_API,
          timeout: 1000 * 60,
          validateStatus(status) {
            return status === 200
          }
        })
        .request(config)
        .then((response: AxiosResponse) => {
          // 这里进行判断后端响应情况
          if (response.data.code === 0) {
            return resolve(response.data)
          }
          reject({ httpStatus: 200, message: response.data.message })
        })
        .catch((error: AxiosError<HttpResponseType.RejectedType>) => {
          if (error.response) {
            // 服务端抛出非200状态码
            return reject({
              httpStatus: error.response.status,
              message: `Network error(${error.response.status})`
            })
          }
          // 服务端无响应，或者断网
          reject({ httpStatus: 0, message: 'Network error(0)' })
        })
    })
  }
}
