import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/operateSettlement/list',
    method: 'get',
    params,
  })
}
