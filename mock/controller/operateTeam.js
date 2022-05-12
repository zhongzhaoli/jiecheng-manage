const { mock } = require("mockjs");
module.exports = [
    {
        // 运营商列表
        url: "/operateTeam/list",
        type: "get",
        response(config) {
            let { pageSize, pageNumber } = config.query;
            const listMock = mock({
                'list|5': [{
                    'id': "@id",
                    'name': '@cname',
                    'createTime': '@date @time',
                    'orderNum|1-100': 0,
                    'memberNum|1-100': 0,
                    'status|0-1': 0,
                    'phone': '13662648176',
                    "school|2": '@cname'
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
        },
    },
    {
        // 结算列表
        url: "/operateSettlement/list",
        type: "get",
        response(config) {
            let { pageSize, pageNumber } = config.query;
            const listMock = mock({
                'list|5': [{
                    'id': "@id",
                    'operate': '@cname',
                    'applyUserName': '@name',
                    'createTime': '@date @time',
                    'settlementOrderNum|1-100': 0,
                    'settlementTotal|500-1000': 0,
                    'status|1-3': 0,
                    'phone': '13662648176',
                    "school|2": '@cname'
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
                }
            }
        }
    }
];
