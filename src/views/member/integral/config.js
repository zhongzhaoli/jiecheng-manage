const screenColumn = [
    {
        label: "会员昵称",
        key: "nickName"
    },
    {
        label: "积分来源",
        key: "source"
    }
];
const screenConfig = {
    labelWidth: "80px"
};
const handleColumn = [
    {
        label: "全部发放积分",
        key: "message",
        icon: "el-icon-s-promotion",
        type: "success"
    },
    {
        label: "批量发放积分",
        key: "message",
        selection: true,
        icon: "el-icon-s-promotion",
        type: "primary"
    },
];
const tableColumn = [
    {
        label: "会员昵称",
        tooltip: true,
        minWidth: 150,
        key: "nickName"
    },
    {
        label: "手机号",
        tooltip: true,
        minWidth: 110,
        key: "phone"
    },
    {
        label: "发放时间",
        minWidth: 180,
        key: "createTime"
    },
    {
        label: "积分",
        minWidth: 100,
        key: "integral"
    },
    {
        label: "来源",
        minWidth: 100,
        key: "source"
    },
    {
        label: "操作",
        width: 250,
        key: "handle",
        fixed: "right",
        align: "center",
    }
];
const tableConfig = {
    index: true
};

export default {
    screenColumn,
    screenConfig,
    tableColumn,
    tableConfig,
    handleColumn
}