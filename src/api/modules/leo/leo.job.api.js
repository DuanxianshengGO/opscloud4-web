import { request } from '@/api/_service.js'

const baseUrl = '/leo/job'

export function QUERY_LEO_JOB_PAGE (data) {
  return request({
    url: baseUrl + '/page/query',
    method: 'post',
    data
  })
}

export function ADD_LEO_JOB (data) {
  return request({
    url: baseUrl + '/add',
    method: 'post',
    data
  })
}

export function UPDATE_LEO_JOB (data) {
  return request({
    url: baseUrl + '/update',
    method: 'put',
    data
  })
}

export function UPGRADE_LEO_JOB_TEMPLATE_CONTENT (data) {
  return request({
    url: baseUrl + '/template/content/upgrade',
    method: 'put',
    data
  })
}