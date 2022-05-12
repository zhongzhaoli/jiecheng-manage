const screenConfig = {
    labelWidth: "80px"
};
const screenColumn = [
    {
        label: "运营团队",
        key: "name"
    },
    {
        label: "所属校区",
        key: "school"
    },
    {
        label: "结算状态",
        key: "status"
    }
];
const tableColumn = [
    {
        label: "姓名",
        tooltip: true,
        minWidth: 110,
        key: "name"
    },
    {
        label: "手机号",
        tooltip: true,
        minWidth: 110,
        key: "phone"
    },
    {
        label: "所属校区",
        tooltip: true,
        minWidth: 150,
        key: "school"
    },
    {
        label: "运营团队",
        tooltip: true,
        minWidth: 100,
        key: "operate"
    },
    {
        label: "结算订单数",
        minWidth: 100,
        key: "settlementOrderNum"
    },
    {
        label: "结算金额",
        minWidth: 100,
        key: "settlementTotal"
    },
    {
        label: "结算状态",
        minWidth: 100,
        key: "status"
    },
    {
        label: "申请时间",
        minWidth: 180,
        key: "createTime"
    },
    {
        label: "操作",
        align: "center",
        fixed: "right",
        key: "handle",
        width: 200
    }
];
const handleColumn = [
    {
        label: "批量审核",
        key: "review",
        selection: true,
        icon: "el-icon-circle-check",
        type: "primary"
    }
];
const tableConfig = {
    selection: true
};

export default {
    screenColumn,
    screenConfig,
    tableColumn,
    tableConfig,
    handleColumn
}