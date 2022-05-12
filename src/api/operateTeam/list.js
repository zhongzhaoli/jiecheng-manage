import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/operateTeam/list',
    method: 'get',
    params,
  })
}
