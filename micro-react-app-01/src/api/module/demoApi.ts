import Http from '@/api/http'
import * as httpUtil from '@/helper/http'

import { HttpResponseType } from '@/type/http.type'

/**
 * @description 测试 get 请求
 * */
export function get(param = {}): Promise<HttpResponseType.FulfilledType> {
  return new Http().request({
    url: '/user/get',
    params: param,
    method: 'get'
  })
}

/**
 * @description 测试 post 请求
 * */
export function post(param = {}): Promise<HttpResponseType.FulfilledType> {
  return new Http().request({
    url: '/user/post',

    // multipart/form-data
    data: httpUtil.makeFormData(param),

    // application/x-www-form-urlencoded
    // data: httpUtil.makeQueryString(param),

    // application/json
    // data: param,
    method: 'put'
  })
}
