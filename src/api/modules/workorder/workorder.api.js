import { request } from '@/api/_service.js'

const baseUrl = '/workorder'

export function GET_WORK_ORDER_VIEW () {
  // 接口请求
  return request({
    url: baseUrl + '/view/get',
    method: 'get'
  })
}
