const screenColumn = [
    {
        label: "标题",
        key: "title"
    },
    {
        label: "类型",
        key: "type"
    }
];

const handleColumn = [
    {
        label: "发送站内信",
        key: "send",
        icon: "el-icon-s-promotion",
        type: "primary"
    },
];

const tableColumn = [
    {
        label: "标题",
        key: "title",
    },
    {
        label: "信息内容",
        key: "type",
    },
    {
        label: "收件人",
        key: "getName",
    },
    {
        label: "操作人",
        key: "sendName"
    },
    {
        label: "发送时间",
        key: "createTime"
    },
    {
        label: "操作",
        fixed: "right",
        align: "center",
        key: "handle",
        width: 200
    }
];

const tableConfig = {
    index: true
};

const screenConfig = {
    labelWidth: "70px"
};

export default {
    screenColumn,
    handleColumn,
    tableColumn,
    tableConfig,
    screenConfig
}