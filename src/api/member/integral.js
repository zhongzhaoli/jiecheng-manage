import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/integral/list',
    method: 'get',
    params,
  })
}