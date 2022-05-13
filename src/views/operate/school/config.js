const screenColumn = [
    {
        label: "学区名称",
        key: "name"
    }
];

const tableColumn = [
    {
        label: "学区名称",
        key: "name"
    },
    {
        label: "范围",
        key: "range"
    },
    {
        label: "经度",
        key: ""
    },
    {
        label: "纬度",
        key: ""
    },
    {
        label: "创建时间",
        key: "createTime"
    },
    {
        label: "操作",
        key: "handle"
    }
];

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
];

const tableConfig = {
    selection: true
};

export default {
    screenColumn,
    tableColumn,
    tableConfig,
    handleColumn
}