const screenColumn = [
    {
        label: "名称",
        key: "name"
    },
    {
        label: "手机号",
        key: "phone"
    },
    {
        label: "所属校区",
        key: "school"
    },
]
const handleColumn = [
    {
        label: "新增",
        key: "add",
        icon: "el-icon-plus",
        type: "primary"
    },
    {
        label: "删除",
        key: "delete",
        selection: true,
        icon: "el-icon-delete",
        type: "danger"
    }
]
const tableColumn = [
    {
        label: "名称",
        tooltip: true,
        minWidth: 100,
        key: "name",
    },
    {
        label: "手机号",
        tooltip: true,
        minWidth: 110,
        key: "phone",
    },
    {
        label: "关联校区",
        tooltip: true,
        minWidth: 150,
        key: "school",
    },
    {
        label: "会员数",
        key: "memberNum",
        width: 80
    },
    {
        label: "订单数",
        key: "orderNum",
        width: 80
    },
    {
        label: "创建时间",
        key: "createTime",
        minWidth: 180
    },
    {
        label: "状态",
        align: "center",
        key: "status",
        width: 100,
    },
    {
        label: "操作",
        align: "center",
        fixed: "right",
        key: "handle",
        width: 250
    },
]
const tableConfig = {
    selection: true
}

export default {
    screenColumn,
    handleColumn,
    tableColumn,
    tableConfig
}