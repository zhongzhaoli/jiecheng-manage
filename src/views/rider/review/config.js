const screenColumn = [
    {
        label: "姓名",
        key: "name"
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
        label: "审核状态",
        key: "status"
    },
];
const screenConfig = {
    labelWidth: "80px"
};
const handleColumn = [
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
        label: "申请时间",
        key: "createTime",
        minWidth: 180,
    },
    {
        label: "审核状态",
        align: "center",
        key: "status",
        width: 90,
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
    index: true
};

export default {
    screenColumn,
    screenConfig,
    handleColumn,
    tableColumn,
    tableConfig
}