import qs from 'qs'

type ObjectType = {
  [key: string]: never
}

/**
 * @description 将对象转成 FormData
 * @param object {Object}
 * @return {FormData}
 */
export function makeFormData(object: ObjectType): FormData {
  const formData = new FormData()
  Object.keys(object).forEach((key) => {
    formData.append(key, object[key])
  })
  return formData
}

/**
 * @description 将对象转成 query string
 * @param object {Object}
 * @return {String}
 */
export function makeQueryString(object: ObjectType): string {
  return qs.stringify(object)
}
