import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/afterSale/list',
    method: 'get',
    params,
  })
}