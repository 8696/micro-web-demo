export declare namespace HttpResponseType {
  export type FulfilledType = {
    code: number
    message: string
    data?: any
  }
  export type RejectedType = {
    httpStatus: number
    message: string
  }
}
