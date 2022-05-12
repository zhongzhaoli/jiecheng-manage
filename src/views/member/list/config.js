const screenColumn = [
    {
        label: "昵称",
        key: "nickName"
    },
    {
        label: "手机号",
        key: "phone"
    },
    {
        label: "运营团队",
        key: "operate"
    },
    {
        label: "所属校区",
        key: "school"
    },
    {
        label: "状态",
        key: "status"
    },
];
const screenConfig = {
    labelWidth: "80px"
};
const tableColumn = [
    {
        label: "昵称",
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
        label: "注册时间",
        minWidth: 180,
        key: "createTime"
    },
    {
        label: "积分",
        minWidth: 80,
        key: "integral"
    },
    {
        label: "状态",
        minWidth: 70,
        align: "center",
        key: "status"
    },
    {
        label: "操作",
        width: 200,
        key: "handle",
        fixed: "right",
        align: "center",
    }
];
const tableConfig = {
    selection: true
};
const handleColumn = [
    {
        label: "全部发站内信",
        key: "message",
        icon: "el-icon-s-promotion",
        type: "success"
    },
    {
        label: "批量发送站内信",
        key: "message",
        selection: true,
        icon: "el-icon-s-promotion",
        type: "primary"
    },
];
export default {
    screenColumn,
    screenConfig,
    tableColumn,
    tableConfig,
    handleColumn
}