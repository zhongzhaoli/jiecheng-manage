const screenColumn = [
    {
        label: "收货人",
        key: "name"
    },
    {
        label: "收货手机号",
        key: "phone"
    },
    {
        label: "运营团队",
        key: "operate"
    },
    {
        label: "距离范围",
        key: "range"
    },
    {
        label: "订单状态",
        key: "status"
    },
];
const screenConfig = {
    labelWidth: "80px"
};
const handleColumn = [
    {
        label: "导出",
        key: "export",
        icon: "el-icon-download",
        type: "warning"
    },
    // {
    //     label: "批量发送站内信",
    //     key: "message",
    //     selection: true,
    //     icon: "el-icon-s-promotion",
    //     type: "primary"
    // },
];
const tableColumn = [
    {
        label: "订单号",
        minWidth: 160,
        align: "center",
        fixed: "left",
        key: "id"
    },
    {
        label: "收货人",
        width: 150,
        tooltip: true,
        key: "name"
    },
    {
        label: "距离",
        minWidth: 80,
        key: "distance"
    },
    {
        label: "运营团队",
        tooltip: true,
        minWidth: 110,
        key: "operate"
    },
    {
        label: "所属校区",
        tooltip: true,
        minWidth: 110,
        key: "school"
    },
    {
        label: "价格",
        width: 100,
        key: "orderPrice"
    },
    {
        label: "下单时间",
        key: "createTime",
        minWidth: 180,
    },
    {
        label: "订单状态",
        align: "center",
        key: "status",
        width: 130,
    },
    {
        label: "操作",
        fixed: "right",
        align: "center",
        width: 250,
        key: "handle"
    }
];
const tableConfig = {
};

export default {
    screenColumn,
    screenConfig,
    handleColumn,
    tableColumn,
    tableConfig
}