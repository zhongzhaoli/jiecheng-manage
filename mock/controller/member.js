const { mock } = require("mockjs");
module.exports = [
    {
        // 会员列表
        url: "/member/list",
        type: "get",
        response(config) {
            let { pageSize, pageNumber } = config.query;
            const listMock = mock({
                'list|5': [{
                    'id': "@id",
                    'nickName': '@name',
                    'createTime': '@date @time',
                    'integral|1-100': 0,
                    'memberNum|1-100': 0,
                    'status|0-1': 0,
                    'phone': '13662648176',
                    "school|2": '@cname',
                    "operate": '@cname',
                    "avatar": '@image("200x200","red","#fff","avatar")'
                }]
            });
            return {
                code: 200,
                msg: "success",
                data: {
                    total: 50,
                    pageSize: parseInt(pageSize) || 10,
                    pageNumber: parseInt(pageNumber) || 1,
                    list: listMock.list
                },
            };
        }
    },
    {
        // 积分管理
        url: "/integral/list",
        type: "get",
        response(config) {
            let { pageSize, pageNumber } = config.query;
            const listMock = mock({
                'list|5': [{
                    'id': "@id",
                    'nickName': '@name',
                    'createTime': '@date @time',
                    'integral|1-100': 0,
                    'source|1-3': 0,
                    'phone': '13662648176',
                    'sourceType|1-2': 0
                }]
            });
            return {
                code: 200,
                msg: "success",
                data: {
                    total: 50,
                    pageSize: parseInt(pageSize) || 10,
                    pageNumber: parseInt(pageNumber) || 1,
                    list: listMock.list
                },
            };
        }
    }
]